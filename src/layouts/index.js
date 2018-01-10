import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'typeface-lato';
import 'typeface-inconsolata';
import { rhythm } from '../utils/typography';

import { SiteHeader, SiteNav, NavLink, SubHeader, Logo, Name, Main } from '../components/Headings';
import {
  SocialLinks,
  SocialLink,
} from '../components/Footer';

const FooterLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/hakkiakburak',
    color: '#00aced',
  }, {
    name: 'Github',
    link: 'https://github.com/hakkiakburak',
    color: '#010000',
  },
];

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Hakki Akburak"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <SiteHeader>
          <Link to="/">
            <Name>Hakki Akburak</Name>
          </Link>
          <SiteNav>
            <ul>
              <li>
                <NavLink underline="#16a085" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink underline="#e74c3c" to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink underline="#2980b9" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </SiteNav>
        </SiteHeader>

        <Main>
          {this.props.children()}
        </Main>

        <footer className="footer">
          <SubHeader>Where to find me</SubHeader>
          <SocialLinks>
            {FooterLinks.map(link => (
              <li key={link.name}>
                <SocialLink
                  target="_blank"
                  rel="nofollow"
                  color={link.color}
                  href={link.link}
                >
                  {link.name}
                </SocialLink>
              </li>
          ))}
          </SocialLinks>
        </footer>
      </div>
    );
  }
}
