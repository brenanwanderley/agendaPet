import React,{InputHTMLAttributes, useEffect, useRef} from 'react';

import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest})=> {
    const { registerField, fieldName, defaultValue, error } = useField(name);

    const inputRef = useRef(null);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [registerField, fieldName]);

    return (
        <Container>
            {Icon && <Icon size={20}/>}
            <input ref={inputRef} {...rest} />
        </Container>
    );
};

export default Input;