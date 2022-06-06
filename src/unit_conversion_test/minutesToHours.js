import { useState } from "react";
import Btn from "../component/btn";

function MinutesToHours() {
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [reversed, setReversed] = useState(false);
    const onChangeMinutes = (e) => {
      const minutes = e.target.value;
      setMinutes(minutes);
      setHours(minutes / 60);
    }
    const onChangeHours = (e) => {
      const hours = e.target.value;
      setHours(hours);
      setMinutes(hours * 60);
    }
    const reset = () => {
      setMinutes(0);
      setHours(0);
    }
    const reverse = () => {
      setReversed((reversed) => !reversed);
    }

    return (
        <div>
          <h3 className="hi">Minutes To Hours</h3>
          <div>
            <label htmlFor="minutes">Minutes : </label>
            <input
              value={minutes}
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChangeMinutes}
              disabled={reversed}
            />
          </div>
          <div>
            <label htmlFor="hours">Hours : </label>
            <input
              value={hours}
              id="hours"
              placeholder="Hours"
              type="number"
              onChange={onChangeHours}
              disabled={!reversed}
            />
          </div>
          {/* <button onClick={reverse}>
            {reversed ? "Turn back" : "Reverse"}
          </button>
          <button onClick={reset}>Reset</button> */}
          <Btn onClick={reverse} text={reversed ? "Turn back" : "Reverse"}></Btn>
          <Btn onClick={reset} text='Reset'></Btn>
        </div>
      );
}

export default MinutesToHours;