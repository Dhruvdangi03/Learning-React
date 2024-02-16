import PropTypes from 'prop-types';

function UserGreeting(props){

    const greetMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please Login to Continue</h2>;

    return(props.isLoggedIn ? greetMessage : loginPrompt);

    // Big old way
    // if(props.isLoggedIn){
    //     return(
    //         <h2 className="welcome-message">Welcome {props.username}</h2>
    //     );
    // }
    
    // return(
    //     <h2 className="login-prompt">Please Login to Continue</h2>
    // );
}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting;