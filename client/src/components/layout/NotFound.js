import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <div className='fas fa-exclamation-triangle'></div> Page Not Found
      </h1>
      <p className='large'>Sorry, this page does not exist</p>
    </Fragment>
  );
};

export default NotFound;
