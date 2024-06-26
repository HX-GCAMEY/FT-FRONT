"use client";

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import CustomButton from "@/components/CustomButton";

function ProtectedPage() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/signin");
    }
  });

  return (
    <div>
      {token ? (
        <div>
          <h1>Protected page</h1>
          <p>Only logged in users can see this page</p>
          <CustomButton
            text="Logout"
            onClick={() => {
              localStorage.removeItem("token");
              setToken(null);
              router.push("/signin");
            }}
          />
        </div>
      ) : (
        <h1>Redirecting...</h1>
      )}
    </div>
  );
}

export default ProtectedPage;
