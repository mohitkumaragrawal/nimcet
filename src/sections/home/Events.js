import * as React from 'react';

import { styled } from '@mui/material/styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { MotionInView, varFade } from '../../components/animate';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const eventData = [
  // {
  //   title: 'Special Round Counseling Brochure',
  //   link: '/special-round-counseling-brochure',
  //   lastUpdated: 'Updated on 06:10 AM of 5th August, 2022',
  // },

  // {
  //   title: 'Tentative Vacancy Position for Special Round Counselling',
  //   link: '/tentative-vacancy-position-for-special-round-counselling',
  //   lastUpdated: 'Updated on 05:49 AM of 3rd August, 2022',
  // },
  // {
  //   title:
  //     'All candidates who have confirmed seats in NIMCET-2022 have to pay the partial admission fee (SC/ST/PwD: 20,000/-, GN/OBC/GN-EWS:30,000/-) during 28/07/2022 to 01/08/2022. Non Payment of partial admission fee will lead to cancellation of allotted seats.',
  //   link: '#',
  //   lastUpdated: 'Updated on 12:28 PM of 27th July, 2022',
  // },
  {
    title:
      'Candidates have to pay the non-refundable Application Processing Fee (Rs. 2,500/- for OPEN/OPEN-EWS/OBC Category and Rs. 1,250/-for SC/ST/PwD Category) only through the provisions made in the NIMCET-2023 website before the final submission of the online application form.',
    link: '#',
    lastUpdated: 'Updated on 12:28 PM of 28th Feb, 2023',
  },
];

const LinkStyle = styled('a')(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'block',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
}));

const noticeData = [];

function EventListRenderer({ data }) {
  if (!data.length) {
    return <Typography>No post to display</Typography>;
  }

  return (
    <Box component="ul" sx={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      {data.map(({ title, link, lastUpdated }, id) => (
        <Box component="li">
          <LinkStyle href={link}>{title}</LinkStyle>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {lastUpdated}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default function Events() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <MotionInView variants={varFade().inLeft}>
    <Card sx={{ width: '100%', padding: '1rem 2rem', border: '1px solid', borderColor: 'divider' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="News & Events" {...a11yProps(0)} />
          <Tab label="Public Notices" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <EventListRenderer data={eventData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EventListRenderer data={noticeData} />
      </TabPanel>
    </Card>
    // </MotionInView>
  );
}
