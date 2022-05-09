import classNames from "classnames";
import React, { createContext, FC, Ref, useCallback, useEffect, useRef, useState } from "react";
export interface TabsProps {
  defaultIndex?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

interface ITabContext {
  index?: string
  onSelect?: Function
  tabContentRef?: HTMLElement
}

export const TabContext = createContext<ITabContext>({})
const SanTabs: FC<TabsProps> = (props) => {
  const {
    defaultIndex,
    className,
    style,
    children
  } = props
  // const sanTabContentDetail = useRef(null)
  const [sanTabContentDetail, setTabContentDetail] = useState(document.body)
  useEffect(() => {
    setTabContentDetail(document.getElementById('san-tab-content-detail')!)
  }, [])
  const classes = classNames("san-tabs", className)
  const passedContext: ITabContext = {
    index: '0',
    tabContentRef: sanTabContentDetail
  }
  return (
    <div className="san-tab-container">
      <title className={classes} style={style}>
        <TabContext.Provider value={passedContext}>
        {children}
        </TabContext.Provider>
      </title>
      <div id="san-tab-content-detail"></div>
    </div>
  )
}

export default SanTabs