import classnames from 'classnames'
import React from 'react'

import styles from './TextArea.module.css'

type Props = {
    error?: React.ReactNode;
    label: string;
    className?: string;
    classNameContainer?: string;
}

export class TextArea extends React.PureComponent<Props> {
    render(): React.JSX.Element {
        const {
            error,
            label,
            ...otherProps
        } = this.props

        const classNameContainer = classnames(styles.Container, this.props.classNameContainer)
        const classNameField = classnames(this.props.className, {
            [styles.Input]: true,
            [styles.Input_error]: error,
        })

        return (
            <div className={classNameContainer}>
                {label && (
                    <div className={styles.Label}>
                        {label}
                    </div>
                )}

                <textarea
                    {...otherProps}
                    className={classNameField}
                />

                {error && (
                    <div className={styles.FieldError}>
                        {error}
                    </div>
                )}
            </div>
        )
    }
}
