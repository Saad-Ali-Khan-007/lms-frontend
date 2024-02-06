import React from "react";

const Footer = () => {
  return (
    <div class="mt-10 border-t bg-gray-800 color border-slate-900/5 py-10">
      <svg
        class="mx-auto h-5 w-auto text-white"
        aria-hidden="true"
        viewBox="0 0 160 24"
        fill="none"
      ></svg>
      <p class="mt-5 text-center text-sm leading-6 text-white">
        ©Learning Management System Inc. All rights reserved.
      </p>
      <div class="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-white">
        <a href="/privacy-policy">Privacy policy</a>
        <div class="h-4 w-px bg-white"></div>
        <a href="/changelog">Changelog</a>
      </div>
    </div>
  );
};

export default Footer;
