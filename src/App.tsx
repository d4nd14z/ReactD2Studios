import reactLogo from './assets/react.svg';
import { Navbar } from './components/Navbar';
import { Register } from './components/Register';

function App() {

    return (
      <>
        <Navbar/>
        <div className="container">
          <Register />
        </div>
      </>
    )
}

export default App
