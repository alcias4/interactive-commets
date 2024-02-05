import { listOfComments } from "../type/type.json"
import { Comments } from "./Comments"


interface Props {
  data: listOfComments
  handleDelete:(id:number,replies: number| null)=> void
  handleSubtraction:(id:number,replies: number| null)=> void
  handleReplies:(id: number,comment:string) => void
  handleAddtion:(id:number,replies: number| null)=> void
  
}

export const Main: React.FC<Props> = ({data, handleDelete,handleReplies, handleAddtion, handleSubtraction}) => {
  return (
    <ul className="content-comments">
      {
        data.comments.map((info,x) => (
          <Comments 
            info={info} 
            index={x} 
            user={data.currentUser} 
            handleDelete={handleDelete} 
            handleReplies={handleReplies} 
            handleAddtion={handleAddtion}
            handleSubtraction={handleSubtraction}
        
          />
        ))
      }
    </ul>
  )
}