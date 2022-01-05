import {useEffect, useRef, useState} from "react";
import clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const useWelcomeScreen = () => {
  const myRefDiv = useRef(null)
  const [vanta, setVanta] = useState(0);

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

  return {
    myRefDiv
  }
}

export default useWelcomeScreen