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
        document.querySelector('.fa-bars').style.color = "#eb1537"
        document.querySelector('.logo').style.color = "#eb1537"
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
        document.querySelector('.fa-bars').style.color = "#fff"
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
    data.forEach((item)=>{
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
            productImageIm.setAttribute('src', item.mainImage)
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
        let productCotegory = document.createElement('span')
            productCotegory.className = "productCotegory"
            info.append(productCotegory)
            productCotegory.innerHTML = item.category
        let productPrice = document.createElement('div')
            productPrice.className = "productPrice"
            info.append(productPrice)
        let price = document.createElement('h3')
            productPrice.append(price)
            price.className = "price"
            price.innerHTML = `${item.price} сум`
        let credit = document.createElement('h3')
            productPrice.append(credit)
            credit.className = "credit"
            let makeNumber = (item.price).split(" ")
            let num = makeNumber[1]
            console.log(typeof num);
        let productName = document.createElement('p')
            productName.className = "productName"
            info.append(productName)
            productName.innerHTML = item.name
        
        let buy = document.createElement('div')
            buy.className = "buy"
            card.append(buy)
        let buyIt = document.createElement('div')
            buyIt.className = "buyIt"
            buyIt.innerHTML = "Купить"
            buy.append(buyIt)
        let buyIm = document.createElement('img')
            buyIm.setAttribute('src', "./img/statistics.svg")
            buy.append(buyIm)
    })
}
