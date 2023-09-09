// import logo from './logo.svg';
import './App.css';
import Event from './components/Events/Event';
import Home from './components/HomePage/Home';
// import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";


function App(){
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />

      </Routes>    
    
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <>
//        <Router>
//           <Navbar />
//           <Switch>
//             <Route path="/home">
//                <Home />
//             </Route>
//             <Route path="/event">
//                <Event />
//             </Route>
//           </Switch>


//        </Router>
//     </>
//   );
// }

// export default App;


