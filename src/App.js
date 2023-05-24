import React from "react";
import { useFormik } from 'formik';

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      emailField: '',
      pswField: ''
  },
  onSubmit: (values) => {
    console.log('form:', values);
    alert("Login Successful");
  },
  validate: (values) => {
    let errors = {};
    if (!values.name) errors.name = 'Field required';
    if (!values.emailField) {
      errors.emailField = "Field required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailField))
      {errors.emailField = "Username should be an email";}
      if (!values.pswField) errors.pswField = 'Field required';
      return errors;
    },
  });  
   
return (
  <div>
    <form onSubmit={formik.handleSubmit}>
    <div>
    <label htmlFor="name">Name</label>
    <br/>
    <input
      id="name"
      name="name"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.name}
    />
    {formik.errors.name && <div style={{ color: 'red' }}>{formik.errors.name}</div>}
    </div>
      <br/>
    <div>
      <label htmlFor="emailField">Email</label>
      <br/>
      <input
        id="emailField"
        name="emailField"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.emailField}
      />
      {formik.errors.emailField && <div id="emailError" style={{ color: 'red' }}>{formik.errors.emailField}</div>}
    </div>
      <br/>
    <div>
      <label htmlFor="pswField">Password</label>
      <br/>
      <input
        id="pswField"
        name="pswField"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.pswField}
      />
      {formik.errors.pswField && <div id="pswError" style={{ color: 'red' }}>{formik.errors.pswField}</div>}
    </div>
      <br/>
    <div className="button-container">
      <button id="submitBtn" type="submit" className="btn">Submit</button>
    </div>
  </form>
</div>
);
};
          
export default App;
          












