import cn from 'classnames'
import React from 'react'

import styles from './Content.module.scss'

interface IContentProps {
  className?: string
  children: React.ReactNode | React.ReactNode[]
}

const Content = ({ className, children }: IContentProps) => (
  <div className={cn(styles['app-template-content'], className)}>
    {children}
  </div>
)

export default Content
