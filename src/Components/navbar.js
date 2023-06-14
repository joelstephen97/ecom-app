import React from 'react';

class NavBar extends React.Component {
  render() {
    const navBarStyle = {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
    };

    const navItemStyle = {
      float: 'left'
    };

    const linkStyle = {
      display: 'block',
      color: 'black',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none'
    };

    const linkitems ={
      float: 'right'
    }
    const linkpages={
      float: 'left'
    }
    return (
      <div>
        
        <ul style={navBarStyle}>
          <span style={linkpages}>
            <li style={navItemStyle}><a style={linkStyle} href="/">Home</a></li>
            <li style={navItemStyle}><a style={linkStyle} href="/about">About</a></li>
            <li style={navItemStyle}><a style={linkStyle} href="/faq">FAQ</a></li>
            <li style={navItemStyle}><a style={linkStyle} href="/blog">Blog</a></li>
          </span>

          <span style={linkitems}>
            <li style={navItemStyle}><a style={linkStyle} href="#wishlist">Wishlist</a></li>
            <li style={navItemStyle}><a style={linkStyle} href="#cart">Cart</a></li>
            <li style={navItemStyle}><a style={linkStyle} href="#profile">Profile</a></li>
          </span>
          
        </ul>
        

        
      </div>
      
      
    );
  }
}

export default NavBar;