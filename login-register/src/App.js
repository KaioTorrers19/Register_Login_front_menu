import React, { useState } from 'react';
import LoginForm from './componentes/LoginForm';
import RegisterForm from './componentes/RegisterForm';
import './App.css';
import { motion } from "framer-motion"

function App() {
  const [isLoginVisible, setLoginVisible] = useState(true);
  const[formData, setFormData] =useState({
    username: '',
    email:'',
    password:''
  })
  

  const toggleForm = () => {
    setLoginVisible(!isLoginVisible);
  };
  return (
    <div className="App">
      <motion.div  animate={{scale:[1.25,2, 1.5, 1.50]}} className="form-container">
        <LoginForm show={isLoginVisible} />
        <RegisterForm show={!isLoginVisible} />
        <button  type='submit'
        > Submit</button>
        <button onClick={toggleForm}>
          {isLoginVisible ? 'Register' : 'Login'}
        </button>
        <p>Copyright © <a href='#'>Empresa</a> 2023.</p>
        </motion.div>
    </div>
  );
}

export default App;
