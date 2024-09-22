import './App.css';
import AuthProvider from './context/AuthContext';
import MovieProvider from './context/MovieProvider';
// import Register from './pages/Register';
import AppRouter from './router/AppRouter';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="dark:bg-gray-dark-main min-h-screen">
      <AuthProvider>
       <MovieProvider>
       <AppRouter/>
       <ToastContainer/>
        </MovieProvider> 
    
      </AuthProvider>
    </div>
  );
}

export default App;
