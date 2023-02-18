import { NavLink } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Container, Link, Typography } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('all', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = true;
  const theme = useTheme();
  const auth = useAuth();

  console.log(auth.user);

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <LinkStyle to={'/dashboard'} component={NavLink}>
            Dashboard
          </LinkStyle>
          <Box sx={{ flexGrow: 1 }} />
          <Typography>{auth.isAuthenticated ? auth.user.name : ''}</Typography>
        </Container>
      </ToolbarStyle>

      <ToolbarShadowStyle />
    </AppBar>
  );
}
