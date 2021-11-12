import React from 'react'
import styled from 'styled-components'

const StyledDestiNav = styled.ul`
  display: flex;
`

interface DestiNavProps {
  handleCurrent(str: string | null): void
}

export default function DestiNav ( {handleCurrent}: DestiNavProps ) {
  const options = ["Moon", "Mars", "Europa", "Titan"]

  const handleClick = (e: React.MouseEvent<HTMLLIElement>): void => {
    const li = e.target as HTMLElement
    handleCurrent(li.textContent)
  }

  return (
    <StyledDestiNav>
      {
        options.map((item, i) => <li onClick={handleClick} key={i}>{item}</li>)
      }
    </StyledDestiNav>
  )
}
