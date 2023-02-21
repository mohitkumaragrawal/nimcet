// @mui
import Paper from '@mui/material/Paper';
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Grid, Container, Typography, Box } from '@mui/material';

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
import { ContactHero, ContactForm, ContactMap } from '../sections/contact';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Contact() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';
  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;
  function createData(Institute, website, free) {
    return { Institute, website, free };
  }
  const rows = [
    createData('Screen Access For All (SAFA)', 'https://lists.sourceforge.net/lists/listinfo/safa-developer', 'Free'),
    createData('Non Visual Desktop Access (NVDA)', 'http://www.nvda-project.org/', 'Free'),
    createData('System Access To Go', 'http://www.satogo.com/', 'Free'),
    createData('Thunder', 'http://www.webbie.org.uk/thunder', 'Free'),
    createData('WebAnywhere', 'http://webinsight.cs.washington.edu/', 'Free'),
    createData('Hal', 'http://www.yourdolphin.co.uk/productdetail.asp?id=5', 'Commercial'),
    createData('JAWS', 'http://www.freedomscientific.com/Downloads/JAWS', 'Commercial'),
    createData('Supernova', 'http://www.yourdolphin.co.uk/productdetail.asp?id=1', 'Commercial'),
    createData('Window-Eyes', 'http://www.gwmicro.com/Window-Eyes/', 'Commercial'),
  ];

  return (
    <Page title="Help">
      <RootStyle>
        <Container sx={{ my: 10 }}>
          <Typography variant="h3" marginBottom={'1rem'}>
            Help
          </Typography>

          <Typography marginBottom={'0.5rem'}>
            Are you finding it difficult to access/navigate through the content/pages of this Portal? This section
            attempts to help you have a pleasant experience while browsing this Portal.
          </Typography>
          <Typography variant="h3" marginBottom={'1rem'}>
            Accessibility
          </Typography>

          <Typography marginBottom={'0.5rem'}>
            We are committed to ensure that the site is accessible to all users irrespective of device in use,
            technology or ability. It has been built, with an aim, to provide maximum accessibility and usability to its
            visitors. Best efforts have been put to ensure that all information on this website is accessible to people
            with disabilities. For example, a user with visual disability can access this website using assistive
            technology, such as screen reader. Users with low vision can use high contrast and font size increase
            options. This website meets level AA of the Web Content Accessibility Guidelines (WCAG) 2.0 laid down by the
            World Wide Web Consortium (W3C). If you have any problem or suggestion regarding the accessibility of this
            Site, please send a feedback to us.
          </Typography>
          <Typography variant="h3" marginBottom={'1rem'}>
            Screen Reader Access
          </Typography>

          <Typography marginBottom={'0.5rem'}>
            Our visitors with visual impairments can access the site using Assistive Technologies, such as screen
            readers.
          </Typography>
          <br />
          <Typography marginBottom={'0.5rem'}>
            Following table lists the information about different screen readers:
          </Typography>
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
                      <TableCell>Screen Reader</TableCell>
                      <TableCell align="left">Website</TableCell>
                      <TableCell align="left">Free / Commercial</TableCell>
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
                        <TableCell component="th" scope="row">
                          {row.free}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </MotionInView>
          <Typography variant="h3" marginBottom={'1rem'}>
            Viewing Information in Various File Formats
          </Typography>

          <Typography marginBottom={'0.5rem'}>
            The information provided by this Web site is available in various file formats, such as Portable Document
            Format (PDF), Word, Excel and PowerPoint. To view the information properly, your browser need to have the
            required plug-ins or software. For example, the Adobe Flash software is required to view the Flash files. In
            case your system does not have this software, you can download it from the Internet for free. The table
            lists the required plug-ins needed to view the information in various file formats.
          </Typography>

          <MotionInView variants={varFade().inUp}>
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
                      <TableCell>Document Type</TableCell>
                      <TableCell align="left">Plug-in for Download</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        Portable Document Format (PDF) files
                      </TableCell>
                      <TableCell align="left">
                        <a
                          style={{
                            color: isLight ? 'black' : 'white',
                          }}
                          href="http://www.adobe.com/products/acrobat/readstep2.html"
                        >
                          Adobe Acrobat Reader
                        </a>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </MotionInView>
        </Container>
      </RootStyle>
    </Page>
  );
}
