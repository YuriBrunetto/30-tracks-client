import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import './App.css'

function App() {
  const [state, setState] = useState({ loading: false, tracks: [] })

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
          .then(data => setState({ tracks: data.items, loading: false }))
      )
    }
  }, [])

  return (
    <div className="App">
      <a href="http://localhost:8888/login">Sign in to Spotify</a>
      {state.loading ? (
        <h1>Loading...</h1>
      ) : (
        state.tracks.map(({ album, name }, i) => (
          <>
            <img key={i} src={album.images[2].url} />,<p>{name}</p>
          </>
        ))
      )}
    </div>
  )
}

export default App
