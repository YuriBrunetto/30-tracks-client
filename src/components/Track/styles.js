import styled from 'styled-components'

export const TrackWrapper = styled.a`
  flex: 0 0 calc(100% / 6);
  position: relative;

  @media (max-width: 1300px) {
    flex-basis: 20%;
  }

  @media (max-width: 959px) {
    flex-basis: 33.33%;
  }

  @media (max-width: 559px) {
    flex-basis: 50%;
  }

  &:nth-child(even):before {
    background-color: var(--black);
  }

  &:before {
    content: '';
    background: url(${props => props.image}) no-repeat center var(--green);
    background-size: cover;
    padding-bottom: 100%;
    display: block;
  }

  &:after {
    content: '';
    z-index: 2;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 1)
    );
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .number {
    height: 24px;
    width: 24px;
    background-color: var(--green);
    color: #fff;
    position: absolute;
    top: 16px;
    left: 16px;
    border-radius: 50%;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }

  .text {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 16px;
    text-align: right;
    font-size: 12px;
    z-index: 5;
    color: #fff;

    strong {
      margin-top: 4px;
      color: var(--green);
      font-size: 16px;
    }
  }
`
