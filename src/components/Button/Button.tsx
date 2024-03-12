import classNames from 'classnames'
import type { MouseEvent } from 'react'
import React, { Component } from 'react'

import { FontIcon } from '../FontIcon'
import type { RippleProps } from '../Ripple/Ripple'
import type { ButtonInitialProps, Theme } from './index'

interface ButtonComponentProps extends Partial<ButtonInitialProps> {
    theme: Theme;
}

export class ButtonComponent extends Component<ButtonComponentProps & Partial<RippleProps>> {
    constructor(props: ButtonComponentProps) {
        super(props)

        this.buttonNode = React.createRef()
    }

    buttonNode: React.RefObject<HTMLButtonElement | HTMLAnchorElement>

    render(): JSX.Element {
        const {
            className = '',
            type = 'button',
            label,
            icon,
            href,
            theme,
            inverse,
            mini = false,
            neutral = true,
            uppercase = false,
            gray = false,
            warning = false,
            buttonColor,
            fontSize,
            fontColor,
            children,
            accent,
            primary,
            bordered,
            floating,
            raised,
            ...otherProps
        } = this.props

        const element = href
            ? 'a'
            : 'button'
        const level = this.getLevel()
        const shape = this.getShape()

        const mouseEvents = {
            onMouseUp: this.handleMouseUp,
            onMouseLeave: this.handleMouseLeave,
        }

        const classList = classNames(
            theme.button,
            [theme[shape]],
            {
                [theme[level]]: neutral,
                [theme.mini]: mini,
                [theme.inverse]: inverse,
                [theme.button_uppercase]: uppercase,
                [theme.gray]: gray,
                [theme.warning]: warning,
            },
            className
        )

        const style = {
            backgroundColor: buttonColor,
            color: fontColor,
            fontSize,
        }

        const props = {
            ...otherProps,
            ...mouseEvents,
            href,
            ref: this.buttonNode,
            className: classList,
            type: !href
                ? type
                : null,
            'data-react-toolbox': 'button',
            style,
        }

        const iconContent = icon
            ? (
                <FontIcon
                    className={theme.icon}
                    value={icon}
                />
            )
            : null

        const buttonElement = React.createElement(element, props, iconContent, label, children)

        if (this.props.onMouseEnter && this.props.disabled) {
            return (
                <span {...mouseEvents}>
                    {buttonElement}
                </span>
            )
        }

        return buttonElement
    }

    getLevel = (): 'primary' | 'accent' | 'bordered' | 'neutral' => {
        if (this.props.primary) {
            return 'primary'
        }

        if (this.props.accent) {
            return 'accent'
        }

        if (this.props.bordered) {
            return 'bordered'
        }

        return 'neutral'
    }

    getShape = (): 'raised' | 'floating' | 'flat' => {
        if (this.props.raised) {
            return 'raised'
        }

        if (this.props.floating) {
            return 'floating'
        }

        return 'flat'
    }

    handleMouseUp = (event: MouseEvent<HTMLButtonElement>): void => {
        if (this.props.onMouseUp) {
            this.props.onMouseUp(event)
        }
    }

    handleMouseLeave = (event: MouseEvent<HTMLButtonElement>): void => {
        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(event)
        }
    }
}
