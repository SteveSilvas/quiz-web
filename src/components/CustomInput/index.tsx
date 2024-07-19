import React from 'react';
import { Container, Label, Field } from './styles';

interface CustomInputProps {
    text?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
    text,
    onChange,
    value,
    name,
    type = "text",
    placeholder,
    // className
}) => {
    return (
        <Container>
            {text && <Label>{text}</Label>}
            <Field
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={name}
            />
        </Container>
    );
};

export default CustomInput;
