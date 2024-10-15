// No topo do arquivo Login.tsx
"use client";

import React, { useState } from "react";

import Image from "next/image";
import Logo from "@/app/assets/foodGuide_logo.png";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(password);
  };

  return (
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
              Nome: <br />
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
              Senha: <br />
              <input
                name="password"
                type="text"
                className="input"
                onChange={handleChangePassword}
              />
            </label>
          </div>
          <div className="grid grid-cols-1 px-7 pt-6">
            <button type="submit" className="btn-default">Entrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
