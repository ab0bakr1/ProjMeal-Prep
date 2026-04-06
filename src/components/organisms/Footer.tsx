import React from "react";

export default function Footer() {
  return(
    <footer className="bg-gray-800 text-white py-6">
      <div className="ds-container text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
