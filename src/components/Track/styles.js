import styled from 'styled-components'

export const TrackWrapper = styled.a`
  width: 100%;
  padding: 16px 0;
  display: flex;
  align-items: center;
  color: var(--black);
  border-bottom: 1px solid rgba(255,255,255,.1);

  .number {
    background-color: var(--green);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    color: #fff;
    flex: 0 0 20px;
  }

  .text {
    text-align: left;
    line-height: 150%;
    font-size: 12px;
    color: #fff;

    strong {
      font-size: 18px;
    }
  }

  .track-image {
    max-width: 40px
    margin: 0 8px;
    flex: 0 0 40px;
  }
`
