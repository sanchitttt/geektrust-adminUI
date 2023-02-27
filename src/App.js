import ErrorBoundary from './global/errorBoundary';
import AdminUIPanel from './pages/admin-ui';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <AdminUIPanel />
      </ErrorBoundary>
    </div>
  );
}

export default App;
