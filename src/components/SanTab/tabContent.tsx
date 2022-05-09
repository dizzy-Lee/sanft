import React, { FC, useEffect } from "react"
import classNames from "classnames"
import { createPortal } from "react-dom"

interface TabContent {
  title: string
  index?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const SanTabContent: FC<TabContent> = props => {
  const { title, index, className, style, children } = props
  const classes = classNames("san-tab-content", className)
  // let sanTabContentDetail
  // useEffect(() => {
  //   sanTabContentDetail = document.getElementById(
  //     "san-tab-content-detail"
  //   ) as Element
  // })
  const tabsPortal = () => {
    const sanTabContentDetail = document.getElementById(
      "san-tab-content-detail"
    ) as Element
    if (sanTabContentDetail) {
      return createPortal(children, sanTabContentDetail)
    }
  }
  return (
    <div>
      <div className={classes} style={style}>
        {title}
      </div>
      <div>{tabsPortal()}</div>
    </div>
  )
}

export default SanTabContent
