import Navbar from './components/Navbar';
import './App.css';
import Form from './components/form';
import Todolist from './components/Todolist';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar title="Todo"/>
       <Form/>
    </div>
    <Routes>
      <Route exact path='/'/>
    <Route path='/todolist' element={<Todolist/>}/>
    </Routes>
    </Router>
  );
}

export default App;
