import logo from './logo.svg';
import './App.css';
import { WeatherAPI } from './components/WeatherAPI';
import WeatherForm from './components/WeatherForm';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
    <WeatherAPI/>
    </div>
  )
}

export default App;
