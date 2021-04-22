import React, { lazy, Suspense } from 'react'

//import { ReactComponent as Cloudy } from '../images/cloudy.svg'
//import { ReactComponent as Mist } from '../images/mist.svg'
//import { ReactComponent as Rain } from '../images/rain.svg'
//import { ReactComponent as Snowy } from '../images/snowy.svg'
//import { ReactComponent as Sun } from '../images/sun.svg'
//import { ReactComponent as Thunderstorm } from '../images/thunderstorm.svg'

const Cloudy = lazy(() => import('./Cloudy'))
const Sun = lazy(() => import('./Sun'))
const Mist = lazy(() => import('./Mist'))
const Rain = lazy(() => import('./Rain'))
const Thunderstorm = lazy(() => import('./Thunderstorm'))
const Snowy = lazy(() => import('./Snowy'))
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

export default function SvgComponent({ iconKey }) {
  return (
    <Suspense fallback={renderLoader()}> {WEATHER_ICON[iconKey]} </Suspense>
  )
}
