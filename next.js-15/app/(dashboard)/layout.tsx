import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-3xl bg-teal-500 p-2">Dashboard</h1>
      {children}
    </div>
  );
};

export default layout;
