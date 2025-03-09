"use client";

import React from "react";
import "../scss/alert.scss";
import { FaCheckCircle } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";


type Props = {
  text: string;
  state: string;
};
const Alert: React.FC<Props> = ({ text, state }) => {
  return (
    <div
      className={`alert-default p-2 flex ${
        state == "success" ? "alert-success" : "alert-danger"
      }`}
    >
      <div className="flex-auto w-15 pt-2">
        {state == "success" ? (
          <FaCheckCircle className="icon" />
        ) : (
          <TiWarning className="icon" />
        )}
      </div>
      <div className="flex-auto w-60 ps-3 pt-2">{text}</div>
    </div>
  );
};

export default Alert;
