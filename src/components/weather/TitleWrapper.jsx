import React, { lazy, Suspense } from 'react'
import styled from 'styled-components/macro'
import DateComponent from '../time/DateComponent'
import TimeComponent from '../time/TimeComponent'
import { QUERIES, WEIGHTS } from '../styles/constants'
import Spacer from '../spacer/Spacer'

const SvgComponent = lazy(() => import('../images/SvgComponent'))
const renderLoader = () => <p>Loading Image...</p>

export default function TitleWrapper({ date, icon, daily }) {
  const component = daily ? (
    <DateComponent seconds={date} options={{ weekday: 'short' }} />
  ) : (
    <TimeComponent seconds={date} options={{ hour: 'numeric' }} />
  )

  return (
    <Wrapper>
      <BoldFont>{component}</BoldFont>
      <Spacer size={12} />
      <Suspense fallback={renderLoader()}>
        <SvgComponent iconKey={icon} width={50} height={50} />
      </Suspense>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  /* For tablets and larger devices */
  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    align-items: center;
  }
`

const BoldFont = styled.span`
  font-weight: ${WEIGHTS.bold};
`
