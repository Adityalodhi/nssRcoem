import './App.css';
import Event from './components/Events/Event';
import Home from './components/HomePage/Home';
import Inititative from './components/Initiatives/Inititative';
import Gallary from './components/gallary/Gallary';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Team from './components/team/Team';
import Team24 from './components/team24/team24';
import Team22 from './components/team22/Team22';
import Prerna15 from './components/ImagesPart/prerna15';

import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

// Layout component
const Layout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/initiative" element={<Layout><Inititative /></Layout>} />
        <Route path="/event" element={<Layout><Event /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
        <Route path="/team22" element={<Layout><Team22 /></Layout>} />
        <Route path="/team24" element={<Layout><Team24 /></Layout>} />
        <Route path="/gallary" element={<Layout><Gallary /></Layout>} />
        <Route path="/prerna15" element={<Layout><Prerna15 /></Layout>} />
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


