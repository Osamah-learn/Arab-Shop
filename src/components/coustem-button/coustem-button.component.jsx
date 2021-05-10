import React from "react";
import "./coustem-button.style.scss";
export default function CoustemButton({
  children,
  isGoogleSignIn,
  ...otherProps
}) {
  return (
    <button
    className={`${isGoogleSignIn ?"google-sign-in":""} custom-button`}
    {...otherProps}
  >
      {children}
    </button>
  );
}
