import React from "react";

export default function Header({ titulo, parrafo }) {
  return (
    <div className="jumbotron text-center" style={{ "margin-bottom": 0 }}>
      <h1>{titulo}</h1>
      <p>{parrafo}</p>
      <h2>esta pare no es dinámica</h2>
    </div>
  );
}
