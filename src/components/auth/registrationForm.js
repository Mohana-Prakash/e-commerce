import React from "react";
import { Button, Input } from "../common/customComp";
import { useFormik } from "formik";
import * as Yup from "yup";
import { passRegExp, phoneRegExp, registration_arr } from "../common/constant";
import { ErrorTag } from "../common/utils";

function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(255).required("First name is required"),
      lastName: Yup.string().max(255).required("Last name is required"),
      email: Yup.string().max(255).required("Email is required"),
      mobileNumber: Yup.string()
        .matches(phoneRegExp, "Invalid Mobile number")
        .required("Mobile number required"),
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
    <div className="register_div">
      <div className="w-50 m-auto">
        <img className="w-100" src="/assets/login_logo.png" alt="login_logo" />
      </div>
      <p className="login_text text-center text-secondary">
        Looks like you are new here!
      </p>
      {registration_arr.map((e) => {
        return (
          <>
            <Input
              key={e.name}
              type={e.type}
              name={e.name}
              eventHandler={formik.handleChange}
              value={formik.values[e.name]}
              placeholder={e.label}
            />
            <ErrorTag formik={formik} name={e.name} />
            {/* {formik.errors[e.name] && formik.touched[e.name] ? (
              <span className="text-danger">{formik.errors[e.name]}</span>
            ) : null} */}
          </>
        );
      })}
      <Button buttonText="Register" eventHandler={formik.handleSubmit} />
    </div>
  );
}

export default RegistrationForm;
