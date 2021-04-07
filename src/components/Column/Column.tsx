import React from 'react'

import { Row } from 'components'
import { RowProps } from 'components/Row'

export type ColumnProps = RowProps

const ColumnComponent: React.FC<ColumnProps> = props => <Row flexDirection='column' {...props} />

export default ColumnComponent
