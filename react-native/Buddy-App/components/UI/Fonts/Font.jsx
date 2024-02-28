import { extendTheme } from 'native-base';


const theme = extendTheme({
  fonts: {
    heading: 'Poppins-Regular',
    body: 'Poppins-Regular',
    mono: 'Poppins-Regular',
  },
  fontConfig: {
    'Poppins-Regular': {
      normal: 'Poppins-Regular',
      bold: 'Poppins-Bold',
      italic: 'Poppins-Italic',
      boldItalic: 'Poppins-BoldItalic',
    },
  },
});

export default theme;
