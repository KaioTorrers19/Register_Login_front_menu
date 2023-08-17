import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
const LoginForm = ({ show }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit>
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

      </div>
    </CSSTransition>
  );
};

export default LoginForm;