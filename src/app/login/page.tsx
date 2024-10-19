"use client";

//import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/assets/foodGuide_logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
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
        router.push("/dashboard");
      } else {
        alert("Usuário Inválido!");
      }
    },
  });

  return (
    <main className="bg-login">
      <div className="mask">
        <div className="container mx-auto flex justify-center min-h-screen items-center">
          <div className="login-box shadow-lg py-4">
            <div className="header flex justify-center">
              <Image src={Logo} alt="Picture of the author" className="logo" />
            </div>
            <div className="body pt-4">
              <div className="grid grid-cols-1 text-center">
                <h1>Bem Vindo ao Food Guide</h1>
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
      </div>
    </main>
  );
}
