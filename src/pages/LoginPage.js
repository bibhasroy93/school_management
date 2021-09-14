import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const LoginPage = () => {
  let history = useHistory();
  const initialFieldValues = {
    email:'',
    password:''
  };

  var [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values);
  };

  const login = (obj) => {
    // console.log(obj.email)
    if((obj.email === 'butunroy@gmail.com')&&(obj.password === '124578'))
    {
      console.log("Login Succesfull")
      history.push("/admin");
    }
    else
    {
      console.log("Email or Password doesnot Matched")
    }
  };
  return (
    <div>
      <div>
        <h4>Login Page</h4>
      </div>
      <div className="cardLayout">
        <div className="card shadow">
          <div className="card-body">
            <form className="needs-validation" onSubmit={handleSubmit} novalidate>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  required
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={values.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
