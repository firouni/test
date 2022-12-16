//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Aboutus from './Components/Aboutus';
import Project1 from './Components/Projects/Project1';
import Project2 from './Components/Projects/Project2';
import Project3 from './Components/Projects/Project3';
import Project4 from './Components/Projects/Project4';
import Contact from './Components/Contactus';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Aboutus/>
      <Project1/><Project2/><Project3/><Project4/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
