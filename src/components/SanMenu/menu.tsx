import React, {FC, createContext, useState} from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem"

type MenuMode = "horizontal" | "vertical";
type OnSelectCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: OnSelectCallback;
  children?: React.ReactNode;
}

interface IMenuContext {
  index?: number;
  onSelect?: OnSelectCallback;
}

export const MenuContext = createContext<IMenuContext>({index: 0})
const SanMenu: FC<MenuProps> = (props) => {
  const {className, mode, style, children, defaultIndex, onSelect} = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('san-menu', className, {
    'menu-vertical': mode === "vertical"
  })
  const handleClick = (index: number) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    } 
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'SanMenuItem') {
        return React.cloneElement(childElement, {
          index
        })
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    })
  }

  return(
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

SanMenu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default SanMenu