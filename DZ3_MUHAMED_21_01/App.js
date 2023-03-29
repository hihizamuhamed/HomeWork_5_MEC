import "./App.css";
import { useDispatch, useSelector } from "react-redux";


// import ContactsPage from './pages/ContactsPage';
// import MainPage from './pages/MainPage';
function App() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);

  const addscore=()=>{
    dispatch({
      type:'ADD',
      payload:1,
    })
  }

  const minscore=()=>{
    dispatch({
      type:'REMOVE',
      payload:1,
    })
  }


  return (
    <div className="App">
      <div style={{ fontSize:'50px'}}>{score}</div>
      <div style={{ display: "flex" }}>
        <button onClick={addscore}>PLUS</button>
        <button onClick={minscore}>MINUS</button>
      </div>
    </div>
  );
}

export default App;
