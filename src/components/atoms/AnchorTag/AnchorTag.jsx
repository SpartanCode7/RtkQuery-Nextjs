import PropTypes from 'prop-types'

const AnchorTag = ({ href, children }) => {
  return (
    <a href={href}>{children}</a>
  )
}

AnchorTag.PropTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default AnchorTag