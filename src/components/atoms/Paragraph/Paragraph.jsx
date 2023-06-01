import PropTypes from 'prop-types'

const Paragraph = ({ children }) => {
  return (
    <p>{ children }</p>
  )
}

Paragraph.PropTypes = {
    children: PropTypes.string.isRequired
}

export default Paragraph