import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { TodoPage, LoginPage, SignUpPage } from './pages';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="todos" element={<TodoPage />}></Route>
        <Route path="signup" element={<SignUpPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="*" element={<TodoPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
