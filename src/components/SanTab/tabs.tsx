import classNames from "classnames";
import React, { FC } from "react";

export interface TabsProps {
  defaultIndex?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const SanTabs: FC<TabsProps> = (props) => {
  const {
    defaultIndex,
    className,
    style,
    children
  } = props

  const classes = classNames("san-tabs", className)
  return (
    <div className="san-tab-container">
      <title className={classes} style={style}>
        {children}
      </title>
      <div id="san-tab-content-detail"></div>
    </div>
  )
}

export default SanTabs