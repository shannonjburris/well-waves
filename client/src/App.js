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
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/dailyexercises" component={DailyExercises} />
        <Route path="/create" component={Create} /> 
        <Route path="/favorites" component={Favorites} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
