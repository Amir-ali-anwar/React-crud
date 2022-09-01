import React from 'react'
import Wrapper from "../assets/wrappers/RegisterPage";
import { useNavigate } from "react-router-dom";
import { Button, FormRow } from "../components";
const Login = () => {
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <h3>Login </h3>
        <FormRow
          name="email"
          labelText="Email"
          type="email"
          className="form-input"
          labelClass="form-label"
        />
        <FormRow
          name="email"
          labelText="Email"
          type="email"
          className="form-input"
          labelClass="form-label"
        />
        <Button
          type="submit"
          className={["btn btn-block"]}
        >  Login        
      </Button>
      </form>
    </Wrapper>
  );
}

export default Login    