"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/assets/foodGuide_logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import Alert from "@/components/Alert";

import Head from "next/head";

export default function Login() {
  interface AlertData {
    show: boolean;
    state: string;
    text: string;
  }
  useEffect(() => {
    document.title = "Food Guide - APP";
    document.documentElement.lang = "en";
  }, []);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Preenchimeto Obrigatório"),
      password: Yup.string().required("Preenchimento Obrigatório"),
    }),
    onSubmit: (values) => {
      if (values.name == "Test" && values.password == "123456") {
        setAlertData({
          show: true,
          state: "success",
          text: "Login successful!",
        });
        setTimeout(() => {
          router.push("/dashboard/consult");
        }, 2600);
      } else {
        setAlertData({
          show: true,
          state: "danger",
          text: "Login Invalid",
        });
      }
      setTimeout(() => {
        setAlertData({
          show: false,
          state: "",
          text: "",
        });
      }, 2500);
    },
  });

  const [alertData, setAlertData] = useState<AlertData>({
    show: false,
    state: "",
    text: "",
  });

  return (
    <>
      <Head>
        <title>Food Guide - APP</title>
        <meta name="description" content="Bem-vindo ao Food Guide App" />
      </Head>

      <div>
        <div className="login-box shadow-lg pt-4">
          <div className="header flex justify-center">
            <Image src={Logo} alt="Picture of the author" className="logo" />
          </div>
          <div className="body py-4">
            <div className="grid grid-cols-1 text-center">
              <h1>Welcome to Food Guide</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 px-7 pt-1">
                <label className="label">
                  Name: <br />
                  <input
                    type="text"
                    className="input"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <span className="validation-warning">
                      {formik.errors.name}
                    </span>
                  ) : null}
                </label>
              </div>
              <div className="grid grid-cols-1 px-7 pt-3">
                <label className="label">
                  Password: <br />
                  <input
                    type="text"
                    className="input"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <span className="validation-warning">
                      {formik.errors.password}
                    </span>
                  ) : null}
                </label>
              </div>
              <div className="grid grid-cols-1 px-7 pt-6">
                <button type="submit" className="btn-default">
                  Login
                </button>
              </div>
              <div className="grid grid-cols-1 text-center pt-3">
                <small>Version 1.0.0</small>
              </div>
            </form>
          </div>
        </div>
        <div className="toast-user">
          <p>Use to access:</p>
          <ul>
            <li>Name: Test</li>
            <li>Password: 123456</li>
          </ul>
        </div>
      </div>
      {alertData.show ? (
        <Alert text={alertData.text} state={alertData.state} />
      ) : null}
    </>
  );
}
