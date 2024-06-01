import classNames from 'classnames'
import React from 'react'

import { IconButtonComponent } from './IconButton'
import { mergeStyles } from '../../utils/mergeStyle'
import type { ButtonInitialProps, ThemeButtonProps } from '../Button'
import { Tooltip, TooltipProps } from '../Tooltip/Tooltip'

// order of styles import is important
import themeStyle from './theme.module.css'
// eslint-disable-next-line
import style from './IconButton.module.css'

export type IconButtonTheme = ThemeButtonProps & { IconButton: string }

export interface Props extends Partial<ButtonInitialProps> {
    theme: Partial<IconButtonTheme>;
}

type TooltipPickedProps = Pick<TooltipProps,
  | 'tooltip'
  | 'tooltipDelay'
  | 'tooltipPosition'
  | 'tooltipOffset'
>

export type IconButtonProps = Partial<Props & TooltipPickedProps>

export class IconButton extends React.Component<IconButtonProps> {
    render(): React.JSX.Element {
        const {
            children,
            label,
            theme: customTheme,
            tooltip,
            tooltipDelay,
            tooltipPosition,
            tooltipOffset,
            onClick,
            ...otherProps
        } = this.props

        let theme = mergeStyles(style, customTheme) as IconButtonTheme
        theme = mergeStyles(theme, themeStyle) as IconButtonTheme

        const className = classNames(theme.IconButton, this.props.className)

        const composedComponentProps = {
            ...otherProps,
            theme,
            className,
            'data-label': label,
        }

        return (
            <Tooltip
                composedComponent={IconButtonComponent}
                composedComponentProps={composedComponentProps}
                onClick={onClick}
                tooltip={this.props.label ?? this.props.tooltip}
                tooltipDelay={tooltipDelay}
                tooltipPosition={tooltipPosition}
                tooltipOffset={tooltipOffset}
                theme={theme}
            >
                {children}
            </Tooltip>
        )
    }
}
