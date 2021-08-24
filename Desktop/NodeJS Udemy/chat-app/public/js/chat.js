



const socket = io()


//server (emit) -> client (receive) -> acknowledgement -> server
//client (emit) -> server (receive) -> acknowledgement ->client

//Elemnts

const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTamplate = document.querySelector('#location-message-template').innerHTML
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML
//Options
// const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix:true })
// const {username, room} = (location.search, {ignoreQueryPrefix:true})
// const username = location.search.username
// const room = location.search.room
// const c = QueryString.parse(location.search, {ignoreQueryPrefix:true})

const c = location.search

const { username, room } = Qs.parse(c, { ignoreQueryPrefix: true })
// console.log(join)

const autoscroll = () => {

    //New message element
    const $newMessage = $messages.lastElementChild

    //height of the new message
    const newMessageStyles = getComputedStyle($newMessage)
    const newMessageMargin = parseInt(newMessageStyles.marginBottom)
    const newMessageHeight = $newMessage.offsetHeight + newMessageMargin

    // console.log(newMessageMargin)

    //visible height
    const visibleHeight = $messages.offsetHeight

    //height of messages container
    const containerHeight = $messages.scrollHeight

    // How far have i scrolled?
    const scrollOffset = $messages.scrollTop + visibleHeight

    if (containerHeight - newMessageHeight <= scrollOffset) {
        $messages.scrollTop = $messages.scrollHeight
    }
}


//render messages on html or browser
socket.on('message', (message) => {
    console.log(message)
    const html = Mustache.render(messageTemplate, {
        username: message.username,
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
    autoscroll()

})


//render location on html or browser
socket.on('locationMessage', (message) => {
    console.log(message)
    const html = Mustache.render(locationMessageTamplate, {
        username: message.username,
        url: message.url,
        createdAt: moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
    autoscroll()
})

socket.on('roomData', ({ room, users }) => {
    //show the active users in room
    // console.log(room)
    // console.log(users)
    const html = Mustache.render(sidebarTemplate, {
        room,
        users
    })
    document.querySelector('#sidebar').innerHTML = html
})


$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    //disable button
    $messageFormButton.setAttribute('disabled', 'disabled')


    // 1st method
    const message = e.target.elements.message.value
    // 2nd method 
    // const message = document.querySelector('input').value 

    socket.emit('sendMessage', message, (error) => {

        //enable button
        $messageFormButton.removeAttribute('disabled')

        //clear the input after send the message
        $messageFormInput.value = ''
        $messageFormInput.focus()

        if (error) {
            return console.log(error)
        }
        console.log('Message Delivered!')
    })
})



$sendLocationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser')

    }

    //disable location button
    $sendLocationButton.setAttribute('disabled', 'disabled')


    navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position)

        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            // enable send location button
            $sendLocationButton.removeAttribute('disabled')

            console.log('Location is shared')
        })
    })
})

socket.emit('join', { username, room }, (error) => {
    if (error) {
        alert(error)
        location.href = '/'
    }
})

