import { useLocation } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Typography } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

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

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(50);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      {/* <BrandingStyle>
        <div>LOGO</div>
        <Box sx={{ display: 'flex', gap: '5px', flexDirection: 'column', alignItems: 'center' }}>
          <Typography>राष्ट्रीय प्रौद्योगिकी संस्थान जमशेदपुर</Typography>
          <Typography variant="h4">National Institute of Technology Jamshedpur</Typography>
          <Typography>NIMCET Counselling and Admission Services for Session 2022</Typography>
        </Box>
        <div>LOGO2</div>
      </BrandingStyle> */}
      <ToolbarStyle
        disableGutters
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
          <Logo />

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'text.primary' }}>
            {isDesktop && <Typography>राष्ट्रीय प्रौद्योगिकी संस्थान जमशेदपुर</Typography>}
            <Typography variant="h6">National Institute of Technology Jamshedpur</Typography>
            <Typography variant="caption">NIMCET Counselling and Admission Services for Session 2022</Typography>
          </Box>

          {isDesktop && <MenuDesktop isOffset={isOffset} isHome={false} navConfig={navConfig} />}
          {!isDesktop && <MenuMobile isOffset={isOffset} isHome={false} navConfig={navConfig} />}
        </Container>
      </ToolbarStyle>
      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
