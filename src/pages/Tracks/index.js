import React, { useState, useEffect } from 'react'
import queryString from 'query-string'

// Components
import Header from '../../components/Header'
import Track from '../../components/Track'
import Footer from '../../components/Footer'

// Styles
import { ContentWrapper, TracksWrapper } from './styles'

function Tracks() {
  const [state, setState] = useState({
    accessToken: null,
    loading: false,
    logged: false,
    tracks: [],
    user: null
  })
  const { loading, tracks, logged } = state

  useEffect(() => {
    let parsed = queryString.parse(window.location.search)
    let accessToken = parsed.access_token && parsed.access_token

    if (accessToken) {
      setState({ loading: true })

      fetch(
        'https://api.spotify.com/v1/me/top/tracks?limit=30&time_range=short_term',
        {
          headers: {
            Authorization: 'Bearer ' + accessToken
          }
        }
      ).then(res =>
        res
          .json()
          .then(data =>
            setState({ tracks: data.items, loading: false, logged: true })
          )
      )
    }
  }, [])

  return (
    <>
      <Header accessToken={state.accessToken} />

      <ContentWrapper>
        <h1>Your monthly top 30 Tracks are</h1>

        <TracksWrapper>
          {tracks && tracks.map((track, i) => <Track key={i} track={track} />)}
        </TracksWrapper>
      </ContentWrapper>

      <Footer />
    </>
  )
}

export default Tracks
