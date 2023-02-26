import * as React from 'react';

import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { MotionInView, varFade } from '../../components/animate';

const LinkStyle = styled('a')(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'block',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
}));

export default function CardLink({ links, heading }) {
  return (
    <MotionInView variants={varFade().inUp}>
      <Card sx={{ width: '100%', padding: '1rem 2rem', border: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h3">{heading}</Typography>

        <Box component="ul" sx={{ display: 'flex', gap: '1rem', flexDirection: 'column', margin: 3 }}>
          {links.map(({ title, link }, id) => (
            <Box component="li" key={id}>
              <LinkStyle href={link}>{title}</LinkStyle>
            </Box>
          ))}
        </Box>
      </Card>
    </MotionInView>
  );
}
