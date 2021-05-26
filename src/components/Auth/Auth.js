import classes from "./Auth.module.css";
import SingIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {

    return ( 
        <div className={classes.Auth}>
            <h1>Welcome</h1>
            <form className={classes.Form}>
            <input type="email" placeholder="E-mail" name="email" required className={classes.Input}/>
            <input type="password" placeholder="Password" name="password" required minLength="6"  className={classes.Input}/>
            <div className={classes.ButtonParent}>
            <SingIn/>
            <SignUp/>
            </div>
            </form>
        </div>
     );
}
 
export default Auth;