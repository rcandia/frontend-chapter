import React from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  color,
  border,
  position,
  flexbox,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  PositionProps,
  FlexboxProps
} from 'styled-system'

export interface RowProps extends SpaceProps, LayoutProps, ColorProps, BorderProps, PositionProps, FlexboxProps {}

const RowComponent: React.FC<RowProps> = styled.div<RowProps>(
  { display: 'flex' },
  space,
  layout,
  color,
  border,
  position,
  flexbox
)

export default RowComponent
