import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const config = {
   width: "300px",
   height: "400px",
   floating: true,
 };

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#271789',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#f0f0f0',
  botFontColor: '#000000',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Hello World',
    end: true,
  },
];

const Bot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config}/>;
  </ThemeProvider>
)

export default Bot
