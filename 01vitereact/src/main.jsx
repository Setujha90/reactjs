import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// function MyApp(){
//     return (
//         <div>
//             <h1>Custom App | chai</h1>
//         </div>
//     )
// }

// const ReactElement = {   //cant work as we define custom render for it
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit google</a>
// )



//const anotherUser = "chai aur react"

/*const reactElement = React.createElement( //instead of using <MyApp /> or <App />we can used it like custom react library where we convert jsx text into tree like dom and finally render it to the page ,here React.createElement are the way to create react/tree like element by bable in js

    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement  //evaluted expression
)*/

ReactDOM.createRoot(document.getElementById('root')).render(
 
    //reactElement
    <App />
)