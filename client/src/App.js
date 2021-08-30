import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Create from "./pages/Create";
import DailyExercises from "./pages/DailyExercises";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" page={Home} />
        <Route path="/explore" page={Explore} />
        <Route path="/dailyexercises" page={DailyExercises} />
        <Route path="/create" page={Create} /> 
        <Route path="/favorites" page={Favorites} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
