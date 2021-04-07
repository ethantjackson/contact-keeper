import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p className='my-1'>
        This full stack React app helps you manage secure contact lists.
      </p>
      <p className='bg-dark p'>
        <strong>Version: 1.0.0</strong>
      </p>
    </Fragment>
  );
};

export default About;
