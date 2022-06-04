import { useState } from "react";

function KmToMiles() {
    const [km, setKm] = useState(0);
    const [miles, setMiles] = useState(0);
    const [reversed, setReversed] = useState(false);
    const onChangeKm = (e) => {
      const km = e.target.value;
      setKm(km);
      setMiles(km / 0.621371);
    }
    const onChangeMiles = (e) => {
      const miles = e.target.value;
      setMiles(miles);
      setKm(miles * 1.60934);
    }
    const reset = () => {
      setKm(0);
      setMiles(0);
    }
    const reverse = () => {
      setReversed((reversed) => !reversed);
    }

    return (
        <div>
          <h3 className="hi">Km To Miles</h3>
          <div>
            <label htmlFor="km">Km : </label>
            <input
              value={km}
              id="km"
              placeholder="Km"
              type="number"
              onChange={onChangeKm}
              disabled={reversed}
            />
          </div>
          <div>
            <label htmlFor="miles">Miles : </label>
            <input
              value={miles}
              id="miles"
              placeholder="Miles"
              type="number"
              onChange={onChangeMiles}
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

export default KmToMiles;