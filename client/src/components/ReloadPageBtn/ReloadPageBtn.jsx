import React, { useState } from 'react';

const ReloadPageBtn = () => {

  const handleReloadPage = e => {
    window.location.reload(false);
  };


  return (
    <button onClick={handleReloadPage}>
      Reset filters
    </button>

  );
};

export default ReloadPageBtn;