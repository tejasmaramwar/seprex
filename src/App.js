import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp'
import AppFooter from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavbarComp/>
      {/* <footer id="footer">
        <AppFooter />
      </footer> */}
    </div>
  );
}

export default App;
