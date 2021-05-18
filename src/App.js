import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homePage.jsx";
import ShopPage from "././pages/shop/shop.component.jsx";
import Header from "../src/components/header/header.component.jsx";
import SignInAndSignUp from "../src/pages/SingIn-SignUp/SignIn-SignUp";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //Checking if the userAuth exist inside Firestore by createUserProfileDocument function and if its not then we create newProfile inside the users DB
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          console.log(
            snapShot.data(
              this.setState({
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data(),
                },
              })
            )
            
          );
        });
        console.log(this.state);
      } else {
        this.setState({currentUser:userAuth})
      }

      
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />"
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
