import MuiLink from '@mui/material/Link'

type TLinkExternalProps = React.ComponentProps<typeof MuiLink>
const LinkExternal = (props: TLinkExternalProps) => (
  <MuiLink {...props}>{props.children}</MuiLink>
)

export default LinkExternal
