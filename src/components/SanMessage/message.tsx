import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import MessageCard, { MessageType } from "./messageCard";

export interface Notice {
  text: string;
  key: string;
  type: MessageType;
}
export interface MessageApi {
  info: (text: string) => void;
  success: (text: string) => void;
  warning: (text: string) => void;
  error: (text: string) => void;
}

export interface Notice {
  text: string;
  key: string;
  type: MessageType;
}

let seed = 0;
const now = Date.now();
const getUuid = (): string => {
  const id = seed;
  seed += 1;
  return `MESSAGE_${now}_${id}`;
};

let add: (notice: Notice) => void;

const SanMessage: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const timeout = 3 * 1000;
  const maxCount = 10;

  const remove = (notice: Notice) => {
    const { key } = notice;

    setNotices(prevNotices =>
      prevNotices.filter(({ key: itemKey }) => key !== itemKey)
    );
  };

  add = (notice: Notice) => {
    setNotices(prevNotices => [...prevNotices, notice]);

    setTimeout(() => {
      remove(notice);
    }, timeout);
  };

  useEffect(() => {
    if (notices.length > maxCount) {
      const [firstNotice] = notices;
      remove(firstNotice);
    }
  }, [notices]);

  return (
    <div className="message-container">
      {notices.map(({ text, key, type }) => (
        <MessageCard messageType={type} messageDetail={text} key={key} />
      ))}
    </div>
  );
};

let el = document.querySelector("#message-wrapper");
if (!el) {
  el = document.createElement("div");
  el.className = "message-wrapper";
  el.id = "message-wrapper";
  document.body.append(el);
}
const root = createRoot(el);
root.render(<SanMessage />);

const message: MessageApi = {
  info: text => {
    add({
      text,
      key: getUuid(),
      type: "info",
    });
  },
  success: text => {
    add({
      text,
      key: getUuid(),
      type: "success",
    });
  },
  warning: text => {
    add({
      text,
      key: getUuid(),
      type: "warning",
    });
  },
  error: text => {
    add({
      text,
      key: getUuid(),
      type: "danger",
    });
  },
};

export default message;
