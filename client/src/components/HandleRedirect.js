import React from "react";

function handleRedirect() {
  if (navigator.language.includes("es")) {
    window.location.replace("/es-ar");
  } else {
    window.location.replace("/en-us");
  }
  return <></>;
}

export default handleRedirect;
