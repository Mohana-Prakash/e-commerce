import React from "react";
import { Button, Input, useCommonRouter } from "./customComp";

function LoginComp() {
  const { goToPage } = useCommonRouter();
  const inputHandler = () => {};
  return (
    <div className="login_div">
      <div>
        <div className="w-50 m-auto">
          <img className="w-100" src="/assets/login_logo.png" />
        </div>
        <p className="login_text text-center text-light">
          Log in to your account
        </p>
        <Input
          type="text"
          name="userName"
          eventHandler={inputHandler}
          value=""
          placeholder="Email / Mobile No."
        />
        <Input
          type="text"
          name="userName"
          eventHandler={inputHandler}
          value=""
          placeholder="Password"
        />
        <Button buttonText="Log In" />
      </div>
      <div className="mt-2 d-flex justify-content-end text-light">
        <span style={{ marginRight: "10px", cursor: "pointer" }} href="">
          Forgot?
        </span>
        <a className="anchor_tag" href="/auth/register">
          Sign Up
        </a>
      </div>
    </div>
    // https://www.youtube.com/watch?v=p1GmFCGuVjw
  );
}

export default LoginComp;
