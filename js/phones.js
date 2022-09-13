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