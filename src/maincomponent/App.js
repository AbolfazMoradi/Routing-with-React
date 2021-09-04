import Buttons from "../components/Buttons";
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      
      <Route path="/" exact component={Buttons} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />

    </div>
  );
}

export default App;
