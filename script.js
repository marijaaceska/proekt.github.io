/*let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close'); */
let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

const photoGallery = document.querySelector(".box-cont");
const gallery = document.querySelector(".boxContainer");


const boxCont = document.querySelector(".box-container");
const contentItems = document.querySelector(".content");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

/*za events gallery*/
gallery.addEventListener("click", function (event2){
    if(event2.target.tagName.toLowerCase() == "button"){
        const item = event2.target.parentElement;
        const h3 = item.querySelector("h3").innerHTML;
        const readMoreCont = item.querySelector(".read-more").innerHTML;
        popup.querySelector("h3").innerHTML = h3;
        popup.querySelector(".popup-body").innerHTML = readMoreCont;

        popupBox();
    }
})


/*za gallery smestuvanje*/
photoGallery.addEventListener("click", function (event1){
    if(event1.target.tagName.toLowerCase() == "button"){
        const item = event1.target.parentElement;
        const h3 = item.querySelector("h3").innerHTML;
        const readMoreCont = item.querySelector(".read-more").innerHTML;
        popup.querySelector("h3").innerHTML = h3;
        popup.querySelector(".popup-body").innerHTML = readMoreCont;

        popupBox();
    }
})




/*za gallery*/

boxCont.addEventListener("click", function (event){
    if(event.target.tagName.toLowerCase() == "button"){
        const item = event.target.parentElement;
        const h3 = item.querySelector("h3").innerHTML;
        const readMoreCont = item.querySelector(".read-more").innerHTML;
        popup.querySelector("h3").innerHTML = h3;
        popup.querySelector(".popup-body").innerHTML = readMoreCont;

        popupBox();
    }
})

/*za naslovna*/

contentItems.addEventListener("click",function (events){
    if(events.target.tagName.toLowerCase() == "button"){
        const item = events.target.parentElement;
        const heading3 = item.querySelector("h3").innerHTML;
        const readMoreContent = item.querySelector(".read-more").innerHTML;
        popup.querySelector("h3").innerHTML = heading3;
        popup.querySelector(".popup-body").innerHTML = readMoreContent;

        popupBox();
    }

})

/*
popupCloseBtn.addEventListener("click", popupBox);*/
popupCloseIcon.addEventListener("click", popupBox);


popup.addEventListener("click", function (events){
    if(events.target == popup){
        popupBox();
    }
})



popup.addEventListener("click", function (event){
    if(event.target == popup){
        popupBox();
    }
})



popup.addEventListener("click", function (event1){
    if(event1.target == popup){
        popupBox();
    }
})

popup.addEventListener("click", function (event2){
    if(event2.target == popup){
        popupBox();
    }
})




function popupBox(){
    popup.classList.toggle("open");
}





window.onscroll = () =>{
    /*searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');*/
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    /*loginForm.classList.remove('active');*/
}

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});
/*
searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});
*/
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
}

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.things .things-container .box')];
    for (var i=currentItem; i< currentItem+3; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }
}
