import PropTypes from 'prop-types'

const Button = ({ href, children }) => {
  return (
    <a href={href}>{children}</a>
  )
}

Button.PropTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Button