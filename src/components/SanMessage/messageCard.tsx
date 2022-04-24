export type MessageType = 'info' | 'success' | 'danger' | 'warning'

interface MessageProps {
  messageType?: MessageType
  messageTitle?: string
  messageDetail?: string
}

const MessageCard: React.FC <MessageProps> = (props) => {
  const { messageType, messageTitle, messageDetail } = props
  return (
    <div>
      <h3>{messageTitle}</h3>
      <p>{messageDetail}</p>
    </div>
  )
}

export default MessageCard
