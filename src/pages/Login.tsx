import { useState } from 'react';
import './Login.css';
import backgroundImg from "../assets/login-bg.jpg"
import logo from "../assets/logo-dark.png"

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginForm> = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log('Form submitted:', formData);
      window.location.href= "/dashboard"
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Forgot password clicked');
  };

  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    // Handle register logic here
    console.log('Register clicked');
  };

  return (
    <>
      <div className="p-4 h-screen">
        <div className="flex h-full">
          <div className='w-1/2 flex column items-center relative justify-center'>
            <img src={logo} alt='Logo' className='absolute left-3 top-3 w-25' />
            <form onSubmit={handleSubmit} className="w-md">
              <h2 className=" text-3xl font-bold">Welcome Back!</h2>
              <p className='text-gray-600'>Please enter your credentials to access your account.</p>
              <div className="block mt-7">
                <label htmlFor="email" className='block text-gray-600'>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`border border-gray-300 p-1 rounded-sm w-full ${errors.email} ? 'error' : ''`}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="block mt-2 mb-7">
                <label htmlFor="password" className='block text-gray-600'>Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`border border-gray-300 p-1 rounded-sm w-full ${errors.email} ? 'error' : ''`}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              
              <button type="submit" className="rounded-lg text-white cursor-pointer bg-emerald-800 block w-full p-3">Sign In</button>
              <div className="text-center pt-5 pb-3">
                <a href="#" onClick={handleForgotPassword} className="text-sm">Forgot Password?</a>
              </div>

              <div className="text-center">
                <p className='text-sm text-gray-500'>Don't have an account? <a href="#" onClick={handleRegister} className="text-black">Sign Up</a></p>
              </div>
            </form>
          </div>
          <div className='w-1/2 bg-cover bg-no-repeat bg-center rounded-2xl' style={{backgroundImage: `url(${backgroundImg})`}}></div>
        </div>
      </div>
      
    </>
  );
};

export default Login; 