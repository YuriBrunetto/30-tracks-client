import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { toJpeg } from 'html-to-image'

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

  const saveJpeg = () => {
    toJpeg(document.getElementById('tracks-wrapper'), { quality: 0.95 }).then(
      dataUrl => {
        var link = document.createElement('a')
        link.download = `30-tracks-${new Date().getTime()}`
        link.href = dataUrl
        link.click()
      }
    )
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header user={user} />

          <ContentWrapper>
            <h1>Your monthly top 30 Tracks are</h1>

            <TracksWrapper id="tracks-wrapper">
              {tracks &&
                tracks.map((track, i) => (
                  <Track key={i} i={i + 1} track={track} />
                ))}
            </TracksWrapper>

            <button
              type="button"
              onClick={() => saveJpeg()}
              className="save-image"
            >
              Save image
            </button>
          </ContentWrapper>

          <Footer />
        </>
      )}
    </>
  )
}

export default Tracks
