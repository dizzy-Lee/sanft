import React,{ FC } from "react";
import classNames from "classnames";
export type MessageType = "info" | "success" | "danger" | "warning";

interface MessageProps {
  messageType?: MessageType;
  messageDetail?: string;
}

const MessageCard: FC<MessageProps> = (props: MessageProps) => {

  const { messageType, messageDetail } = props;
  
  const classes = classNames('message', {
    [`message-${messageType}`]: messageType
  })

  return (
    <div className={classes}>
      {messageDetail}
    </div>
  );
};

export default MessageCard;
