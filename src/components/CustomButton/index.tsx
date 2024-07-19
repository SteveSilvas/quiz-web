
import React from 'react';
import { Link } from "react-router-dom";
import { CustomButtonContainerStyled, CustomButtonStyled } from './styles';

interface ButtonProps {
    text?: string;
    onClick?: () => void;
    className?: string;
    href?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
}
const CustomButton: React.FC<ButtonProps> = ({
    text,
    onClick,
    className,
    href,
    leftIcon,
    rightIcon
}) => {

    const handleClick = () => {
        onClick?.();
    }

    const renderLink = () => {
        let gridColumns = text ? '1fr 1fr 1fr' : '1fr';
        return (
            <Link
                className={className ?? 'flex-center button'}
                onClick={handleClick}
                style={{
                    display: 'grid',
                    gridTemplateColumns: gridColumns,

                }}
                to={href ?? "/"}
            >
                <div>{leftIcon}</div>
                {text && <span style={{ margin: '0px 24px' }}>{text}</span>}
                <div>{rightIcon}</div>
            </Link>
        );
    }
    const renderButton = () => {
        const buttonClassName = `button ${className ?? ''}`;
        
        return (
            <CustomButtonContainerStyled>
                {leftIcon}
                {text &&
                    <CustomButtonStyled
                        onClick={()=>handleClick}
                        className={className ?? 'button'}>
                       {text}
                    </CustomButtonStyled>
                }
                {rightIcon}
            </CustomButtonContainerStyled>
        );
    }

    return href ? renderLink() : renderButton();
};

export default CustomButton;