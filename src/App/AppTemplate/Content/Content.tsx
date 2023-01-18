import Container from '@mui/material/Container'
import cn from 'classnames'
import React from 'react'

import styles from './Content.module.scss'

interface IContentProps {
  className?: string
  children: React.ReactNode | React.ReactNode[]
}

const Content = ({ className, children }: IContentProps) => (
  <Container
    className={cn(styles['app-template-content'], className)}
    component="main"
  >
    {children}
  </Container>
)

export default Content
