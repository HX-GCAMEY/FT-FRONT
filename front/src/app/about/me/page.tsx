"use client";
import CustomButton from "@/components/CustomButton";

function Me() {
  return (
    <div>
      <p>Soy Gama</p>
      <CustomButton
        text="Click me"
        onClick={() => console.log("Hiciste click")}
      />
    </div>
  );
}

export default Me;
