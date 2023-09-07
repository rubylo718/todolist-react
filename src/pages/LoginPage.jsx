import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { login } from '../api/auth';
import { Toast } from '../utils/toast-helper';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleClick = async () => {
    if (username.length === 0 || password.length === 0) {
      return;
    }
    const { success, authToken } = await login({ username, password });
    if (success) {
      localStorage.setItem('authToken', authToken);
      Toast.fire({ icon: 'success', title: '登入成功' });
      navigate('/todos')
      return;
    } else {
      Toast.fire({ icon: 'error', title: '登入失敗' });
    }
  };
  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>登入 Todo</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          value={username}
          placeholder="請輸入使用者名稱"
          onChange={(nameInputValue) => setUsername(nameInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼"
          value={password}
          placeholder="請輸入密碼"
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>登入</AuthButton>
      <Link to="/signup">
        <AuthLinkText>註冊</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;
