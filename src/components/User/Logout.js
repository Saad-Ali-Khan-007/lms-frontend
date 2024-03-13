import React from "react";

const Logout = () => {
  localStorage.removeItem("userLoginStatus");
  window.location.href = "/user-login";
  return <div></div>;
};

export default Logout;
