import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import infoCircle from "../../assets/info-circle.png"
import addIcon from "../../assets/add-icon.png"
import arrowDown from "../../assets/arrow-down.png"
import './select.scss'
import { useClickOutside } from '../../utils/hooks/useClickOutside';

const Select = ({
    value,
    options = [],
    placeholder,
    hasAddButton,
    addButtonLabel,
    onAdd = () => { },
    onChange = () => { },
}) => {
    const [currentOption, setcurrentOption] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const listRef = useClickOutside(() => {
        setIsOpen(false)
    })
    const optionData = options?.find((item) => item.value === currentOption)

    const handleClickLabel = () => {
        setIsOpen(!isOpen)
    }

    const handleSelectOption = (selectedOption) => {
        onChange(selectedOption.value, selectedOption)
        setcurrentOption(selectedOption.value)
        setIsOpen(false)
    }

    useEffect(() => {
        setcurrentOption(value)
    }, [value])


    return (
        <div
            className="select_wrapper"
        >
            <div
                className="custom_select_field"
                onClick={handleClickLabel}
            >
                {
                    optionData ? <>{<span className='custom_select_label'> {optionData.label}</span>}</> : <><span className='custom_select_placeholder'> {placeholder ?? 'Select'}</span></>
                }
                <div className='down-arrow'>
                    <img src={arrowDown} alt="" />
                </div>
            </div>
            <div
                className={`custom_select_list ${isOpen ? 'active' : ''}`}
                ref={listRef}
            >
                <ul>
                    {
                        options.map((opt) => {
                            return (
                                <li key={opt.value} onClick={() => handleSelectOption(opt)}>
                                    {opt.label}
                                    {opt.tooltip && <div className="tooltip">
                                        <img src={infoCircle} alt="" />
                                    </div>}
                                </li>
                            )
                        })
                    }
                </ul>
                {hasAddButton && <button
                    className="add_new_angle_btn"
                    onClick={onAdd}
                >
                    {addButtonLabel ?? 'Add'}
                    <img src={addIcon} alt="" />
                </button>}
            </div>
        </div >
    )
}

Select.propTypes = {
    value: PropTypes.any,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    hasAddButton: PropTypes.bool,
    addButtonLabel: PropTypes.string,
    onAdd: PropTypes.func,
}
export default Select