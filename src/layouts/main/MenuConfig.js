// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../routes/paths';
// components
import { PATH_AFTER_LOGIN } from '../../config';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    children: [
      {
        subheader: 'About',
        items: [
          { title: 'NIMCET', path: PATH_PAGE.about },
          { title: 'NIC', path: PATH_PAGE.contact },
        ],
      },
      {
        subheader: 'Chairman',
        items: [{ title: 'Message from Chairman', path: PATH_AUTH.loginUnprotected }],
      },
      {
        subheader: 'Information',
        items: [
          { title: 'Profoma Annexures', path: PATH_PAGE.page404 },
          { title: 'Revised Instruction and Procedures for Counselling', path: PATH_PAGE.page500 },
        ],
      },
      {
        subheader: 'eServices',
        items: [
          { title: 'Participating Institute', path: PATH_PAGE.page404 },
          { title: 'Seat Matrix', path: PATH_PAGE.page404 },
          { title: 'OR-CR', path: PATH_PAGE.page404 },
        ],
      },
      {
        subheader: 'Miscellanous',
        items: [
          { title: 'Schedule', path: PATH_PAGE.page404 },
          { title: 'Archive', path: PATH_PAGE.page404 },
        ],
      },

      {
        subheader: '',
        items: [],
      },
    ],
  },
];

export default menuConfig;
