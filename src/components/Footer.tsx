import { useState } from "react"
import "../style/footer.css"
import { commentsUser } from "../type/type.json"

interface Props {
  user: commentsUser
  handleChanceComment:(comments:string)=> void
}

export const Footer:React.FC<Props>  = ({user, handleChanceComment}) => {
  const [comments, setComments] = useState("");
  return (
    <footer>
      <img src={user.image.webp} alt="" />
      <textarea 
        onChange={(e)=>setComments(e.target.value)}
        placeholder="Add comment...">

      </textarea>
      <button
        onClick={()=> handleChanceComment(comments)}
      >SEND</button>
    </footer>
  )
}