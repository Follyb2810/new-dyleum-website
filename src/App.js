import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Router from './Router';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Router />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
