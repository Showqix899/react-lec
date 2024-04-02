const mainContainer=document.querySelector("#root");
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    chilldren:"google"

}
function customRender(reactElement,mainContainer){
    // const domelement=document.createElement(reactElement.type);
    // domelement.innerHTML=reactElement.chilldren;
    // domelement.setAttribute('href',reactElement.props.href)
    // domelement.setAttribute('target',reactElement.props.target)
    // mainContainer.appendChild(domelement)
    const domelement=document.createElement(reactElement.type);
    domelement.innerHTML=reactElement.chilldren;
    for(const prop in reactElement.props){
        if(prop ==='chilldren') continue;
        domelement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domelement);

}
customRender(reactElement,mainContainer);