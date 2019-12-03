import styled from 'styled-components'

export const TrackWrapper = styled.div`
  flex: 0 0 20%;
  position: relative;

  &:nth-child(even):before {
    background-color: var(--black);
  }

  &:before {
    content: '';
    background: var(--green);
    padding-bottom: 100%;
    display: block;
  }
`
