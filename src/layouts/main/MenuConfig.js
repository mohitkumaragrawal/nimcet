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
          { title: 'NIC', path: PATH_PAGE.aboutNic },
        ],
      },
      {
        subheader: 'Chairman',
        items: [{ title: 'Message from Chairman', path: PATH_PAGE.chairman }],
      },
      {
        subheader: 'Information',
        items: [
          { title: 'Profoma Annexures', path: PATH_PAGE.ProformaAnnexures },
          { title: 'Revised Instruction and Procedures for Counselling', path: PATH_PAGE.InstructionsAndProcedure },
        ],
      },
      {
        subheader: 'Registration',
        items: [
          { title: 'Eligibility Criteria', path: PATH_PAGE.EligibilityCriteria },
          { title: 'Documents Required', path: PATH_PAGE.DocumentsRequired },
          { title: 'Application Fee ', path: PATH_PAGE.ApplicationFee },
          { title: 'Test Centers', path: '/test-centers' },
        ],
      },
      {
        subheader: 'Miscellanous',
        items: [
          { title: 'Schedule', path: PATH_PAGE.Schedule },
          { title: 'Archive', path: PATH_PAGE.Archive },

          { title: 'Privacy Policy', path: '/privacy-policy2' },
          { title: 'Refund Policy', path: '/refund-policy2' },
        ],
      },

      {
        subheader: '',
        items: [],
      },
    ],
  },
  {
    title: 'Download Brochure',
    path: 'https://drive.google.com/file/d/18p70B2b3N9QMhilsCtHBtFTtuMj4g25q/view?usp=sharing',
  },
];

export default menuConfig;
