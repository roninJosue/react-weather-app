import React from 'react';
import PropTypes from 'prop-types';
import useWelcomeScreen from "./hooks/useWelcomeScreen";

const WelcomeScreen = ({children}) => {

  const {myRefDiv} = useWelcomeScreen()

  return (
    <div className='full' ref={myRefDiv}>
      {children}
    </div>
  );
};

WelcomeScreen.propTypes = {
  children: PropTypes.node
};

export default WelcomeScreen;
