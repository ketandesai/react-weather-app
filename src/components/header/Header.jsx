import React, { lazy, Suspense, useState } from 'react'
import styled from 'styled-components/macro'
import { QUERIES, WEIGHTS } from '../styles/constants'
import { GoogleLogin } from 'react-google-login'
import { GoogleLogout } from 'react-google-login'

const FavoritesDrawer = lazy(() => import('../favorites/FavoritesDrawer'))
const ThemeToggle = lazy(() => import('../toggle/ThemeToggle'))
const GitHubLogo = lazy(() => import('../logo/GitHubLogo'))

const renderLoader = () => <p>Loading Drawer...</p>

const clientId =
  '213954015155-5384h2lercp8bmjrct7q1sg7qmsq0eeq.apps.googleusercontent.com'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onSuccess = (response) => {
    console.log(`login success`)
    console.log(response)
    console.log(response.profileObj.email)
    console.log(response.profileObj.givenName)
    console.log(response.profileObj.familyName)
    console.log(response.googleId)
    console.log(response.profileObj.imageUrl)
    console.log(response.profileObj.name)
    console.log(response.tokenId)

    setIsLoggedIn(true)
  }

  const onFailure = (response) => {
    console.log(`login failure`)
    console.log(response)
    setIsLoggedIn(false)
  }

  const onLogout = () => {
    console.log(`user logged out`)
    setIsLoggedIn(false)
  }

  return (
    <Wrapper>
      <Suspense fallback={renderLoader()}>
        <GitHubLogo />
      </Suspense>
      <NavWrapper>
        <Suspense fallback={renderLoader()}>
          <FavoritesDrawer />
        </Suspense>
        <TitleWrapper>React Weather</TitleWrapper>
        <Suspense fallback={renderLoader()}>
          <ThemeToggle />
        </Suspense>

        {isLoggedIn ? (
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onLogout}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        )}
      </NavWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: var(--text-align, left);
  padding-bottom: 32px;

  /* For tablets and larger devices */
  @media ${QUERIES.tabletAndUp} {
    justify-content: space-between;
  }
`

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 56px;
  margin-left: 12px;
  margin-right: 12px;
`

const TitleWrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`
