import React from 'react'
import styled from 'styled-components/macro'

export default function Image({ src, alt, width, height }) {
  const style = {
    '--width': width,
    '--height': height,
  }
  return (
    <Wrapper>
      <ImageWrapper src={src} alt={alt} style={style} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const ImageWrapper = styled.img`
  width: var(--width);
  height: var(--height);
  border-radius: 16px 16px 4px 4px;
`
