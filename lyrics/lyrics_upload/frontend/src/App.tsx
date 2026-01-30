
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Homepage from './components/HomePage'; // Changed from { Homepage } to default import




const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Layout />}> */}
          <Route path="/" element={<Homepage />} /> 
          {/* <Route path="/lyrics" element={<LyricsList />} />
          <Route path="/lyrics/:id" element={<LyricDetail />} />
          <Route path="/add" element={<AddLyric />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;