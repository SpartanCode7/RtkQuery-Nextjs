import PropTypes from 'prop-types'

const Span = ({ children }) => {
  return (
    <span>{children}</span>
  )
}

Span.PropTypes = {
    children: PropTypes.string.isRequired
}

export default Span