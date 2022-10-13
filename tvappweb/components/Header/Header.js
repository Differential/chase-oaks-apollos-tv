import { Pressable } from 'react-native';
import styled from 'styled-components';

import { useNavigation } from 'shared/router';
import { useBreakpoint } from 'shared/providers/BreakpointProvider';

import { Logo } from 'shared/components';
import { system, Box, systemPropTypes } from 'shared/ui-kit';

import { themeGet } from '@styled-system/theme-get';

import Styled from './Header.styles';
import Profile from './Profile';
import Nav from './Nav';

const isDev = process.env.NODE_ENV === 'development';

const Link = styled.a`
  color: ${themeGet('colors.text.tertiary')};
  cursor: pointer;
  display: block;
  font-size: 0.75rem;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:active,
  &:hover,
  &:focus {
    color: ${themeGet('colors.text.primary')};
  }

  ${system}
`;

function Header(props = {}) {
  const router = useNavigation();
  const { responsive } = useBreakpoint();

  const handleLogoPress = () => {
    router.push('/home');
  };

  return (
    <Styled px={responsive({ _: 'base', lg: 'xl' })} {...props}>
      <Box flex={0.33} flexDirection="column">
        <Link href="https://chaseoaks.org">↩ Back to ChaseOaks.org</Link>
        <Box flexDirection="row" alignItems="center">
          <Pressable onPress={handleLogoPress}>
            <Logo mr="xs" />
          </Pressable>
          <Profile />
        </Box>
      </Box>

      <Box
        flex={1}
        flexDirection="row"
        justifyContent={responsive({ _: 'flex-end', md: 'center' })}
      >
        {isDev ? <Nav /> : null}
      </Box>
      <Box flex={0.33} />
    </Styled>
  );
}

Header.propTypes = {
  ...systemPropTypes,
};

Header.defaultProps = {};

export default Header;
