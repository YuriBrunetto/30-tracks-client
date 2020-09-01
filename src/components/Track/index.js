import React from 'react'

// Styled
import { TrackWrapper } from './styles'

const Track = ({ track: { name, artists, album, external_urls }, i }) => (
  <TrackWrapper href={external_urls.spotify} target="_blank">
    <div className="number">{i}</div>
    <img src={album.images[1].url} alt={name} className="track-image" />
    <div className="text">
      {artists[0].name}
      <br />
      <strong>{name}</strong>
    </div>
  </TrackWrapper>
)

export default Track
