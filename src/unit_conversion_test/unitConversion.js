import { useState } from "react";
import KmToMiles from "./kmToMiles";
import MinutesToHours from "./minutesToHours";

function UnitConversion() {
  const [index, setIndex] = useState('0');
  const onSelect = (event) => {
    setIndex(event.target.value);
  }

  return (
    <div>
      <h1 className="hi">Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">minutes & hours</option>
        <option value="1">km & miles</option>
      </select>
      {
        index === '0' ? <MinutesToHours /> : <KmToMiles />
      }
    </div>
  )
}

export default UnitConversion;
