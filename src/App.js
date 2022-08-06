import './App.css';
import HomePageButtons from './components/buttons/homePageButtons';
import { Route, Routes } from "react-router-dom";
import AboutMe from './pages/AboutMe';

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
