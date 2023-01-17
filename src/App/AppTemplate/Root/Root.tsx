import cn from 'classnames'
import React from 'react'

import styles from './Root.module.scss'
interface IRootProps {
  className?: string
  children: React.ReactNode | React.ReactNode[]
}

const Root = ({ className, children }: IRootProps) => (
  <div className={cn(styles['app-template-root'], className)}>{children}</div>
)

export default Root
