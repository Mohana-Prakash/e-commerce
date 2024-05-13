import React, { useState, useEffect } from "react";
import { Button, Input } from "../common/customComp";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useFormik } from "formik";
import * as Yup from "yup";
import { passRegExp } from "../common/constant";
import GoogleButton from "./google_btn";
import { useSession } from "next-auth/react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function LoginComp({ modal, handleClose = null }) {
  const [showPassword, setshowPassword] = useState("password");
  const { data: session } = useSession();
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
      handleClose();
    },
  });

  return (
    <div className={modal ? "login_div_modal" : "login_div"}>
      <>
        {!session && (
          <>
            {modal && (
              <div className="d-flex justify-content-end" onClick={handleClose}>
                <HighlightOffIcon className="svg_icon" />
              </div>
            )}
            <div className="w-50 m-auto">
              <img
                className="w-100"
                src="/assets/login_logo.png"
                alt="login_logo"
              />
            </div>
            <p className="login_text text-center text-secondary">
              Log in to your account
            </p>
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
            <div className="d-flex justify-content-between align-items-center w-100 bg_light custom_input">
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
            </div>
            <p className="text-center">
              <b>OR</b>
            </p>
          </>
        )}
        <GoogleButton />
      </>
    </div>
    // https://www.youtube.com/watch?v=p1GmFCGuVjw
  );
}

export default LoginComp;
