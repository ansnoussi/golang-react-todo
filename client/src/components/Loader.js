import React from "react";

export default function Loader() {
  return (
    <div
      style={{
        position: "absolute",
        height: "100vh",
        width: "100%",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "#BE9B00" }} size={80}>
          loading
        </p>
      </div>
    </div>
  );
}
