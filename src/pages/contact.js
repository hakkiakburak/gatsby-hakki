import React from 'react';

import { Title, MainWrapper } from '../components/Headings';

export default class Index extends React.Component {
  render() {
    return (
      <MainWrapper color="#2980b9">
        <Title>Contact</Title>
        <p>Write me...</p><p className="cont"><a href="mailto:hakki.akburak@gmail.com" className="e-mail">hakki.akburak@gmail.com</a></p>
      </MainWrapper>
    );
  }
}
