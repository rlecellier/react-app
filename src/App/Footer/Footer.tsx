import React from 'react'

import Copyright from './Copyright'

interface IFooterProps {
  className?: string
}

const Footer = ({ className }: IFooterProps) => (
  <div className={className}>
    <Copyright />
  </div>
)

export default Footer
