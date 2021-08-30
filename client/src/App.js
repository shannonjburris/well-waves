import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Create from "./pages/Create";
import DailyExercises from "./pages/DailyExercises";
import Explore from "./pages/Explore";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/header" component={Header} />
        <Route path="/footer" component={Footer} /> */}
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
