import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { Title, MainWrapper } from '../components/Headings';
import { Resume, FakeButtons } from '../components/AboutStyles';

export default class About extends React.Component {
  render() {
    return (
      <MainWrapper color="#16a085">
        <Title>About</Title>
        <div>
          <p>
            Hi, I'm Hakki Akburak.
          </p>
          </div>
      </MainWrapper>
    );
  }
}
