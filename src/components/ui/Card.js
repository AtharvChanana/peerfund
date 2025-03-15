import React from "react";

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={`border border-gray-700 rounded-lg shadow-md p-4 bg-gray-800 text-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-semibold text-white">{children}</h2>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
