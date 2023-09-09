import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { TodoPage, LoginPage, SignUpPage, HomePage } from './pages';
import { AuthProvider } from 'context/AuthContext';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="todos" element={<TodoPage />}></Route>
            <Route path="signup" element={<SignUpPage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="*" element={<HomePage />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
