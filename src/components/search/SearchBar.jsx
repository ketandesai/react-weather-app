import React from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  grid-area: 'searchbar';
  padding: 8px;
  background-color: white;
  border: 1px solid blue;
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
`

const SearchBox = styled.input`
  max-width: 600px;
  width: 100%;
  border: none;
  border-radius: 20px;
  background-color: #e2e8f0;
  letter-spacing: 0.05em;
  padding-left: 3rem;
  font-weight: bold;
  font-size: 16px;

  :focus {
    outline: none;
  }
`

const SearchBar = () => {
  return (
    <SearchContainer className="searchbar">
      <SearchBox placeholder="Enter City" />
    </SearchContainer>
  )
}

export default SearchBar
