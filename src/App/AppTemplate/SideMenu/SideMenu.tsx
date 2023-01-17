import cn from 'classnames'
import React from 'react'

import styles from './SideMenu.module.scss'

interface ISideMenuProps {
  className?: string
  children: React.ReactNode | React.ReactNode[]
}

const SideMenu = ({ className }: ISideMenuProps) => (
  <div className={cn(styles['app-template-sidemenu'], className)}>SideMenu</div>
)

export default SideMenu
