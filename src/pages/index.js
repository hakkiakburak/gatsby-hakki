import React from 'react'
import Link from 'gatsby-link'
import logo from "./propic.jpg"
console.log(logo);

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="https://scontent-otp1-1.cdninstagram.com/t51.2885-19/s320x320/18809580_1200781300048087_6084459174995951616_a.jpg" />;
}

export default Header;
