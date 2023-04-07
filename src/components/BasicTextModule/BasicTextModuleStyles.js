import styled from "styled-components"

export const BasicTextModuleStyles = styled.section`
  background-color: black;
  margin: 0;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;

  .max-width{
    500px;
  }
  div {
    width: 100%;
    margin: 0 auto;
  }

  .external-link {
    font-size: 0.7rem;
    color: #999;
    display: block;
  }
  .container {
    @media (min-width: 768px) {
      > div {
        width: 66.666%;
        max-width: 700px;
      }
    }
  }
`
