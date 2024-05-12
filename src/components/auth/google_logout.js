import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = process.env.CLIENT_ID;

function GoogleOauthLogout() {
  const onSuccess = (res) => {
    console.log("logout success", res.profileObj);
  };
  return (
    <div className="google_btn">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
export default GoogleOauthLogout;
