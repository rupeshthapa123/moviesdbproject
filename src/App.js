import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = React.lazy(() => import("./components/Home"));
const SingleMoviesPage = React.lazy(() => import("./components/singlePage"));
function App() {
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback={'loading...'}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path='/movies/:id' element={<SingleMoviesPage />}></Route>
        </Routes>
      </React.Suspense>
    </Router >
  );
}

export default App;
