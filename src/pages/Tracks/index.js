import React, { useState, useEffect } from 'react'
import queryString from 'query-string'

// Components
import Header from '../../components/Header'
import Track from '../../components/Track'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'

// Styles
import { ContentWrapper, TracksWrapper } from './styles'

function Tracks() {
  const [state, setState] = useState({
    accessToken: null,
    loading: false,
    tracks: [],
    user: null,
    error: false
  })
  const { loading, tracks, user } = state

  useEffect(() => {
    let parsed = queryString.parse(window.location.search)
    let accessToken = parsed.access_token && parsed.access_token
    let authorization = 'Bearer ' + accessToken

    if (accessToken) {
      async function fetchData() {
        setState({ loading: true })

        try {
          let [tracks, user] = await Promise.all([
            fetch(
              'https://api.spotify.com/v1/me/top/tracks?limit=30&time_range=short_term',
              {
                headers: {
                  Authorization: authorization
                }
              }
            ),
            fetch('https://api.spotify.com/v1/me', {
              headers: {
                Authorization: authorization
              }
            })
          ])

          let tracksResponse = await tracks.json()
          let userResponse = await user.json()

          setState({
            tracks: tracksResponse.items,
            loading: false,
            user: userResponse
          })
        } catch (e) {
          setState({ loading: false, error: true })
        }
      }

      fetchData()
    }
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header user={user} />

          <ContentWrapper>
            <h1>Your monthly top 30 Tracks are</h1>

            <TracksWrapper className="common-limiter" id="tracks-wrapper">
              {tracks &&
                tracks.map((track, i) => (
                  <Track key={i} i={i + 1} track={track} />
                ))}
            </TracksWrapper>
          </ContentWrapper>

          <Footer />
        </>
      )}
    </>
  )
}

export default Tracks
