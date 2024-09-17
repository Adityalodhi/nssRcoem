// import logo from './logo.svg';
import './App.css';
import Event from './components/Events/Event';
import Home from './components/HomePage/Home';
// import Images from './components/ImagesPart/Images';
import Inititative from './components/Initiatives/Inititative';
import Gallary from './components/gallary/Gallary';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Team from './components/team/Team';


import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Team22 from './components/team22/Team22';
import Prerna15 from './components/ImagesPart/prerna15';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/initiative" element={<Inititative />} />
        <Route path="/event" element={<Event />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team22" element={<Team22 />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/prerna15" element={<Prerna15 />} />
        
      </Routes>
      <Footer />
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


