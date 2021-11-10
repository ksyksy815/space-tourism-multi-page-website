import styled from 'styled-components';
import { Page } from "../../styles/commonStyles"
import bgDesktop from "../../assets/home/background-home-desktop.jpg"

const HomePage = styled(Page)`
  background: url(${bgDesktop});
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 8rem;

  #home-text {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    row-gap: 1rem;

    h1 {
      font-size: 8rem;
    }

    p {
      line-height: 2;
    }
  }

  #home-button {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    button {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: none;
      font-size: 2rem;
    }
  }
`

export default function Home() {
  return (
    <HomePage>
      <div id="home-text">
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, 
            you might as well genuinely go to outer space and 
            not hover kind of on the edge of it. Well sit back, 
            and relax because we’ll give you a truly out of this 
            world experience!
          </p>
      </div>
      <div id="home-button">
        <button>EXPLORE</button>
      </div>
    </HomePage>
  )
}
