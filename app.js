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

// document.querySelector('.left').addEventListener('click', ()=>{
//     document.querySelectorAll('.slider').forEach(item =>{
//         let width = item.clientWidth
//         item.scrollLeft += width;
//     })
// })
fetch('http://localhost:3004/phones')
.then(response => response.json())
.then(data => card(data))

function card(data){
    data.forEach((item) =>{
        let link = document.createElement('a');
            phonesSection.append(link);

        let card = document.createElement('div')
            card.className = "card"
            link.append(card)

        let productImage = document.createElement('div')
            productImage.className = "productImage"
            card.append(productImage)
        let productImageIm = document.createElement('img')
            productImage.append(productImageIm)
        let exDetail = document.createElement('div')
            exDetail.className = "exDetail"
            productImage.append(exDetail)

        let like = document.createElement('div')
            like.className = "like"
            exDetail.append(like)
            let like_icon = document.createElement('i')
            like_icon.className = "fa-regular fa-heart"
            like.append(like_icon)

        let share = document.createElement('div')
            share.className = "share"
            exDetail.append(share)
            let share_icon = document.createElement('i')
            share_icon.className = "fa-regular fa-share"
            share.append(share_icon)
        
        let info = document.createElement('div')
            info.className = "info"
            card.append(info)
    })
}
