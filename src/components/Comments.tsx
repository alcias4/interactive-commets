import { commentsUser, objetComment } from "../type/type.json"
import "../style/comments.css"
import { Card } from "./card"
import { FloatComments } from "./FloatComments"
import { useState } from "react"


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
  const handleReply  = () => {
    setComments(!comment)
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
                onClick={()=> {handleEdit(index, null)}}
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
              handleEdit={handleEdit}
            />
          ))
        }
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