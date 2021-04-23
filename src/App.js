import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import YouTubeForm from './tutorials/simpleForm/YouTubeForm';
import YupYouTubeForm from './tutorials/yup/YouTubeForm';



function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default function App() {
  return (
    <Router>
      <div className="App-header">
        <nav>
          <ul>
            <li className="App-nav">
              <Link to="/">Home</Link>
            </li>
            <li className="App-nav">
              <Link to="/yup">Yup</Link>
            </li>
            <li className="App-nav">
              <Link to="/youtubeForm">Youtube Form</Link>
            </li>
          </ul>
        </nav>


        <Switch >
          <Route path="/yup">
            <h1>Yup</h1>
            <YupYouTubeForm/>
          </Route>
          <Route path="/youtubeForm">
          <h1>Simple Fomik</h1>
            <YouTubeForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
