import {createButton} from 'react-social-login-buttons';

const config = {
    text: "Login with Google",
    icon: "google",
    iconFormat: name => `fa fa-${name}`,
    style: {
         background: "#DD4B39",
         fontSize: "medium",
         width: 185,
         height: 45
         
    },
    activeStyle: { background: "#de3823" }
}

const GoogleButton = createButton(config);

export default GoogleButton

