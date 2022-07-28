import logo from './logo.svg';
import './App.css';
import HomePageButtons from './components/buttons/homePageButtons';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <h2>Welcome to Xar's (work in progress) page!</h2>
        <div className='buttons-list'>
          <HomePageButtons />
        </div>
      </div>
    </div>
  );
}

export default App;
