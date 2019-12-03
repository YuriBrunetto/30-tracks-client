import React, { useState, useEffect } from 'react'
import queryString from 'querystring'

// Components
import Header from '../../components/Header'

function Tracks() {
  const [state, setState] = useState({
    loading: false,
    logged: false,
    tracks: []
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
      <Header />
    </>
  )
}

export default Tracks
