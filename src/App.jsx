
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Incidents from './component/Incidents';
import Locations from './component/Locations';
import Activities from './component/Activities';
import Documents from './component/Documents';
import Cypher from './component/Cypher';
import Navbar from './component/navbar';



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navbar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Incidents" element={<Incidents />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Documents" element={<Documents />} />
          <Route path="/Cypher" element={<Cypher />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
