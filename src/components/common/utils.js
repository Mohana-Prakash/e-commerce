export const ErrorTag = ({ formik, name }) => {
  return formik.errors[name] && formik.touched[name] ? (
    <span className="error_text">{formik.errors[name]}</span>
  ) : null;
};
