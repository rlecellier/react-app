import cn from 'classnames'
import React from 'react'

import styles from './Header.module.scss'
interface IHeaderProps {
  className?: string
  children: React.ReactNode | React.ReactNode[]
}

const Header = ({ className, children }: IHeaderProps) => (
  <div className={cn(styles['app-template-header'], className)}>{children}</div>
)

export default Header
