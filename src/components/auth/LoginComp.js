import React, { useState, useEffect } from "react";
import { Button, Input } from "../common/customComp";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useFormik } from "formik";
import * as Yup from "yup";
import { passRegExp } from "../common/constant";
import { gapi } from "gapi-script";
import GoogleOauthLogin from "./google_login";
import GoogleOauthLogout from "./google_logout";

function LoginComp() {
  const [showPassword, setshowPassword] = useState("password");
  const clientId =
    "448976885238-d5af43tckj241lecknqjdjmmaql9oov3.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string()
        .matches(
          passRegExp,
          "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    // <div className="login_container">
    <div className="login_div">
      <div className="w-50 m-auto">
        <img className="w-100" src="/assets/login_logo.png" alt="login_logo" />
      </div>
      <p className="login_text text-center text-secondary">
        Log in to your account
      </p>
      <GoogleOauthLogin />
      <GoogleOauthLogout />
      <Input
        type="text"
        name="userName"
        eventHandler={formik.handleChange}
        value={formik.values.userName}
        placeholder="Email / Mobile No."
      />
      <p>
        {formik.errors.userName && formik.touched.userName ? (
          <span className="text-danger">{formik.errors.userName}</span>
        ) : null}
      </p>
      <div className="d-flex jsutify-content-between align-items-center w-100 bg_light custom_input">
        <input
          className="password_input"
          type={showPassword}
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
        />
        {showPassword === "text" ? (
          <VisibilityOffIcon
            className="svg_icon"
            onClick={() => setshowPassword("password")}
          />
        ) : (
          <VisibilityIcon
            className="svg_icon"
            onClick={() => setshowPassword("text")}
          />
        )}
      </div>
      <p>
        {formik.errors.password && formik.touched.password ? (
          <span className="text-danger">{formik.errors.password}</span>
        ) : null}
      </p>
      <Button buttonText="Log In" eventHandler={formik.handleSubmit} />
      <div className="d-flex justify-content-end text-secondary">
        <span style={{ cursor: "pointer" }} href="">
          Forgot Password?
        </span>
        {/* <Link href="/auth/register" className="anchor_tag">
          Sign Up
        </Link> */}
      </div>
    </div>
    // </div>
    // https://www.youtube.com/watch?v=p1GmFCGuVjw
  );
}

export default LoginComp;
