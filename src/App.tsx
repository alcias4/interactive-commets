import { useEffect ,useState } from "react"
import firstData from "./data/data.json"
import { Main } from "./components/Main"
import { listOfComments} from "./type/type.json"
import { Footer } from "./components/Footer"
import { logicScore } from "./logic/score.ts"
import { logicComments } from "./logic/comments.ts"


function App() {
  const [data, setDate] = useState<listOfComments>(()=>{
    if (window.localStorage.getItem('data')){
      return JSON.parse(window.localStorage.getItem('data') || "")
    }
    window.localStorage.setItem('data',JSON.stringify(firstData))
    return firstData
  })
  
  const {handleAddtion, handleSubtraction} = logicScore(data, setDate)
  const {handleDelete, handleReplies, handleChanceComment} = logicComments(data, setDate)

  useEffect(()=>{
    localStorage.setItem('data', JSON.stringify(data))
  },[data])



  return (
    <>
      <Main 
        data={data} 
        handleDelete={handleDelete} 
        handleReplies={handleReplies}
        handleAddtion={handleAddtion}
        handleSubtraction={handleSubtraction}
      /> 
      <Footer 
        user={data.currentUser} 
        handleChanceComment={handleChanceComment}
      /> 
    </>
  )
}

export default App
