import React, {FC, createContext} from "react";
import classNames from "classnames";

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
  index: number;
  onSelect?: OnSelectCallback;
}

export const MenuContext = createContext<IMenuContext>({index: 0})
const SanMenu: FC<MenuProps> = (props) => {
  const {className, mode, style, children, defaultIndex} = props
  const classes = classNames('san-menu', className, {
    'menu-vertical': mode === "vertical"
  })
  return(
    <ul className={classes} style={style}>
      {children}
    </ul>
  )
}

SanMenu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default SanMenu