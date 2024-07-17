import PropTypes from 'prop-types';
import './AddAngelPopup.scss'

const AddAngelPopup = ({ open }) => {
    return (
        <>
            <div
                className={`${open ? 'active' : ''} add_angel_popup`}
            >
                AddAngelPopup
            </div>
        </>
    )
}

AddAngelPopup.propTypes = {
    open: PropTypes.bool,
}

export default AddAngelPopup