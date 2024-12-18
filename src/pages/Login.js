import React, { useState } from 'react';
import * as Components from './Login-components'; // Import các thành phần từ Login-components.js
import '../styles/Login.css'; // Import CSS

const Login = () => {
  const [signIn, toggle] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập
    if (username === '' || password === '') {
      setErrorMessage('Tên đăng nhập và mật khẩu không thể để trống');
    } else {
      setErrorMessage('');
      // Logic đăng nhập sẽ ở đây (gửi yêu cầu đến server, v.v...)
      console.log('Đăng nhập thành công');
    }
  };

  return (
    <div className="login-container">
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Tạo Tài Khoản</Components.Title>
            <Components.Input type='text' placeholder='Tên' />
            <Components.Input type='email' placeholder='Email' />
            <Components.Input type='password' placeholder='Mật khẩu' />
            <Components.Button>Đăng Ký</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSubmit}>
            <Components.Title>Đăng Nhập</Components.Title>
            <Components.Input
              type='text'
              placeholder='Tên đăng nhập'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Components.Input
              type='password'
              placeholder='Mật khẩu'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {/* <Components.Anchor href='#'>Quên mật khẩu?</Components.Anchor> */}
            <Components.Button type="submit">Đăng Nhập</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                Để giữ liên lạc với chúng tôi, vui lòng đăng nhập với thông tin cá nhân của bạn
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Đăng Nhập
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Chào Bạn!</Components.Title>
              <Components.Paragraph>
                Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Đăng Ký
              </Components.GhostButton> 
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
};

export default Login;
