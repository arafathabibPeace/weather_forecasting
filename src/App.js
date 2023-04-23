import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingScreen from './pages/LandingScreen'
import HomeScreen from './pages/HomeScreen'
import WeatherScreen from './pages/WeatherScreen'
import NoPageScreen from './pages/NoPageScreen'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingScreen />} />
          <Route exact path="/home" element={<HomeScreen />} />
          <Route exact path="/weather" element={<WeatherScreen />} />
          <Route exact path="*" element={<NoPageScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
