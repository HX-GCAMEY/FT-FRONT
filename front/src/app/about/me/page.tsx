"use client";
import CustomButton from "@/components/CustomButton";

import {signIn, signOut, useSession} from "next-auth/react";

function Me() {
  const {data: session} = useSession();
  console.log(session);

  const user = session?.user;
  const userEmail = user?.email;
  const userName = user?.name;

  if (session) {
    return (
      <div>
        <h1>
          Welcome {userName} ({userEmail})
        </h1>
        <CustomButton text="Click me" onClick={() => signOut()} />
      </div>
    );
  }

  return (
    <div>
      <h1>You are not logged in</h1>
      <p>Log in with Github</p>
      <CustomButton text="Login" onClick={() => signIn()} />
    </div>
  );
}

export default Me;
