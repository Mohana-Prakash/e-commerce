import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = process.env.CLIENT_ID;

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
