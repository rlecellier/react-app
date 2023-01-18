import MuiLink from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

const Link = (props: LinkProps) => (
  <MuiLink component={RouterLink} {...props}>
    {props.children}
  </MuiLink>
)

export default Link
