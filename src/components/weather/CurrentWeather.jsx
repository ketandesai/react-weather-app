import React, { lazy, Suspense } from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri'
import { selectCurrentWeather, selectUnits } from '../../reducers/weatherSlice'
//import Temperature from './Temperature'
import { WEIGHTS } from '../styles/constants'
//import Image from '../image/Image'
import CircularProgress from '@material-ui/core/CircularProgress'

const Image = lazy(() => import('../image/Image'))
const Temperature = lazy(() => import('./Temperature'))

const renderLoader = () => <p>Loading 4...</p>

function CurrentWeather() {
  const units = useSelector(selectUnits)
  const weather = useSelector(selectCurrentWeather)
  return (
    <Wrapper>
      {weather ? (
        <>
          <Suspense fallback={renderLoader()}>
            <Image
              src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
              alt={weather?.weather[0].description}
              width="100"
              height="100"
            />

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
