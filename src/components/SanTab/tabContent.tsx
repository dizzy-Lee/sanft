import React, { FC, useContext, useEffect } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";
import { TabContext } from "./tabs";

interface TabContent {
  title: string;
  index?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

let sanTabContentDetail = document.getElementById(
  "san-tab-content-detail"
) as Element;


const SanTabContent: FC<TabContent> = props => {
  const { title, index, className, style, children } = props;
  const classes = classNames("san-tab-content", className);
  const context = useContext(TabContext);
  const tabsPortal = () => {
    return createPortal(children, context.tabContentRef!);
    // return null
  };
  return (
    <div className={classes} style={style}>
      {title}
      {tabsPortal()}
    </div>
  );
};

export default SanTabContent;
