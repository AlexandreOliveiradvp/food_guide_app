"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/assets/foodGuide_logo.png";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const requestLogin = () => {
    //Instalar lib Formik+yup para lidar com validacoes de formulario
    if (name == "Test" && password == "123456") {
      router.push("/dashboard");
    } else {
      alert("Usuário Inválido!");
    }
  };

  return (
    <main className="bg-login">
      <div className="mask">
        <div className="container mx-auto flex justify-center min-h-screen items-center">
          <div className="login-box shadow-lg pt-4">
            <div className="header flex justify-center">
              <Image src={Logo} alt="Picture of the author" className="logo" />
            </div>
            <div className="body pt-4">
              <div className="grid grid-cols-1 text-center">
                <h1>Bem Vindo ao Food Guide</h1>
              </div>
              <div className="grid grid-cols-1 px-7 pt-1">
                <label className="label">
                  Name: <br />
                  <input
                    name="name"
                    type="text"
                    className="input"
                    onChange={handleChangeName}
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 px-7 pt-3">
                <label className="label">
                  Password: <br />
                  <input
                    name="password"
                    type="text"
                    className="input"
                    onChange={handleChangePassword}
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 px-7 pt-6">
                <button
                  type="button"
                  className="btn-default"
                  onClick={requestLogin}
                >
                  Login
                </button>
              </div>
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
