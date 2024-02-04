import { useState } from "react"
import "../style/comments.css"
import { commentsUser } from "../type/type.json"

interface Props {
  user: commentsUser
  index: number
  handleReplies:(id:number, comment:string)=> void
  handleReply:()=>void
}

export const FloatComments: React.FC<Props> =  ({user, handleReplies, index, handleReply}) => {
  const [text, setTex] = useState("")

  const handleOnClick = () => {
    handleReplies(index,text)
    setTex("")
    handleReply()
  }

  return <div className="card subCard replyCard">
    <img src={user.image.webp} alt="" />
    <textarea
    onChange={(e)=> setTex(e.target.value)}
    ></textarea>
    <button
    onClick={()=> handleOnClick()}
    >Reply</button>
  </div>
}