import React from "react"
import classNames from "classnames"

export type ButtonSize = "lg" | "sm"

export type ButtonType =
  | "primary"
  | "default"
  | "danger"
  | "warning"
  | "confirm"
  | "link"

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const SanButton: React.FC<ButtonProps> = props => {
  const { btnType, className, disabled, size, children, href, ...restProps } =
    props

  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  })

  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

SanButton.defaultProps = {
  disabled: false,
  btnType: "default",
}

export default SanButton
