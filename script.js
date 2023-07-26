const linkMenu= document.querySelectorAll('.navegacao a[href^="#"]');


function linkSuave(event){
    event.preventDefault();
    const href = event.currenttarget.getAttribute('href')
    const section = document.querySelector(href);
    const topp = section.offsetTop;

    window.scrollTo({
        top: topo,
        behavior:'smooth'
    })
}

linkMenu.forEach((item)=>{
    item.addEventListener('click',linkSuave)
})