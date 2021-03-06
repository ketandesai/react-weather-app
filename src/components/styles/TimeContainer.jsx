import React from 'react'
import styled from 'styled-components'
import { DEVICES } from '../styles/constants'

export const TimeContainer = styled.div`
  display: grid;
  height: 12vh;
  gap: 4px;
  margin: 10px;
  grid-template-rows: repeat(7, auto);
  grid-template-areas:
    '${(props) => props.time + 1}'
    '${(props) => props.time + 2}'
    '${(props) => props.time + 3}'
    '${(props) => props.time + 4}'
    '${(props) => props.time + 5}'
    '${(props) => props.time + 6}'
    '${(props) => props.time + 7}';

  @media (min-width: ${DEVICES.tablet}) {
    grid-template-rows: 1fr;
    grid-template-areas: '${(props) => props.time + 1} ${(props) =>
      props.time + 2} ${(props) => props.time + 3} ${(props) =>
      props.time + 4} ${(props) => props.time + 5} ${(props) =>
      props.time + 6} ${(props) => props.time + 7}';
  }
`
