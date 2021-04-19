import React from 'react'
import styled from 'styled-components/macro'
import DateComponent from '../time/DateComponent'
import TimeComponent from '../time/TimeComponent'
import { selectWeatherAlerts } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { WEIGHTS } from '../styles/constants'

export const WeatherAlert = ({ theme }) => {
  const weather = useSelector(selectWeatherAlerts)

  const muiTheme = createMuiTheme({
    palette: {
      type: theme,
    },
  })

  let content = weather?.map((alert, index) => (
    <Accordion key={`${alert.event}_${index}`}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Wrapper>
          <Title>{alert.event}</Title>
          <span>
            <DateComponent seconds={alert.start} />{' '}
            <TimeComponent seconds={alert.start} /> -{' '}
            <DateComponent seconds={alert.end} />{' '}
            <TimeComponent seconds={alert.end} />{' '}
          </span>
        </Wrapper>
      </AccordionSummary>
      <AccordionDetails>{alert.description}</AccordionDetails>
    </Accordion>
  ))

  return <ThemeProvider theme={muiTheme}>{content}</ThemeProvider>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.span`
  font-weight: ${WEIGHTS.bold};
`
