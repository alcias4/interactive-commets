import {  commentsUser, subObjetComment } from "../type/type.json"

interface Props {
  subInd:number
  index: number
  info: subObjetComment
  user: commentsUser
  handleDelete: (id: number, replies:number | null) => void
  handleReply:()=>void
  handleAddtion: (id: number, replies:number | null) => void
  handleSubtraction: (id: number, replies:number | null) => void
  handleUpdate:()=> void
}

export const Card:React.FC<Props> = ({ info,index ,user, handleDelete,handleReply,handleAddtion, handleSubtraction, subInd, handleUpdate}) => {
  
  return (   
    <div key={info.id + 100} className="card subCard">
      <button className="card-button">
        <img 
        onClick={()=> handleAddtion(subInd, index)}
        src="./images/icon-plus.svg" alt="icon button plus" />
        {info.score}
        <img 
        onClick={()=> handleSubtraction(subInd, index)}
        src="./images/icon-minus.svg" alt="icon button minus" />
      </button>
      <div className="card-info">
        <section className="user">
          <img src={info.user.image.webp} alt="img of user comments" />
          <strong>{info.user.username}</strong>
          {
            info.user.username === user.username ? <p className="you">you</p>:null
          }
          <span>{info.createdAt} </span>
          {
            info.user.username === user.username ? 
            <div className="edit">
              <button onClick={()=>handleDelete(info.id,index)}>
                <img src="./images/icon-delete.svg" alt="" />
                <span>Delete</span>
              </button>
              <button onClick={handleUpdate} >
              <img 
                src="./images/icon-edit.svg" alt="" />
                <span>Edit</span>
              </button>
            </div>:
            <button 
              onClick={handleReply}
              className="reply">
              <img src="./images/icon-reply.svg" alt="icon of button" />
              <span>Reply</span>
            </button>
          }
        </section>
        <p className="contend">
          {info.content}
        </p>
      </div>
    </div>
  )
}