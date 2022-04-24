import PropTypes from 'prop-types'

const Button = ({ type, children }) => {
    return (
        <button className="px-4 py-2 bg-purple-700 rounded-lg text-white hover:bg-purple-800">
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'button']),
}

export { Button }
