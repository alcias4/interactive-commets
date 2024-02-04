import { listOfComments } from "../type/type.json"

type setDate = React.Dispatch<React.SetStateAction<listOfComments>>
type data = listOfComments

export const logicScore = (data: data, setDate:setDate) =>{
  const handleAddtion = (id: number, replies:number | null) => {
    if (replies === null){
      data.comments[id].score += 1 
      setDate({currentUser: data.currentUser, comments: data.comments})
    } else if (replies >= 0 ){
      data.comments[replies].replies[id].score += 1
      setDate({currentUser: data.currentUser, comments: data.comments})
    }
  }


  const handleSubtraction = (id: number, replies:number | null) => {


    if (replies === null && data.comments[id].score > 0){
      data.comments[id].score -= 1 
      setDate({currentUser: data.currentUser, comments: data.comments})
    }else if (replies !== null && data.comments[replies].replies[id].score > 0){
      data.comments[replies].replies[id].score -= 1
      setDate({currentUser: data.currentUser, comments: data.comments})
    }
  }
  return {handleAddtion, handleSubtraction}
}

