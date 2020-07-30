// basic usage
import React from 'react'
import theme from '../theme.js'
import { jsx, ThemeProvider, Styled } from 'theme-ui'

export default props => (

  <ThemeProvider theme={theme}>  <div
  css={{
    fontFamily: 'body',
    color: 'text',
    bg: 'background',
  }}
>
  <Styled.h1>Theme UI + Create React App</Styled.h1>
</div>
{props.children}</ThemeProvider>
)