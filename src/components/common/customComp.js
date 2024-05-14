export function useCommonRouter() {
  let Router;
  if (typeof window !== "undefined") {
    Router = require("next/router").default;
  }
  const goToPage = (path) => {
    if (Router) {
      Router.push(path);
    }
  };

  return {
    goToPage,
  };
}

export const Input = ({ type, name, eventHandler, value, placeholder }) => {
  return (
    <input
      className="custom_input"
      type={type}
      name={name}
      onChange={eventHandler}
      value={value}
      placeholder={placeholder}
    />
  );
};

export const Button = ({ buttonText, eventHandler, icon }) => {
  return (
    <button className="custom_button" onClick={eventHandler}>
      {icon}
      <span className="mx-3">{buttonText}</span>
    </button>
  );
};

export const dynamicRouteHandler = (router, path, obj) => {
  router.push({
    pathname: path,
    query: obj,
  });
};
