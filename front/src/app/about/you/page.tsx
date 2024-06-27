"use client";

import {useState, useEffect} from "react";
import CustomButton from "@/components/CustomButton";
import {useRouter} from "next/navigation";

function You() {
  const router = useRouter();
  const [token, setToken] = useState(
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    setToken(token);
  }, []);

  if (token) {
    return (
      <div>
        <p>Welcome back Bartolomiau</p>
        <CustomButton
          text="Logout"
          onClick={() => {
            typeof window !== "undefined"
              ? localStorage.removeItemItem("token")
              : null;
            setToken(null);
          }}
        />
        <h2>Pudes acceder a info protegida</h2>
        <CustomButton
          text="Acceder"
          onClick={() => router.push("/protected")}
        />
      </div>
    );
  }

  return (
    <div>
      <p>Tienes que registrarte</p>
      <CustomButton text="Login" onClick={() => router.push("/signin")} />
    </div>
  );
}

export default You;
