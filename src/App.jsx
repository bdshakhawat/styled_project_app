import {ThemeProvider} from 'styled-components';

import './App.css'
import React from 'react';
import StyledButton, { FancyButton, SubmitButton } from './components/Button/Button';
import { DarkButton } from './components/Button/Button.styles'
function App() {

    const theme={
      dark:{
        primary:'#000',
        text:'#fff',
      },
      light:{
        primary:'#fff',
        text:'#000',
      },
    }



  return (
    
       <ThemeProvider theme={theme}>
          
                <StyledButton>Styled Button</StyledButton>
                <div>
                  <br/>
                </div>
                <StyledButton mariant='outlined'>Styled Button</StyledButton>
                <div>
                  <br/>
                </div>
                <FancyButton as='a'>Fancy Button</FancyButton>
                <div>
                  <br/>
                </div>
                <SubmitButton>Submit</SubmitButton>
                <div>
                  <br/>
                </div>
                <DarkButton>Dark Theme</DarkButton>
          
        </ThemeProvider>
    
  )
}

export default App