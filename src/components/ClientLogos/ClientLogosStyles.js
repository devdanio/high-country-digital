import styled from "styled-components"

export const ClientLogosStyles = styled.section`
  margin: 0;
  padding-top: 3rem;
  padding-bottom: 3rem;

  .logo-wrapper {
    display: flex;
    flex-direction: column;
    column-gap: 2rem;
    row-gap: 2rem;
    > div {
      display: flex;
      flex-direction: row;
      column-gap: 2rem;
    }
  }

  @media (min-width: 900px) {
    .logo-wrapper {
      flex-direction: row;
    }
  }
`
