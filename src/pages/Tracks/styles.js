import styled from 'styled-components'

export const ContentWrapper = styled.section`
  margin: 80px auto 0;
  text-align: center;

  h1 {
    padding: 0 24px;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }

  .save-image {
    margin: 30px auto 0;
    height: 48px;
    background-color: var(--green);
    color: #fff;
    border-radius: 24px;
    font-weight: bold;
    border: 0;
    outline: 0;
    text-transform: uppercase;
    font-size: 14px;
    padding: 0 24px;
    cursor: pointer;
  }
`

export const TracksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`
