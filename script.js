const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {

    anchors.forEach((item)=> {
        item.classList.remove('checked');
    })
    item.classList.add('checked');    
    
  });
});

let getSliderBtn = document.querySelectorAll('.slider__btn');

getSliderBtn.forEach(function(item) {
  item.addEventListener('click', function(evt) {
    this.blur();
    let flag = item.classList.contains('slider__btn--left');
    document.querySelectorAll('.slider__element').forEach(function(item){
      if (item.classList.contains('display-none--left') || item.classList.contains('display-none--right')) {
        item.classList.remove('display-none--left');
        item.classList.remove('display-none--right');
      } else {
        if (flag) item.classList.add('display-none--right');
        else item.classList.add('display-none--left');
      }
    }) 
  })
})

document.querySelectorAll('.phone--first').forEach(function(item) {
  item.addEventListener('click', (evt)=>{
    document.querySelector('.screen-phone--first').classList.toggle('display-none');
  })
})

document.querySelectorAll('.phone--second').forEach(function(item) {
  item.addEventListener('click', (evt)=>{
    document.querySelector('.screen-phone--second').classList.toggle('display-none');
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
      item.style['box-shadow'] = '0 0 0px #F06C64';
      item.style['cursor'] = 'pointer';
    })
    item.style['box-shadow'] = '0px 0px 0px 5px #F06C64';
    item.style['cursor'] = 'default';
  })
})

document.querySelector('.form__submit').addEventListener('click', (evt) => {
  if ( document.querySelector('#name').checkValidity() ) {
    if ( document.querySelector('#email').checkValidity() ) {
      evt.preventDefault();
      let subject = document.querySelector('#subject').value;
      subject = subject === '' ? 'Без темы' : 'Тема: ' + subject;
      let description = document.querySelector('#description').value;
      description = description === '' ? 'Без описания' : 'Описание: ' + description;
      let message = 'Письмо отправлено \n'+subject+'\n'+description;
      alert(message);
    }
  }
})