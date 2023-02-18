import { Outlet } from 'react-router-dom';
// @mui
import { Box, Container, Typography, Stack } from '@mui/material';
import MainHeader from './MainHeader';

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />

      <Box
        sx={{
          py: 5,
          textAlign: 'center',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <Container>
          <Typography variant="caption" component="p">
            © All rights reserved
            <br /> made by &nbsp; WebTeam , NIT Jamshedpur
          </Typography>
        </Container>
      </Box>
    </Stack>
  );
}
