import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";

export function GoogleButton() {
  const { data: session } = useSession();

  const handleSignIn = async () => {
    try {
      const response = await signIn(); // This will trigger the sign-in process
      // Handle the response here
      console.log("Sign-in successful:", response);
      // Do something with the response, e.g., redirect to a specific page
    } catch (error) {
      console.error("Sign-in error:", error);
      // Handle sign-in error, e.g., display an error message
    }
  };

  return (
    <div>
      <>
        {!session ? (
          <button
            // onClick={() => signIn("google")}
            onClick={handleSignIn}
            className="custom_button d-flex align-items-center justify-content-center">
            <GoogleIcon style={{ marginRight: "10px" }} />
            Sign in with Google
          </button>
        ) : (
          <>
            <p>Welcome, {session.user.name}!</p>
            <button
              onClick={() => signOut()}
              className="custom_button  d-flex align-items-center justify-content-center">
              <GoogleIcon style={{ marginRight: "10px" }} />
              Log out
            </button>
          </>
        )}
      </>
    </div>
  );
}
export default GoogleButton;
