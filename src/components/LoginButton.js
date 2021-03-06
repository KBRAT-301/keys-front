import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'semantic-ui-react';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button circular className="logButton" color='pink' style={{ fontSize: '1.4rem' }} onClick={() => loginWithRedirect()}>
      LOG IN
    </Button>
  );
};

export default LoginButton;
