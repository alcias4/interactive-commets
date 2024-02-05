import { listOfComments, repliesComment } from "../type/type.json"

type setDate = React.Dispatch<React.SetStateAction<listOfComments>>
type data = listOfComments


export const logicComments = (data: data, setDate:setDate) => {

  const handleChanceComment = (comments:string): void => {
    if (comments === ""){
      return 
    }
   
    const newComments = {
      id: Math.floor(Math.random() * 999999),
      content: comments,
      createdAt: `now`,
      score: 0,
      user: {
        image: { 
          png: data.currentUser.image.png,
          webp: data.currentUser.image.webp
        },
        username: data.currentUser.username
      },
      replies: []
    }
    setDate({currentUser: data.currentUser,comments: [...data.comments, newComments]})
  }


  const handleDelete = (id: number, replies:number | null) => {
    
    if (replies === null){
      const newComments = data.comments.filter((e)=> e.id !== id)
      setDate({currentUser: data.currentUser, comments: newComments})
    } else if (replies >= 0){
      const newComments = data.comments[replies].replies.filter(l => l.id !== id)
      data.comments[replies].replies =  newComments
      setDate({currentUser: data.currentUser, comments: data.comments})
    }
  
  }


  const handleReplies = (id: number,comment:string) => {
    if (comment === ""){
      return 
    }
    const newComments:repliesComment = {
      id: Math.floor(Math.random() * 999999),
      content: comment,
      createdAt: `now`,
      score: 0,
      user: {
        image: {
          png: data.currentUser.image.png,
          webp: data.currentUser.image.webp
        },
        username: data.currentUser.username
      },
      replyingTo: data.comments[id].user.username
    }
    data.comments[id].replies = [...data.comments[id].replies, newComments]
    setDate({currentUser: data.currentUser, comments: data.comments})
  }


  return {handleDelete,handleReplies, handleChanceComment}
}