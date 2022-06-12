import './App.css';
import CleanUpTest from './cleanup_test/cleanUpTest';
import CoinTracker from './coin_tracker/coinTracker';
import MovieApp from './movie_app/movieApp';
import ToDoList from './to_do_list/toDoList';
import UnitConversion from './unit_conversion_test/unitConversion';
import UseEffectTest from './use_effect_test/useEffectTest';

function App() {
  return (
    <div className="MyApp">
      <MovieApp />
      {/* <CoinTracker /> */}
      {/* <ToDoList /> */}
      {/* <CleanUpTest /> */}
      {/* <UseEffectTest /> */}
      {/* <UnitConversion /> */}
    </div>
  );
}

export default App;
