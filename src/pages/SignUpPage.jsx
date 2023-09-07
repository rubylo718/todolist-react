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
import { register } from '../api/auth';
import { Toast } from '../utils/toast-helper';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  const handleClick = async () => {
    if (username.length === 0 || password.length === 0 || email.length === 0) {
      return;
    }
    const { success, authToken } = await register({
      username,
      email,
      password,
    });
    if (success) {
      localStorage.setItem('authToken', authToken);
      Toast.fire({ icon: 'success', title: '註冊成功' });
      navigate('/todos')
    } else {
      Toast.fire({ icon: 'error', title: '註冊失敗' });
    }
  };
  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

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
          type="email"
          label="Email"
          value={email}
          placeholder="請輸入Email Address"
          onChange={(emailInputValue) => setEmail(emailInputValue)}
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
      <AuthButton onClick={handleClick}>註冊</AuthButton>
      <Link to="/login">
        <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default SignUpPage;
