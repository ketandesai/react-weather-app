import React from 'react'
import styled from 'styled-components/macro'

function Image({ src, alt }) {
  return (
    <Wrapper>
      <ImageWrapper src={src} alt={alt} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const ImageWrapper = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`

export default Image
