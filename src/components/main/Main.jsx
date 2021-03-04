import React from 'react'
import { Wrapper } from '../styles/Wrapper'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  gap: 4px;
  margin: 10px;
  grid-template-rows: repeat(3, auto);
`

const ForecastContainer = styled.div`
  display: grid;
  gap: 4px;
  margin: 10px;
  grid-template-columns: auto auto;
  grid-template-areas: 'hourly daily';

  @media (min-width: 720px) {
    grid-template-areas:
      'hourly'
      'daily';
    grid-template-rows: auto auto;
  }
`

export default function Main() {
  return (
    <Wrapper
      as="main"
      style={{
        '--grid-area': 'main',
      }}
    >
      <Container>
        <div>
          <div class="alignleft">
            <b>Sterling, Virginia, United States</b>
          </div>
          <div class="alignright">
            C/F
            <input type="checkbox" />
          </div>
        </div>

        <div>
          <b>Mon, March 1, 2021 | 5:36 PM</b>
        </div>

        <div class="wrapper">
          <div class="temp">
            <div>Image</div>
            <div>
              <div>
                <h1>48 F</h1>
              </div>
              <div>Scattered Clouds</div>
            </div>
          </div>

          <div class="precipitation">
            <div>Feels like: 30 F</div>
            <div>No precipitation in the next hour</div>
          </div>
        </div>
      </Container>

      <ForecastContainer>
        <Wrapper
          style={{
            '--grid-area': 'hourly',
            '--border': 'none',
            '--box-shadow': 'none',
          }}
        >
          <div class="hour container">
            <div class="hour1">
              <b>1pm</b>Icon 32 0.1 in
            </div>
            <div class="hour2">
              <b>2pm</b>Icon 33 0.1 in
            </div>
            <div class="hour3">
              <b>3pm</b>Icon 34 0.1 in
            </div>
            <div class="hour4">
              <b>4pm</b>Icon 35 0.1 in
            </div>
            <div class="hour5">
              <b>5pm</b>Icon 36 0.1 in
            </div>
            <div class="hour6">
              <b>6pm</b>Icon 37 0.1 in
            </div>
            <div class="hour7">
              <b>7pm</b>Icon 38 0.1 in
            </div>
          </div>
        </Wrapper>
        <Wrapper
          style={{
            '--grid-area': 'daily',
            '--border': 'none',
            '--box-shadow': 'none',
          }}
        >
          <div class="day container">
            <div class="day1">
              <b>Tue</b>Icon 54 32 clear sky 0.1 in
            </div>
            <div class="day2">
              <b>Wed</b> Icon 55 33 overcast clouds 0.1 in
            </div>
            <div class="day3">
              <b>Thu</b> Icon 55 34 few clouds 0.1 in
            </div>
            <div class="day4">
              <b>Fri</b> Icon 66 35 rain 0.1 in
            </div>
            <div class="day5">
              <b>Sat</b> Icon 55 36 overcast clouds 0.1 in
            </div>
            <div class="day6">
              <b>Sun</b> Icon 45 37 overcast clouds 0.1 in
            </div>
            <div class="day7">
              <b>Mon</b> Icon 56 38 overcast clouds 0.1 in
            </div>
          </div>
        </Wrapper>
      </ForecastContainer>
    </Wrapper>
  )
}
