import React, { FC, createContext, useState } from "react"
import classNames from "classnames"
import { MenuItemProps } from "./menuItem"

type MenuMode = "horizontal" | "vertical"
type OnSelectCallback = (selectedIndex: string) => void

export interface MenuProps {
  defaultIndex?: string
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: OnSelectCallback
  children?: React.ReactNode
}

interface IMenuContext {
  index?: string
  onSelect?: OnSelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })
const SanMenu: FC<MenuProps> = props => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames("san-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  })
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === "SanMenuItem" || displayName === "SanSubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        })
      } else {
        console.error(
          "警告: SanMenu的子元素必须为SanMenuItem"
        )
      }
    })
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

SanMenu.defaultProps = {
  defaultIndex: '0',
  mode: "horizontal",
}

export default SanMenu
