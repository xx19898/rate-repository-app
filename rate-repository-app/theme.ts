import { Platform } from "react-native";


export const theme = {
    colors: {
        primary: '#FF499E',
        secondary: '#D264B6',
        altSecondary: '#A480CF',
        neutral: '#779BE7',
        base:'#49B6FF'
    },
    fontSizes: {
        body: 16,
        subheading: 32,
        heading: 64,
      },
      fonts: {
        main: Platform.OS === 'android' ? 'Roboto' : 'Arial',
      },
      fontWeights: {
        normal: '400',
        bold: '700',
      },
}