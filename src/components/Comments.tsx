import { commentsUser, objetComment } from "../type/type.json"
import "../style/comments.css"
import { Card } from "./card"
import { FloatComments } from "./FloatComments"
import { useState } from "react"
import { Update } from "./Update"


interface Props {
  index: number
  info: objetComment
  user: commentsUser
  handleAddtion:(id:number, replies:number| null)=>void
  handleSubtraction:(id:number, replies:number| null)=>void
  handleDelete:(id:number, replies:number| null)=>void
  handleReplies:(id:number,comment:string)=>void
  handleEdit:(id:number, replies:number| null)=>void
}

export const Comments: React.FC<Props>  = ({info,index ,user,handleDelete, handleReplies, handleAddtion, handleSubtraction,handleEdit}) => {
  const [comment ,setComments] = useState(false);
  const [update ,setUpdate] = useState(false);
  const [text, setTex] = useState("")
  const handleReply  = () => {
    setComments(!comment)
    setUpdate(false)
  }

  const handleUpdate = (id:number , replies:number | null, comment:string) => {
    setUpdate(!update)
    setComments(false)
    handleEdit(id, replies )
    
  }
  return (
    <li key={index}  style={{listStyle: "none"}}>
      <div className="card">
        <button className="card-button">
          <img 
            onClick={()=> handleAddtion(index, null)}
            src="./images/icon-plus.svg" alt="icon button plus" />
          {info.score}
          <img 
          onClick={()=> handleSubtraction(index, null)}
          src="./images/icon-minus.svg" alt="icon button minus" />
        </button>
        <div className="card-info">
          <section className="user">
            <img src={info.user.image.webp} alt="img of user comments" />
            <strong>{info.user.username}</strong>
            {
            info.user.username === user.username ? <p className="you">you</p>:null
            }
            <span>{info.createdAt}</span>
            {
            info.user.username === user.username ? 
            <div className="edit">
              <button onClick={()=> handleDelete(info.id,null)}>
                <img src="./images/icon-delete.svg" alt="" />
                <p>Delete</p>
              </button>
              <button
                onClick={()=> handleUpdate(info.id,null, info.content)}
              >
              <img src="./images/icon-edit.svg" alt="" />
                <p>Edit</p>
              </button>
            </div>:
            <button 
              onClick={handleReply}
              className="reply">
              <img src="./images/icon-reply.svg" alt="icon of button" />
              <p>Reply</p>
            </button>
            }
          </section>
          <p className="contend">
            {info.content}
          </p>
        </div>
      </div>
      <div className="content-subCart">
        {
          info.replies.map((subInfo,subInd) => (
            <Card  
              info={subInfo} 
              index={index} 
              user={user} 
              handleDelete={handleDelete} 
              handleReply={handleReply} 
              handleAddtion={handleAddtion}
              handleSubtraction={handleSubtraction}
              subInd={subInd}
              handleUpdate={handleUpdate}
            />
          ))
        }
        <Update update={update} user={user} info={info}/>
        {
          comment ? 
          <FloatComments 
            user={user} 
            handleReplies={handleReplies} 
            index={index} 
            handleReply={handleReply}
          /> 
          : null
        }
        
      </div>
    </li>
  )
}