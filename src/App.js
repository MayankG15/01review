// import logo from './logo.svg';
import './App.css';
// @ts-ignore
import TextForm from './component/TextForm';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        
        <TextForm heading="Enter the text to analyze."/>
      </div>
    
    </div>
  );
}

export default App;
