import { useState } from "react";

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
          <button onClick={reverse}>
            {reversed ? "Turn back" : "Reverse"}
          </button>
          <button onClick={reset}>Reset</button>
        </div>
      );
}

export default MinutesToHours;