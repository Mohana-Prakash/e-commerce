import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import { signInCallback } from "./authCallback";

export function GoogleButton() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
  };

  const handleSignIn = async (path) => {
    await signIn({ redirect: false }).then((e) => console.log(e));
  };

  return (
    <div>
      {!session ? (
        <button
          onClick={handleSignIn}
          className="custom_button d-flex align-items-center justify-content-center">
          <GoogleIcon style={{ marginRight: "10px" }} />
          Sign in with Google
        </button>
      ) : (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button
            onClick={handleSignOut}
            className="custom_button  d-flex align-items-center justify-content-center">
            <GoogleIcon style={{ marginRight: "10px" }} />
            Log out
          </button>
        </>
      )}
    </div>
  );
}
export default GoogleButton;
