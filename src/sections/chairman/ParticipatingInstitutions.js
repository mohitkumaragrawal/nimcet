import React from 'react';
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress } from '@mui/material';
import Image from '../../components/Image';
import useResponsive from '../../hooks/useResponsive';

export default function ParticipatingInstitutions() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';
  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;
  return (
    <Box display={'flex'} alignItems="center" justifyContent={'center'} marginY="2rem">
      <Box display={'flex'} alignItems="center" justifyContent={'center'} flexWrap="wrap" gap={'1rem 5rem'} width="70%">
        <Box display={'flex'} alignItems="center" justifyContent={'center'} flexDirection="column" margin={'auto'}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/7/7d/National_Institute_of_Technology%2C_Jamshedpur_Logo.png"
            sx={{
              height: '10rem',
              width: '100%',
            }}
          />
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            NIT
          </Typography>
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            Jamshedpur
          </Typography>
        </Box>
        <Box display={'flex'} alignItems="center" justifyContent={'center'} flexDirection="column" margin={'auto'}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/c/c2/Motilal_Nehru_National_Institute_of_Technology_Allahabad_logo.png"
            sx={{
              height: '10rem',
            }}
          />
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            MNNIT
          </Typography>
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            Allahabad
          </Typography>
        </Box>
        <Box display={'flex'} alignItems="center" justifyContent={'center'} flexDirection="column" margin={'auto'}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/4/4f/Maulana_Azad_National_Institute_of_Technology_Logo.png"
            sx={{
              height: '10rem',
            }}
          />
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            MANIT
          </Typography>
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            Bhopal
          </Typography>
        </Box>
        <Box display={'flex'} alignItems="center" justifyContent={'center'} flexDirection="column" margin={'auto'}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/8/8b/National_Institute_of_Technology_Trichy_Logo.png"
            sx={{
              height: '10rem',
            }}
          />
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            NIT
          </Typography>
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            Tiruchirappalli
          </Typography>
        </Box>
        <Box display={'flex'} alignItems="center" justifyContent={'center'} flexDirection="column" margin={'auto'}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/0/00/National_Institute_of_Technology%2C_Agartala_Logo.png"
            sx={{
              height: '10rem',
            }}
          />
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            NIT
          </Typography>
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            Agartala
          </Typography>
        </Box>
        <Box display={'flex'} alignItems="center" justifyContent={'center'} flexDirection="column" margin={'auto'}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/7/75/National_Institute_of_Technology%2C_Kurukshetra_Logo.png"
            sx={{
              height: '10rem',
            }}
          />
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            NIT
          </Typography>
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            Kurukshetra
          </Typography>
        </Box>
        <Box display={'flex'} alignItems="center" justifyContent={'center'} flexDirection="column" margin={'auto'}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/1/1f/National_Institute_of_Technology%2C_Raipur_Logo.png"
            sx={{
              height: '10rem',
            }}
          />
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            NIT
          </Typography>
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            Raipur
          </Typography>
        </Box>
        <Box display={'flex'} alignItems="center" justifyContent={'center'} flexDirection="column" margin={'auto'}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
            sx={{
              height: '10rem',
            }}
          />
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            NIT
          </Typography>
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            Surathkal
          </Typography>
        </Box>
        <Box display={'flex'} alignItems="center" justifyContent={'center'} flexDirection="column" margin={'auto'}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/f/fb/National_Institute_of_Technology%2C_Warangal_logo.png"
            sx={{
              height: '10rem',
            }}
          />
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            NIT
          </Typography>
          <Typography color={isLight ? 'black' : 'white'} variant="h5" alignSelf={'center'}>
            Warangal
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
