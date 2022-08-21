import { Routes, Route } from "react-router-dom";
import MoviePage from './components/MoviePage';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Suggestions from './components/Suggestions';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/moviepage/:movie_id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
