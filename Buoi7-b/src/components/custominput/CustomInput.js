import { useState } from 'react';
import './CustomInput.css';

const CustomInput = (props) => {
    const [inputFocus, setInputFocus] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [value, setValue] = useState('');

    const _onFoucs = () => {
        setInputFocus(true)
    }

    const _onblur = () => {
        setInputFocus(false)
        if (!value) {
            setIsEmpty(true)
        }else setIsEmpty(false)
    }

    const _onChange = e => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        setValue(e.target.value);
    }

    return (
        <div className='formcontrol-input'>
            <label
                className={inputFocus ? 'active' : (!isEmpty ?'not-empty' : '')}
            >
                {props.label}
            </label>
            <input
                className={inputFocus ? 'active' : (!isEmpty ?'not-empty' : '')}
                type={props.type}
                onFocus={_onFoucs}
                onBlur={_onblur}
                value={value}
                onChange={_onChange}
            />
            <fieldset className={inputFocus ? 'active' : (!isEmpty ?'not-empty' : '')}>
                <legend>{props.label}</legend>
            </fieldset>
        </div>
    )
}

export default CustomInput;