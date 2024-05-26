"use client";

import { signIn } from "next-auth/react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Login() {
  const loginHandler = async () => {
    await signIn("google", { callbackUrl: '/' })
  }

  return (
    <Grid sx={{
      position: 'absolute', 
      left: '50%', 
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <Button variant="contained" onClick={loginHandler}>Sign in with Google</Button>
    </Grid>
  )
}
