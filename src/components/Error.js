import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h3>
        {err.staus}: {err.status.text}
      </h3>
    </div>
  );
};

export default Error;
