import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from "styled-components"
import GlobalStyle from "./styles/globalStyle"
import MainNav from "./components/MainNav"
import Home from "./pages/home/Home"
import Destination from "./pages/destination/Destination"
import Crew from "./pages/crew/Crew"
import Technology from "./pages/technology/Technology"

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
