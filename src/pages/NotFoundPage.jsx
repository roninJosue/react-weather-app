import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      Not Found
      <Link to='/main'>
        Go to main
      </Link>
    </div>
  );
};

export default NotFoundPage;
