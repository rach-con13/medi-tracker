import logo from './logo.svg';
import './App.css';
import { Button } from './Styles/Elements/Button/Button';
import Header from './Components/Header/Header';
import Account from './Components/Account/Account';

function App() {
  return (
    <div className="App">
      <Header />
      <Account />
    </div>
  );
}

export default App;
