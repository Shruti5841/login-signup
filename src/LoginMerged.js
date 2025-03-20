import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { Roles } from './roles';

const LoginMerged = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validCredentials = {
    Admin: { email: "admin@gmail.com", password: "admin123" },
    User: { email: "user@gmail.com", password: "user123" },
  };

  const handleSignup = () => {
    // Here you would typically save the user's name, email, and password
    alert(`User signed up with Name: ${name}, Email: ${email}, Password: ${password}`);
    setIsSignup(false); // Switch back to login after signup
  };

  const handleLogin = () => {
    if (email === validCredentials.Admin.email && password === validCredentials.Admin.password) {
      login(Roles.Admin);
      navigate("/admin");
    } else if (email === validCredentials.User.email && password === validCredentials.User.password) {
      login(Roles.User);
      navigate("/user");
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-blue-800">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 text-center">
        <div className="text-2xl font-bold text-blue-800">{isSignup ? "Sign Up" : "Login"}</div>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-5 rounded"></div>

        {isSignup && (
          <div className="mb-4">
            <div className="flex items-center bg-gray-100 rounded-full p-3 shadow-inner">
            <span className="text-gray-400 mr-2">👤</span>
              <input 
                placeholder="Name" 
                type="text" 
                className="bg-transparent outline-none w-full" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="mb-4">
          <div className="flex items-center bg-gray-100 rounded-full p-3 shadow-inner">
          <span className="text-gray-400 mr-2">📧</span>
            <input 
              placeholder="Email id" 
              type="email" 
              className="bg-transparent outline-none w-full" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center bg-gray-100 rounded-full p-3 shadow-inner">
            <input 
              placeholder="Password" 
              type="password" 
              className="bg-transparent outline-none w-full" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>
        </div>

        <div className="text-blue-500 cursor-pointer mb-4">Forgot Password? <span>Click here</span></div>

        <div className="flex justify-center gap-4 mt-5">
          {isSignup ? (
            <div className="bg-blue-500 text-white font-bold rounded-full w-1/2 p-3 cursor-pointer" onClick={handleSignup}>Sign Up</div>
          ) : (
            <div className="bg-blue-500 text-white font-bold rounded-full w-1/2 p-3 cursor-pointer" onClick={handleLogin}>Login</div>
          )}
          <div className="bg-gray-300 cursor-pointer rounded-full w-1/2 p-3" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : " Sign Up"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginMerged;
