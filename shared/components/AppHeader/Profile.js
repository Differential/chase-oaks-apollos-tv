import { logout, useAuth } from 'shared/providers/AuthProvider';
import { useNavigation } from 'shared/router';

import { Box, Button, SmallSystemText } from 'shared/ui-kit';

function Profile(props = {}) {
  const [{ authenticated }, dispatch] = useAuth();
  const router = useNavigation();

  const handleLogin = () => {
    router.push('/auth');
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push('/auth');
  };

  return (
    <Box
      flex={1}
      flexDirection="row"
      justifyContent="flex-end"
      alignItems="center"
      {...props}
    >
      {authenticated ? (
        <>
          <SmallSystemText>You are signed in.</SmallSystemText>
          <Button title="Sign out" ml="s" size="micro" onPress={handleLogout} />
        </>
      ) : (
        <Button title="Sign in" size="micro" onPress={handleLogin} />
      )}
    </Box>
  );
}

export default Profile;
