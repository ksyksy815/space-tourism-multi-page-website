import { Link } from 'react-router-dom'
import styled from 'styled-components';
import logo from "../assets/shared/logo.svg"

const StyledNav = styled.nav`
  position: absolute;
  top: 30px;
  width: 100vw;
  color: #fff;
  display: flex;
  justify-content: space-between;

  #logo {
    margin: 0 2rem;
    align-self: center;
  }
  img {
    width: 50px;
    height: 50px;
  }

  ul {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
    
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);

    li {
      height: 100%;
      a {
        display: flex;
      height: 100%;
      column-gap: 1rem;
      padding: 2rem 0;
        color: #fff;
      }
      span {
        &:first-child {
          font-weight: bold;
        }
      }
    }
  }
`

export default function MainNav() {
  return (
    <StyledNav>
      <span id="logo">
        <img src={logo} alt="logo"/>
      </span>
      <ul>
        <li>
          <Link to="/">
            <span>00</span><span>HOME</span>
          </Link>
        </li>
        <li>
          <Link to="/destination">
          <span>01</span><span>DESTINATION</span>
          </Link>
        </li>
        <li>
          <Link to="/crew">
            <span>02</span><span>CREW</span>
          </Link>
        </li>
        <li>
          <Link to="/technology">
            <span>03</span><span>TECHNOLOGY</span>
          </Link>
        </li>
      </ul>
    </StyledNav>
  )
}
