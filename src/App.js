import './App.css';
import React,{useState,useEffect} from 'react'


function App() {

  const [data, setData]= useState({
    username :'',
    email : '',
    password : ''
  });
  const[iferrors, setErrors] = useState({});
  const[submit, setSubmit] = useState(false);


  const clickSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(data));
    setSubmit(true);
  }

  useEffect(() => {
    if(Object.keys(iferrors).length === 0 && submit) {
      alert('Form submitted successfully!');
      setSubmit(false);
    }
},[iferrors]);

const validate = (values) => {
const errors = {};
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
if (!values.username) {
  errors.username = "Username is required!";
}
if (!values.email) {
  errors.email = "Email is required!";
} else if (!regex.test(values.email)) {
  errors.email = "This is not a valid email format!";
}
if (!values.password) {
  errors.password = "Password is required";
} else if (values.password.length < 4) {
  errors.password = "Password must be more than 4 characters";
} else if (values.password.length > 10) {
  errors.password = "Password cannot exceed more than 10 characters";
}
return errors;
};

  const handleSubmit = (e) => {
    const name = e.target.name; 
    const value = e.target.value;
    setData({...data, [name]:value });
  }

  return (
    <div className="App">
      <div className='container'>
        <form onSubmit={clickSubmit}>
          <h2 className='heading'>Login Form</h2>
          <p className='heading'>Please fill out this form to Login.</p>
          <label>
            <b>Username:</b>
            <br/>
            <input className="input" type="text" name="username" placeholder='Enter Your Username' value={data.username} onChange={handleSubmit}/>
            <p>{iferrors.username}</p>
            <span>Username should have 4-12 Characters</span>
          </label>
          <br/><br/>
          <label>
          <b>E-mail:</b>
            <br/>
            <input className="input" type="email" name="email" placeholder='Enter Your E-mail' value={data.email} onChange={handleSubmit}/>
            <p>{iferrors.email}</p>
            <span>Enter a valid e-mail</span>
          </label>
          <br/><br/>
          <label>
          <b>Password:</b>
            <br/>
            <input className="input" type="password" name="password" placeholder='Enter Your Password' value={data.password} onChange={handleSubmit}/>
            <p>{iferrors.password}</p>
            <span>Password should contain minimum 6 characters with a uppercase, symbol or a number.</span>
          </label>

          <br/><br/>
          
          <input type="submit" className='button' value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
