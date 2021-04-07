import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      terciary: string
      quaternary: string
      quinaria: string
    }
    space: []

    sizes: {
      large: string
      big: number
      regular: number
      small: number
    }
  }
}
