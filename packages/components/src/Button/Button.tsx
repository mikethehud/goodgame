import React from 'react'
import classNames from "classnames";

export type ButtonType = 'primary' | 'error'

export interface ButtonProps {
    type?: ButtonType
    text: String
}

const Button = (props: ButtonProps) => {
    const { text, type } = props;
    const classes = classNames("gg-button", {
      [`gg-button-${type}`]: true
    });

    return (
        <button className={classes}>
            {text}
        </button>
    )
}

export default Button