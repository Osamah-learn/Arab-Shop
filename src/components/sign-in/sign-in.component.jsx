import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CoustemButton from "../../components/coustem-button/coustem-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    alert("A name was submitted: " + this.state.email);
    alert("A Password was submitted: " + this.state.password);
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />
          <div className="buttons">
            <CoustemButton type="submit">Sign in</CoustemButton>
            <CoustemButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CoustemButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
