import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import About from "./components/About"
import Contact from "./components/Contact"
import Events from "./components/Events"
import Header from "./components/Header"
import Landing from "./components/Landing"

import Ideathon from './components/events/Ideathon';
import Hackathon from './components/events/Hackathon';
import Buildathon from './components/events/Buildathon';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<><Header /><Landing /><About /><Events /><Contact /></>} />
      <Route path="/Ideathon" element={<Ideathon />} />
      <Route path="/Hackathon" element={<Hackathon />} />
      <Route path="/Buildathon" element={<Buildathon />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
