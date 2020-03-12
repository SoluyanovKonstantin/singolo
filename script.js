const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 100,
      framesCount = 20;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    anchors.forEach((item)=> {
        item.classList.remove('checked');
    })
    item.classList.add('checked');
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      
      let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < scrollHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

let getSliderBtn = document.querySelectorAll('.slider__btn');

getSliderBtn.forEach(function(item) {
  item.addEventListener('click', function(evt) {
    document.querySelectorAll('.slider__element').forEach(function(itemJ){
      itemJ.classList.toggle('display-none');
    }) 
    document.querySelector('.slider').classList.toggle('slider--blue')
  })
})

document.querySelectorAll('.phone--first').forEach(function(item) {
  item.addEventListener('click', (evt)=>{
    document.querySelector('.screen-phone--first').classList.remove('display-none');
  })
})

document.querySelectorAll('.phone--second').forEach(function(item) {
  item.addEventListener('click', (evt)=>{
    document.querySelector('.screen-phone--second').classList.remove('display-none');
  })
})

document.querySelectorAll('.filter__btn').forEach( (item)=>{
  item.addEventListener('click', (evt)=>{
    document.querySelectorAll('.filter__btn').forEach( (item)=>{
      item.classList.remove('filter__btn--checked');
    })
    item.classList.add('filter__btn--checked');
    let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
    let arrRandom = [];
    for (let i = 0; i < 12; i++) {
      let numRandom = Math.ceil(Math.random() * arr.length-1);
      arrRandom.push( arr.splice(numRandom, 1) );
    }
    let i = 0;
    document.querySelectorAll('.album__image').forEach( (item) => {
      item.style.order = arrRandom[i];
      i++;
    })
  })
})

document.querySelectorAll('.album__image').forEach( (item) => {
  item.addEventListener('click', (evt) => {
    document.querySelectorAll('.album__image').forEach( (item) => {
      item.style.border = '0px solid #F06C64';
    })
    item.style.border = '5px solid #F06C64';
  })
})

document.querySelector('.form__submit').addEventListener('click', (evt) => {
  evt.preventDefault();
  let subject = document.querySelector('#subject').value;
  subject = subject === '' ? 'Без темы' : 'Тема: ' + subject;
  let description = document.querySelector('#description').value;
  description = description === '' ? 'Без описания' : 'Описание: ' + description;
  let message = 'Письмо отправлено \n'+subject+'\n'+description;
  alert(message);
})