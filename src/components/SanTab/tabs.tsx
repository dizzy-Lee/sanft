import classNames from "classnames"
import React, { createContext, FC, useEffect, useState } from "react"
import { TabContentProps } from "./tabContent"
export interface TabsProps {
  defaultIndex?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

type TabContentDetail = HTMLElement | undefined | null
interface ITabContext {
  selectedIndex?: string
  onSelect?: (index:string) => void
  tabContentEle?: TabContentDetail
}

export const TabContext = createContext<ITabContext>({
  selectedIndex: "0",
})
const SanTabs: FC<TabsProps> = props => {
  const { defaultIndex, className, style, children } = props
  const [sanTabContentDetail, setTabContentDetail] =
    useState<TabContentDetail>(null)
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex)
  useEffect(() => {
    setTabContentDetail(document.getElementById("san-tab-content-detail"))
  }, [])
  const classes = classNames("san-tabs", className)
  const handleSelect = (index: string) => {
    setSelectedIndex(index)
  }
  const passedContext: ITabContext = {
    selectedIndex,
    tabContentEle: sanTabContentDetail,
    onSelect: handleSelect,
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<TabContentProps>
      if (childElement.type.displayName === "SanTabContent") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        })
      } else {
        console.error("警告: SanTabs的子元素必须为SanTabContent")
      }
    })
  }

  return (
    <div className="san-tab-container">
      <title className={classes} style={style}>
        <TabContext.Provider value={passedContext}>
          {renderChildren()}
        </TabContext.Provider>
      </title>
      <div id="san-tab-content-detail"></div>
    </div>
  )
}

SanTabs.defaultProps = {
  defaultIndex: "0",
}
export default SanTabs
