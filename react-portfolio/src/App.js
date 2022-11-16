import logo from './logo.svg';
import './style.css';
import Header from './components/header';
import Nav from './components/nav';
import Project from './components/project';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
