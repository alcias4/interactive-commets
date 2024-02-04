
export interface listOfComments{
  currentUser: commentsUser
  comments: objetComment []
}


export interface objetComment {
  "id": number
  "content": string
  "createdAt": string
  "score": number
  "user": commentsUser
  "replies": repliesComment[] | []
}



export interface subObjetComment {
  "id": number
  "content": string
  "createdAt": string
  "score": number
  "user": commentsUser
}

export interface commentsUser {
  image: image,
  username: string
}

export interface image {
  png: string
  webp: string
}

export interface repliesComment {
  id: number,
  content: string
  createdAt: string
  score: number,
  replyingTo: string
  user: listOfCommentsUser
}