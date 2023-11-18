import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: none;
    outline: none;
    /* &:focus {
        outline: 2px solid #42AF53;
    } */
    width: ${props => props.width};
    height: 46px;
    padding: 0 10px 0 10px;
`
const Label = styled.div`
    width: ${props => props.width};
    height: 46px;
    cursor: pointer;
    border-radius: 2px;
    border: 1.5px solid #D4D4D4;
    background: #FFF;
    font-family: 'Pretendard';
    display: flex;
    align-items: center;
`

const RegInput = (props) => {
    const { type, name, defaultValue, value, onChange, placeholder, pattern, btntitle, onBtnClick, width } = props;
    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
        setFocus(!focus);
    }
    return (
        <Label style={focus ? {border:"1.5px solid #42AF53"} : {}} width={width}>
        <StyledInput type={type} defaultValue={defaultValue} name={name} value={value} onChange={onChange} placeholder={placeholder} patter={pattern}
         onFocus={handleFocus} onBlur={handleFocus}/>
        </Label>
    );
};

export default RegInput;