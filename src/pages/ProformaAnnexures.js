import React from 'react';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box, Divider, Paper } from '@mui/material';
// components

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Page from '../components/Page';
import useResponsive from '../hooks/useResponsive';

import { MotionInView, varFade } from '../components/animate';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));
const ProformaAnnexures = () => {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';
  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;
  function createData(Category, DownloaLink) {
    return { Category, DownloaLink };
  }
  const rows = [
    createData(
      'Other Backward Class (OBC)',
      'https://drive.google.com/file/d/10s30-Ttu3yCbP3Mct1ztwmSTeHtGE3Gw/view?usp=sharing'
    ),
    createData(
      'Scheduled Caste (SC) / Scheduled Tribe (ST)',
      'https://drive.google.com/file/d/1Q9XaODf089U3s7t6EnTvq-Wk9wao0VOg/view?usp=sharing'
    ),
    createData(
      'Persons with Disabilities (PwD)',
      'https://drive.google.com/file/d/1Q0WpY6yHtqKg95Q515ydeWBYAfr_AJm_/view?usp=sharing'
    ),
    createData(
      'Economically Weaker Section (EWS)',
      'https://drive.google.com/file/d/1O_jWho-ZPrkQm9NXp8pm1Z--SeNvIXxy/view?usp=sharing'
    ),
    createData(
      'CERTIFICATE TO BE ISSUED BY THE HEAD OF THE INSTITUTION',
      'https://drive.google.com/file/d/15ASqO-vaYhic-422F5uDE6uKh79fUIcO/view?usp=sharing'
    ),
  ];

  return (
    <Page title="Proforma Annexures">
      <RootStyle>
        {/* <MotionInView variants={varFade().inUp}> */}
        <Box display={'flex'} alignItems="center" justifyContent={'center'} marginY="2rem">
          <TableContainer
            style={{
              height: '60%',
              width: '80%',
              margin: '2.5rem',
            }}
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell align="left">Download Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.Category} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.Category}
                    </TableCell>
                    <TableCell align="left">
                      <a
                        style={{
                          color: isLight ? 'black' : 'white',
                        }}
                        href={row.DownloaLink}
                      >
                        Link!
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {/* </MotionInView> */}
      </RootStyle>
    </Page>
  );
};

export default ProformaAnnexures;
