let phonesSection = document.querySelector('.phonesSection')
let MainNav = document.querySelector('.MainNav')
let navDetails = document.querySelectorAll('.BeforeShopping')
window.addEventListener('scroll', ()=>{
    if (scrollY > 440) {
        MainNav.classList.add('fixed')
        document.querySelector('.user path').style.fill = "#000"
        document.querySelectorAll('.statistic rect').forEach(item=>{
            item.style.fill = "#000"
        })
        document.querySelector('.heart path').style.stroke = "#000"
        document.querySelector('.cart path').style.stroke = "#000"
        navDetails.forEach(item =>{
            item.style.color = "#000"
        })
        document.querySelector('.searchMenu').style.borderColor = "#000"
        document.querySelector('.catalog').style.borderColor = "#000"
        document.querySelector('.catalog').style.color = "#000"
        document.querySelector('.logo').style.color = "#000"
    } else {
        MainNav.classList.remove('fixed')
        document.querySelector('.user path').style.fill = "#fff"
        document.querySelectorAll('.statistic rect').forEach(item=>{
            item.style.fill = "#fff"
        })
        document.querySelector('.heart path').style.stroke = "#fff"
        document.querySelector('.cart path').style.stroke = "#fff"
        navDetails.forEach(item =>{
            item.style.color = "#fff"
        })
        document.querySelector('.searchMenu').style.borderColor = "#fff"
        document.querySelector('.catalog').style.borderColor = "#fff"
        document.querySelector('.catalog').style.color = "#fff"
        document.querySelector('.logo').style.color = "#fff"
    }
})

document.querySelector('.result').addEventListener('click', ()=>{
    document.querySelector('.languagesList').classList.toggle('visible')
})
document.querySelector('#search').addEventListener('click', ()=>{
    document.querySelector('.SearchResults').classList.toggle('visible')
})
document.querySelector('.copy').addEventListener('click', ()=>{
    document.querySelector('.copy').classList.toggle('active')
})

fetch(`http://localhost:3004/phones/${localStorage.getItem('id')}`)
.then(response => response.json())
.then(data => setItems(data))
function setItems(data) {
    document.querySelector('title').innerHTML = `Купить ${localStorage.getItem('category')} ${localStorage.getItem('product')}`
    document.querySelector('.main').setAttribute('src', data.mainImage)
    document.querySelector('.back').setAttribute('src', data.backView)
    document.querySelector('.forward').setAttribute('src', data.forwardView)
    document.querySelector('.edge').setAttribute('src', data.edgeView)
    document.querySelector('.price').innerHTML = `${data.price} сум`
    document.querySelector('.information').innerHTML = data.info
    document.querySelector('.color').innerHTML = data.productColor
    document.querySelector('.cotegoryProduct').innerHTML = data.category
    document.querySelector('.nameOfphone').innerHTML = data.name
    document.querySelector('.hoverMagnifierMirror').style.backgroundImage = `url(${data.mainImage})`

    let image = document.querySelector('.hoverMagnifierMirror')
    image.addEventListener('mousemove', (e)=>{
      let x = e.clientX
      let y = e.clientY 
      image.style.backgroundSize = "130%"
      image.style.backgroundPosition = `${x * 100 / image.clientHeight}% ${y * 100 / image.clientWidth}%`
      console.log(`y:${y}`);
    })
    image.addEventListener('mouseout', (e)=>{
      image.style.backgroundSize = "contain"
      image.style.backgroundPosition = "center"
    })
}