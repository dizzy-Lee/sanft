import React from "react"
import { createRoot } from "react-dom/client"
import MessageCard, { MessageType } from "./messageCard"

export interface MessageApi {
  info: (text: string) => void
  success: (text: string) => void
  warning: (text: string) => void
  error: (text: string) => void
}

export interface Notice {
  text: string
  key: string
  type: MessageType
}

export const SanMessage: React.FC = () => {
  return (
    <div>
      <MessageCard
        messageDetail="this is a info"
        messageTitle="title"
        messageType="info"
      />
    </div>
  )
}

let el = document.querySelector("#message-wrapper")
if (!el) {
  el = document.createElement("div")
  el.className = "message-wrapper"
  el.id = "message-wrapper"
  document.body.append(el)
}
const root = createRoot(el)
root.render(<SanMessage />)

// const api: MessageApi = {
//   info: (text) => {
//     add({
//       text,
//       key: getUuid(),
//       type: 'info'
//     })
//   },
//   success: (text) => {
//     add({
//       text,
//       key: getUuid(),
//       type: 'success'
//     })
//   },
//   warning: (text) => {
//     add({
//       text,
//       key: getUuid(),
//       type: 'warning'
//     })
//   },
//   error: (text) => {
//     add({
//       text,
//       key: getUuid(),
//       type: 'danger'
//     })
//   }
// }

// export default api
