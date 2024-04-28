import './App.css';
import AuthProvider from './context/AuthContext';
// import Register from './pages/Register';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="dark:bg-gray-dark-main min-h-screen">
      <AuthProvider>

       <AppRouter/>
      </AuthProvider>
    </div>
  );
}

export default App;
