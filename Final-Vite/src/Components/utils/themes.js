// import { createContext } from 'react';

const Themes = {
    light: {
        generic:{
            textColor: '',
            svgLogo: '#082c59',
            svgFav: 'red'
        },
        navbar:{
            bgColor: 'var(--bg-navbar)',
            fontColor: '#04142C'
        }
    },
    dark: {
        generic:{
            textColor: '#ffffff',
            svgLogo:  '#ffffff',
            svgFav: 'red'
        },
        navbar:{
            bgColor: '#212529',
            fontColor: '#FFFFFFDE'
        }
    }
};

// const ThemeContext = createContext(themes.light);
export default Themes;