import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './global/errorBoundary';
import AdminUIPanel from './pages/admin-ui';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<AdminUIPanel />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </ErrorBoundary>
    </div>
  );
}

export default App;
