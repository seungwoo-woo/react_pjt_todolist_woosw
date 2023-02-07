import { useState } from "react";
import './toggle.css';


function Toggle({ label, toggled, onClick }) {

  const [isToggled, setIsToggle] = useState(toggled)

  // const callback = () => {
  //     setIsToggle(!isToggled)
  //     onClick(!isToggled)
  // }

  function logState (state) {
    setIsToggle(!isToggled);
    console.log("Toggled : ", state); 
  } 

  return (
      <label>
          <input type="checkbox" defaultChecked={isToggled} onClick={logState} />
          <span />
          <strong>{label}</strong>
      </label>
  )
}

export default Toggle;