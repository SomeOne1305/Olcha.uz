let phonesSection = document.querySelector('.phonesSection')
document.querySelector('.result').addEventListener('click', ()=>{
    document.querySelector('.languagesList').classList.toggle('visible')
})
document.querySelector('#search').addEventListener('click', ()=>{
    document.querySelector('.SearchResults').classList.toggle('visible')
})

document.querySelector('.left').addEventListener('click', ()=>{
    document.querySelectorAll('.slider').forEach(item =>{
        let width = item.clientWidth
        item.scrollLeft += width;
    })
})
fetch(' http://localhost:3004/phones')
.then(response => response.json())
.then(data => phones(data))
function phones(data) {
    for (let i = 0; i < data.length; i++) {
        
    }
}