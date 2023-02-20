import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress } from '@mui/material';
// _mock_
// components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionInView, varFade } from '../../components/animate';
import { _skills } from '../../_mock';

// utils
import { fPercent } from '../../utils/formatNumber';
// hooks
import useResponsive from '../../hooks/useResponsive';
import ParticipatingInstitutions from './ParticipatingInstitutions';
import InstituteTable from './InstituteTable';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';
  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;
  function createData(Institute, website) {
    return { Institute, website };
  }
  const rows = [
    createData('National Institute of Technology Jamshedpur', 'https://www.nitjsr.ac.in'),
    createData('Motilal Nehru National Institute of TechnologyAllahabad', 'http://www.mnnit.ac.in'),
    createData('Maulana Azad National Institute of Technology Bhopal', 'http://www.manit.ac.in'),
    createData('National Institute of Technology Tiruchirapalli (Trichy)', 'https://www.nitt.edu'),
    createData('National Institute of Technology Agartala', 'https://nita.ac.in'),
    createData('National Institute of Technology Kurukshetra', 'http://www.nitkkr.ac.in'),
    createData('National Institute of Technology Raipur', 'http://www.nitrr.ac.in'),
    createData('National Institute of Technology Karnataka, Surathkal', 'https://www.nitk.ac.in'),
    createData('National Institute of Technology Warangal', 'http://www.nitkkr.ac.in'),
  ];

  return (
    <RootStyle>
      <MotionInView variants={varFade().inUp}>
        <Grid container padding={5} spacing={5}>
          <Grid item xs={12} md={7} lg={8}>
            <Box marginBottom={2}>
              <Typography variant="h3">Message from Chairman, NIMCET - 2023</Typography>
              <Typography variant="h5">PROF. KARUNESH KUMAR SHUKLA</Typography>
              <Typography variant="h6">Director, NIT Jamshedpur</Typography>
            </Box>
            <Typography variant="p" component="p" align="justify">
              National Institute of Technology Jamshedpur is coordinating the All India NIT MCA Common Entrance test
              2022 (NIMCET 2022) for admission to MCA program in 9 NITs. NITs are leading institutions for imparting
              quality technical education in the country and are establishing as multidisciplinary institutions. Alumni
              of NITs have made their presence felt across the globe almost in every sphere of life. Graduates of Master
              of Computer Applications, a three-year post-graduate program in 9 NITs of the country are well placed in
              different private and public sector organizations and are admired for their knowledge and passion to work.
              As a cradle of excellence, NITs have worked hard in shaping young engineers and master's in computer
              applications for many generations. Online counselling for admission to MCA program in NITs will be
              conducted in 4 rounds including one special round. All counselling activities including document
              verification will be online and the candidates need not to go to any institution for counselling. As
              Chairman, NIMCET-2022, I wish all the candidates who have qualified NIMCET-2022 entrance test, a great
              future ahead. Also advise them to visit the official website of the participating institutions for more
              information. Further, I also appreciate all the national/institutional level committees for their untiring
              efforts in making NIMCET-2022 admissions successful
            </Typography>
          </Grid>

          <Grid item xs={12} md={5} lg={4}>
            <Image
              src="https://cdnbbsr.s3waas.gov.in/s33e6260b81898beacda3d16db379ed329/uploads/2022/07/2022070747.jpg"
              sx={{
                borderRadius: 2,
                boxShadow: shadow,
                height: '15rem',
                width: '15rem',
                margin: 'auto',
              }}
            />
          </Grid>
        </Grid>
      </MotionInView>
      <MotionInView variants={varFade().inUp}>
        <Typography variant="h3" marginLeft={'2.5rem'}>
          Participating Institutions:
        </Typography>
        <ParticipatingInstitutions />
      </MotionInView>
      {/* <InstituteTable /> */}
      <MotionInView variants={varFade().inUp}>
        <Box display={'flex'} alignItems="center" justifyContent={'center'} marginY="2rem">
          <TableContainer
            style={{
              height: '60%',
              width: '80%',
              margin: '2.5rem',
              // marginLeft: '12rem',
              // alignSelf: 'center',
            }}
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Institute</TableCell>
                  <TableCell align="left">Website</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.Institute} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.Institute}
                    </TableCell>
                    <TableCell align="left">
                      <a
                        style={{
                          color: isLight ? 'black' : 'white',
                        }}
                        href={row.website}
                      >
                        {row.website}
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </MotionInView>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' },
        }}
      />
    </Box>
  );
}
