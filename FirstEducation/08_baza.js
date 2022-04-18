// window.alert(1)

// window.confirm('Как тебя зовут')

const heading = document.getElementById('Hello')
// console.dir(heading.textContent)

// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('h2')
// console.dir(heading2)

const heading3 = heading2.nextElementSibling
const h2list = document.querySelectorAll('h2')
// console.log(h2list)

setTimeout (() => {
    addStylesTo(heading, 'JavaScript')
}, 1000)
setTimeout (() => {
    addStylesTo(heading2, 'Практикуйся', 'yellow')
}, 2000)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
    
})
setTimeout (() => {
    addStylesTo(heading3.children[0], 'И все получится!', 'aqua', '2 rem')
}, 3000)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'  
    node.style.display = 'block'
    node.style.width = '100%'

    // falsy: '', undefinde, null, 0, false, 
    if(fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => { 
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'

    }
    console.log('click')
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'red'
        heading2.style.backgroundColor = '#000'
    }
})