import { extendTheme } from 'native-base';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';

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
