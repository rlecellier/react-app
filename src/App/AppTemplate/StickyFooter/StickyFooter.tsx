import cn from 'classnames'
import React from 'react'

import styles from './StickyFooter.module.scss'

interface IStickyFooterProps {
  className?: string
  children: React.ReactNode | React.ReactNode[]
}

const StickyFooter = ({ className, children }: IStickyFooterProps) => (
  <div className={cn(styles['app-template-stickyfooter'], className)}>
    {children}
  </div>
)

export default StickyFooter
