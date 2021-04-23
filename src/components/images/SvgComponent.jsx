import React, { lazy, Suspense } from 'react'

const Cloudy = lazy(() => import('./Cloudy'))
const Sun = lazy(() => import('./Sun'))
const Mist = lazy(() => import('./Mist'))
const Rain = lazy(() => import('./Rain'))
const Thunderstorm = lazy(() => import('./Thunderstorm'))
const Snowy = lazy(() => import('./Snowy'))
const Moon = lazy(() => import('./Moon'))
const RainNight = lazy(() => import('./RainNight'))
const CloudyNight = lazy(() => import('./CloudyNight'))

const renderLoader = () => <p>Loading...</p>

export default function SvgComponent({ iconKey, width, height }) {
  const WEATHER_ICON = {
    '01d': <Sun width={width} height={height} />,
    '02d': <Cloudy width={width} height={height} />,
    '03d': <Cloudy width={width} height={height} />,
    '04d': <Cloudy width={width} height={height} />,
    '09d': <Rain width={width} height={height} />,
    '10d': <Rain width={width} height={height} />,
    '11d': <Thunderstorm width={width} height={height} />,
    '13d': <Snowy width={width} height={height} />,
    '50d': <Mist width={width} height={height} />,
    '01n': <Moon width={width} height={height} />,
    '02n': <CloudyNight width={width} height={height} />,
    '03n': <CloudyNight width={width} height={height} />,
    '04n': <CloudyNight width={width} height={height} />,
    '09n': <RainNight width={width} height={height} />,
    '10n': <RainNight width={width} height={height} />,
    '11n': <Thunderstorm width={width} height={height} />,
    '13n': <Snowy width={width} height={height} />,
    '50n': <Mist width={width} height={height} />,
  }

  return (
    <Suspense fallback={renderLoader()}> {WEATHER_ICON[iconKey]} </Suspense>
  )
}
