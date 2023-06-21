import './App.css';
import AddItem from './component/additem';
import MainCard1 from './component/maincard1';
import MainCard2 from './component/maincard2';
import MainCounter1 from './component/maincounter1';
import MainCounter2 from './component/maincounter2';
import Question from './component/question';

function App() {
  return (
    <div className="main--container">
      <Question />
     <MainCounter1 />
     <MainCounter2 />
     <AddItem />
     <MainCard1 />
     <MainCard2 />
    </div>
  );
}

export default App;
