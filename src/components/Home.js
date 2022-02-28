import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>
          KEEP IT<i className="fas fa-pen-nib ml-3"></i>
        </h1>
        <p className="text-muted">A simple note taking app</p>
        <div className="small mt-5 mb-3 mb-md-0">
          Copyright © 2021. All rights reserved.
        </div>
      </div>
    </div>
  );
}
