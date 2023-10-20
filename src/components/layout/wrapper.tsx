import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';

const Wrapper: FC<{ children: JSX.Element }> = ({children}): JSX.Element => {
  return (
    <>
      {children}
      <ToastContainer/>
    </>
  );
};

export default Wrapper;