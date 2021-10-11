import React from "react";
import Loader from "react-loader-spinner";

export default function LoaderOverlay() {
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
        <Loader type="ThreeDots" color="#ffeaa7" height="100" width="100" />
      </div>
    </div>
  );
}
