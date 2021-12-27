import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from 'three'

const WelcomeScreen = ({children}) => {
  const myRefDiv = useRef(null)
  const [vanta, setVanta] = useState(0);

  console.log(myRefDiv)
  console.count('vanta')

  useEffect(() => {
    if (!vanta) {
      setVanta(clouds({
        el: myRefDiv.current,
        THREE
      }))
    }

    return () => {
      if (vanta) {
        vanta.destroy()
        console.log('Destroy')
      }
    }
  }, [vanta])

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
