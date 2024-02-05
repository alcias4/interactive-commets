import { commentsUser, objetComment } from "../type/type.json"


interface Props {
  user:commentsUser
  update:boolean
  info: objetComment
}


export const Update: React.FC<Props> = ({update,user, info}) => {
  return <> 
    {
      update ? 
      <div className="card subCard replyCard">
        <img src={user.image.webp} alt="" />
        <textarea
        >{info.content}</textarea>
        <button
        >Update</button>
      </div>: null
    }
  </>
}