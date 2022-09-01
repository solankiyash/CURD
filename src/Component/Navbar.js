import React, { useState, useEffect, useContext } from "react";
import { Button, Form, Input } from "antd";
import SingUp from "./SingUp";
import Login from "./Login";
import { ContextProvider } from "./Context";
function Navbar() {
  const { open, setOpen } = useContext(ContextProvider);
  console.log(open, "open");
  // console.log(state, "state1");

  const handelSingUp = () => {
    setOpen(true);
  };
  const handelSingin = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="singup">
        <Button className="btn btn-light" onClick={handelSingUp}>
          SingUp
        </Button>
        <span>
          <Button className="btn btn-light" onClick={handelSingin}>
            SingIn
          </Button>
        </span>
      </div>
      {open === true ? <SingUp /> : open === false ? <Login /> : ""}
    </div>
  );
}

export default Navbar;
