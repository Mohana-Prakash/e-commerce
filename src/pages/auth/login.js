import React from "react";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  return (
    <div>
      Login
      <p onClick={() => router.push("/admin/dashboard")}>Redirect</p>
    </div>
  );
}

export default Login;
