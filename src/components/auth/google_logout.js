import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "448976885238-d5af43tckj241lecknqjdjmmaql9oov3.apps.googleusercontent.com";

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
