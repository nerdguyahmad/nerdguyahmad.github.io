import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import '../styles/App.css';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
