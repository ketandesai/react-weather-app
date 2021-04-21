import React, { lazy, Suspense } from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri'
import { selectCurrentWeather, selectUnits } from '../../reducers/weatherSlice'
import { WEIGHTS } from '../styles/constants'
import CircularProgress from '@material-ui/core/CircularProgress'

//import { ReactComponent as Cloudy } from '../images/cloudy.svg'
import { ReactComponent as Mist } from '../images/mist.svg'
import { ReactComponent as Rain } from '../images/rain.svg'
import { ReactComponent as Snowy } from '../images/snowy.svg'
//import { ReactComponent as Sun } from '../images/sun.svg'
import { ReactComponent as Thunderstorm } from '../images/thunderstorm.svg'

//const Image = lazy(() => import('../image/Image'))
const Temperature = lazy(() => import('./Temperature'))
const Cloudy = lazy(() => import('../images/Cloudy'))
const Sun = lazy(() => import('../images/Sun'))

const renderLoader = () => <p>Loading...</p>

export const WEATHER_ICON = {
  '01d': <Sun width={100} height={100} />,
  '02d': <Cloudy width={100} height={100} />,
  '03d': <Cloudy width={100} height={100} />,
  '04d': <Cloudy width={100} height={100} />,
  '09d': <Rain width={100} height={100} />,
  '11d': <Thunderstorm width={100} height={100} />,
  '13d': <Snowy width={100} height={100} />,
  '50d': <Mist width={100} height={100} />,
}

function CurrentWeather() {
  const units = useSelector(selectUnits)
  const weather = useSelector(selectCurrentWeather)
  return (
    <Wrapper>
      {weather ? (
        <>
          <Suspense fallback={renderLoader()}>
            {WEATHER_ICON[weather?.weather[0]?.icon]}
            <TempWrapper>
              <TemperatureTitle>
                <Temperature degrees={weather?.temp} />{' '}
              </TemperatureTitle>
              <div>
                {units === 'imperial' ? (
                  <RiFahrenheitFill />
                ) : (
                  <RiCelsiusFill />
                )}
              </div>
            </TempWrapper>
          </Suspense>
        </>
      ) : (
        <CircularProgress color="inherit" size={20} />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const TempWrapper = styled.div`
  display: flex;
`

const TemperatureTitle = styled.h1`
  font-size: 3rem;
  font-weight: ${WEIGHTS.bold};
`

export default CurrentWeather
