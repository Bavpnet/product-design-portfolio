import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ScrollToTop from './components/ScrollToTop'; // Import the new ScrollToTop component

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
      </Routes>
    </Router>
  )
}

export default App
