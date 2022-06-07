import './App.css';
import CleanUpTest from './cleanup_test/cleanUpTest';
import UnitConversion from './unit_conversion_test/unitConversion';
import UseEffectTest from './use_effect_test/useEffectTest';

function App() {

  return (
    <div className="MyApp">
      <CleanUpTest />
      <UseEffectTest />
      <UnitConversion />
    </div>
  );
}

export default App;
