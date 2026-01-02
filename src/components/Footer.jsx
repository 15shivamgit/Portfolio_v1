import React from "react";
import useDisableInspect from "../hooks/useDisableInspect"; 

export default function Footer() {
  useDisableInspect(); 

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Shivam Singh™. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Begusarai, Bihar | +91 748881563
        </p>
      </div>
    </footer>
  );
}
