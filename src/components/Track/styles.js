import styled from 'styled-components'

export const TrackWrapper = styled.div`
  flex: 0 0 20%;
  position: relative;

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
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1)
    );
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
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
