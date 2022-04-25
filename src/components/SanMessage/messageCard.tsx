import React, { FC, useEffect } from "react";
import classNames from "classnames";
export type MessageType = "info" | "success" | "danger" | "warning";

interface MessageProps {
  messageType?: MessageType;
  messageDetail?: string;
}

const MessageCard: FC<MessageProps> = (props: MessageProps) => {
  const { messageType, messageDetail } = props;

  const classes = classNames("message", {
    [`message-${messageType}`]: messageType,
  });

  useEffect(() => {
    const message = document.getElementsByClassName(classes)[
      document.getElementsByClassName(classes).length - 1
    ] as HTMLElement;
    if (message) {
      message.style.top = "10rem";
      message.style.opacity = '0'
      const timer = setTimeout(() => {
        message.style.top = "0rem";
        message.style.opacity = '100'
      }, 0);
      return () => {
        clearTimeout(timer);
      };
    }
  },[classes]);

  return <div className={classes}>{messageDetail}</div>;
};

export default MessageCard;
