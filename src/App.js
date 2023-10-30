import './App.css';
import HomePageButtons from './components/buttons/homePageButtons';
import { Route, Routes } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import LoT2TempStratumGuide from './pages/LoT2-Temperature-Stratum-Guide';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <h2>Welcome to Xar's (work in progress) page!</h2>
        <Routes>
          <Route path='/' element={
            <div className='white-rounded-border d-flex flex-column'>
              <HomePageButtons />
            </div>
          } />
          <Route path="/about-me" element={
            <div className='white-rounded-border'>
              <AboutMe />
            </div>
          } />
          <Route path="/lot2-temperature-stratum-guide" element={
            <div className="white-rounded-border">
              <LoT2TempStratumGuide />
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
