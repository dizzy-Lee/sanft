import React, {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  ReactNode,
  useRef,
} from "react"
import classNames from "classnames"

type size = "normal" | "lg" | "sm"
interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  className?: string
  disabled?: boolean
  size?: size
  prefix?: string
  postfix?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const SanInput: FC<InputProps> = props => {
  const inputElement = useRef<HTMLInputElement>(null)

  const {
    disabled,
    size,
    prefix,
    postfix,
    className,
    placeholder,
    ...restProps
  } = props

  const PrefixBanner = () => {
    if (prefix) {
      return <div className="san-input-prefix">{prefix}</div>
    } else {
      return null
    }
  }
  const PostfixBanner = () => {
    if (postfix) {
      return <div className="san-input-prefix">{postfix}</div>
    } else {
      return null
    }
  }

  const handleFocusOnInput = () => {
    if (inputElement.current) {
      inputElement.current.focus()
    }
  }

  const classes = classNames("san-input", className, {
    [`ipt-${size}`]: size,
    [`ipt-${disabled}`]: disabled,
  })
  return (
    <div className={classes} onClick={handleFocusOnInput}>
      <PrefixBanner />
      <input ref={inputElement} placeholder={placeholder} {...restProps} />
      <PostfixBanner />
    </div>
  )
}

SanInput.defaultProps = {
  disabled: false,
  size: "normal",
}

export default SanInput
