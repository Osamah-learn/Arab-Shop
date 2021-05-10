import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homePage.jsx";
import ShopPage  from "././pages/shop/shop.component.jsx"
import Header    from "../src/components/header/header.component.jsx"
import SignInAndSignUp from "../src/pages/SingIn-SignUp/SignIn-SignUp"
import { Switch, Route } from "react-router-dom";
import {auth} from "./firebase/firebase.utils"


class  App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    currentUser: null,
  }
}
unSubscribeFromAuth = null;
componentDidMount() {
  this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
    this.setState({currentUser:user})
    console.log(user)
  })
}

componentWillUnmount() {
  this.unSubscribeFromAuth();
}

 render() {
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />"
        <Route path="/signin" component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
 }
}

export default App;
