import Navbar from './components/Navbar';
import './App.css';
import Form from './components/form';

function App() {
  return (
    <div className="App">
      <Navbar title={Todo}/>
      <Form/>   
    </div>
  );
}

export default App;
