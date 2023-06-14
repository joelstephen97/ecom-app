import React from 'react';


class Header extends React.Component {
  render() {
    const navBarStyle = {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'space-between'
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
    const logoitem={
        textAlign: 'center',
        margin: 'auto',
        display:'inline-block',
    }
    const linkpages={
        float: 'left'
    }
    return (
      <div>
        
        <ul style={navBarStyle}>
          <span style={linkpages}>
            <li style={navItemStyle}><a style={linkStyle} href="wa">Phone Image</a></li>
            <li style={navItemStyle}><a style={linkStyle} href="wa">Phone Number</a></li>
          </span>

          <span style={logoitem}>
            <img src="https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png" height="60px" alt="logo" />
          </span>

          <span style={linkitems}>
            <li style={navItemStyle}>
              <a style={linkStyle} href="fb">
                FB
              </a>
            </li>
            <li style={navItemStyle}>
              <a style={linkStyle} href="tw">
                TW
              </a>
            </li>
            <li style={navItemStyle}>
              <a style={linkStyle} href="ig">
                IG
              </a>
            </li>
            <li style={navItemStyle}>
              <a style={linkStyle} href="yt">
                YT
              </a>
            </li>
          </span>
          
        </ul>
        

        
      </div>
      
      
    );
  }
}

export default Header;