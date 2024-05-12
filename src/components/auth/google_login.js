import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "448976885238-d5af43tckj241lecknqjdjmmaql9oov3.apps.googleusercontent.com";

function GoogleOauthLogin() {
  const onSuccess = (res) => {
    console.log("success", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("failure", res);
  };
  return (
    <div className="google_btn">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
export default GoogleOauthLogin;
