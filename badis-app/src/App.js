import './App.css';
import Comp1 from './comp1';
import Comp2 from './comp2';
import ReactStars from "react-rating-stars-component";
function App() {
  const tab=[1,2,'badis']
  return (
    
    <div className="App">
      <Comp2/>
      <header className="App-header">
        
        <h1>HELLO</h1>
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
        />
        
      </header>
      <Comp1/>
    </div>
    
  );
}

export default App;
