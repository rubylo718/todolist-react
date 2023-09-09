import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { TodoPage, LoginPage, SignUpPage } from './pages';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="todos" element={<TodoPage />}></Route>
          <Route path="signup" element={<SignUpPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="*" element={<TodoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
