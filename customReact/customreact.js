function customRender(reactelement,container){
    /*const domelement =document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children
    domelement.setAttribute('href',reactelement.props.href)
    domelement.setAttribute('target',reactelement.props.target)
    //it is difficult to setAttribute each time so we use loop to do this

    container.appendChild(domelement)*/

    const domelement =document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children
    for(const prop in reactelement.props){
        if(prop==='children') continue
        domelement.setAttribute(prop,reactelement.props[prop])
    }
    container.appendChild(domelement)
}

const reactelement={
    type:'a',
    props:{
        href:'https://www.google.com', 
        target:'_blank'
},
    children:'Click me to visit Google'
}
const maincontainer=document.querySelector('#root')

customRender(reactelement,maincontainer)

