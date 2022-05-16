import React, {
  FC,
  FunctionComponentElement,
  ReactNode,
  useContext,
  useState,
} from "react"
import classNames from "classnames"
import { CSSTransition } from "react-transition-group"

import { MenuContext } from "./menu"
import { MenuItemProps } from "./menuItem"

export interface SubMenuProps {
  index?: string
  title: string
  className?: string
  children?: ReactNode
}

const SanSubMenu: FC<SubMenuProps> = props => {
  const [menuOpen, setOpen] = useState(false)
  const context = useContext(MenuContext)
  const { index, title, className, children } = props
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  })
  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(true)
  }
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
  }
  const renderChildren = () => {
    const classes = classNames("san-submenu", {
      "menu-opened": menuOpen,
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === "SanMenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        })
      } else {
        console.log("警告: SanSubMenu的子元素必须为SanMenuItem")
      }
    })
    return (
      <CSSTransition
        in={menuOpen}
        timeout={300}
        classNames="zoom-in-top"
        appear
      >
        <ul className={classes}>{childrenComponent}</ul>
      </CSSTransition>
      )
  }
  return (
    <li
      key={index}
      className={classes}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  )
}

SanSubMenu.displayName = "SanSubMenu"
export default SanSubMenu
