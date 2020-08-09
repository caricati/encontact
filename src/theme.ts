import { createGlobalStyle} from "styled-components"

export const lightMode = {
  color: {
    primary: '#e05f28',
    gray: '#eee',
    white: '#fff',
    font: '#333',
    inputBorder: '#ccc',
    red: '#e74c3c',
    body: '#fff',
  }
}

export const darkMode = {
  color: {
    primary: '#e05f28',
    gray: '#242b2a',
    white: '#fff',
    font: '#eff7f5',
    inputBorder: '#242b2a',
    red: '#e74c3c',
    body: '#343f3d',
  }
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: any) => theme.color.body};
    color: ${({ theme }: any) => theme.color.font};
  }
`
