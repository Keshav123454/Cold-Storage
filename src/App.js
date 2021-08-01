import './App.css';
import Contactus from './components/Contactus';
import Bind from './components/Bind';
import {Route,Link} from 'react-router-dom';

function App() {
  return (
    <div class="App">
      <Route exact path = "/" component={Bind} />
      <Route exact path = "/Contactus" component={Contactus} />
    </div>
    
  );
}

export default App;
