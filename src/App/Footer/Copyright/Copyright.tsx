import { Typography } from '@mui/material'
import React from 'react'

import LinkExternal from 'ui-kit/LinkExternal'

type TCopyrightProps = React.ComponentProps<typeof Typography>

const Copyright = (props: TCopyrightProps) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <LinkExternal color="inherit" href="https://mui.com/">
      Your Website
    </LinkExternal>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
)

export default Copyright
