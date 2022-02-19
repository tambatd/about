import './App.css';
import ExeArray from "./components/map"
import Exe from "./components/exe/exe"
import Footer from './components/footer/footer'
import GasExe from './components/gas/gasExe';

const App = () => {
  return (
    <div className="App">
      <div className="Executables">
      {ExeArray.map((executable) =>
        <Exe id={executable.name} key={executable.name} name={executable.name} image={executable.image} link={executable.link} />
      )}
      <GasExe/>
      </div>
      <Footer />
    </div>
  );
}


export default App;
