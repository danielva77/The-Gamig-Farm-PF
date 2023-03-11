import React, { useState } from 'react';
import "../ReloadPageBtn/reload.css"

const ReloadPageBtn = () => {

  const handleReloadPage = e => {
    window.location.reload(false);
  };


  return (
    <button onClick={handleReloadPage} className="botonReset">
      X
    </button>

  );
};

export default ReloadPageBtn;