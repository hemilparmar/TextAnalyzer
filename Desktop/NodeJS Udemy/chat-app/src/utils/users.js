
//users will be stored here
const users = []


const addUser = ({id, username, room})=>{
    //Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if(!username || !room){
        return {
            error: 'username and room are required'
        }
    }
    //check for existing user
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })

    //validate username
    if(existingUser){
        return{
            error:'Username already taken!'
        }
    }

    //store user
    const user = {id, username, room}
    users.push(user)
    return {user}
}


const removeUser = ((id)=>{
    const index = users.findIndex((user)=> user.id===id)
    if(index !==-1){
        return users.splice(index, 1)[0]

    }
    
})

const getUser = (id) =>{
    return users.find((user)=>user.id ===id)

}

const getUsersInRoom = (room)=>{
    room = room.trim().toLowerCase()
    return users.filter((user)=>user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

// addUser({
//     id:22,
//     username:'   Hemil  ',
//     room:'   Ahmedabad   '
// })

// addUser({
//     id:42,
//     username:'   mike  ',
//     room:'   Ahmedabad   '
// })

// addUser({
//     id:32,
//     username:'   Hemil  ',
//     room:'   HMT   '
// })

// // console.log(users)

// // const removedUser = removeUser(22)
// // console.log(removedUser)
// // console.log(users)
// // const user = getUser(32)
// // console.log(user)
// // console.log(users)

// console.log(users)
// const userList = getUsersInRoom('ahmedabad')
// console.log(userList)