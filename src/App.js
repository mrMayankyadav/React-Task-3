import logo from './logo.svg';
import './App.css';

import ColorPicker from './Components/ColorPicker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {

  const arr = ["blue", "red", "yellow", "cyan", "green"];

  return (
    <div>
      <ColorPicker arr = {arr}/>
    </div>
  );
}

export default App;
