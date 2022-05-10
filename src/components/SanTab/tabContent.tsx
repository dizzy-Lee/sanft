import React, { FC, useContext } from "react"
import classNames from "classnames"
import { createPortal } from "react-dom"
import { TabContext } from "./tabs"

export interface TabContentProps {
  title: string
  index?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const SanTabContent: FC<TabContentProps> = props => {
  const { title, index, className, style, children } = props
  const context = useContext(TabContext)
  const classes = classNames("san-tab-content", className, {
    'active-tab-content': context.selectedIndex === index
  })
  const tabsPortal = () => {
    if (context.tabContentEle && context.selectedIndex === index) {
      return createPortal(children, context.tabContentEle)
    } else {
      return null
    }
  }
  const handleSelect = () => {
    if (context.onSelect && typeof index === 'string') {
      context.onSelect(index)
    }
  }
  return (
    <div
      className={classes}
      style={style}
      onClick={handleSelect}
    >
      {title}
      {tabsPortal()}
    </div>
  )
}

SanTabContent.displayName = "SanTabContent"
export default SanTabContent
