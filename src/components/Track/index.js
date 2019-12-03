import React from 'react'

// Styled
import { TrackWrapper } from './styles'

const Track = ({ track: { name, artists, album } }) => (
  <TrackWrapper image={album.images[1].url}>
    <div className="text">
      {artists[0].name}
      <br />
      <strong>{name}</strong>
    </div>
  </TrackWrapper>
)

export default Track
