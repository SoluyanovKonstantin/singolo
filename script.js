function switchChecked(currentAnchor) {
  let index = 1;
  anchors.forEach( (item)=>{
    if (index === currentAnchor) {
      item.classList.add('checked');
    } else {
      item.classList.remove('checked');
    }
    index++;
  } )
}

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
let names = [];
let currentAnchor = 1;

anchors.forEach(function(item) {
  names.push(item.href.substring(item.href.indexOf('#')));
  item.addEventListener('click', function(e) {
    let i = 1;
    anchors.forEach((item)=> {
        item.index = i;
        i++;
    })
    currentAnchor = item.index;
    switchChecked(currentAnchor);
  });
});

let coordAnchors = [];

names.forEach( (item)=>{
  coordAnchors.push(document.querySelector(item).getBoundingClientRect().top + pageYOffset);
})

let getSliderBtn = document.querySelectorAll('.slider__btn');

getSliderBtn.forEach(function(item) {
  item.addEventListener('click', function(evt) {
    this.blur();
    let flag = item.classList.contains('slider__btn--left');
    document.querySelectorAll('.slider__element').forEach(function(item){
      if (item.classList.contains('display-none--left') || item.classList.contains('display-none--right') ||  item.classList.contains('display-none')) {
        item.classList.remove('display-none');
        item.classList.remove('display-none--left');
        item.classList.remove('display-none--right');
        if (flag) item.style.animation = 'from-left 0.5s';
        else item.style.animation = 'from-right 0.5s';

      } else {
        if (flag) {
           item.classList.add('display-none--right');
           item.style.animation = 'display-none--right 0.5s';
        }
        else {
          item.classList.add('display-none--left');
          item.style.animation = 'display-none--left 0.5s';
        }
      }
    }) 
  })
})

document.querySelectorAll('.phone--first .phone, .phone--first .screen-phone').forEach(function(item) {
  item.addEventListener('click', (evt)=>{
    document.querySelector('.screen-phone--first').classList.toggle('display-none');
  })
})

document.querySelectorAll('.phone--second .phone, .phone--second .screen-phone').forEach(function(item) {
  item.addEventListener('click', (evt)=>{
    document.querySelector('.screen-phone--second').classList.toggle('display-none');
  })
})
let oldArray = [0,1,2,3,4,5,6,7,8,9,10,11];
document.querySelectorAll('.filter__btn').forEach( (item)=>{
  item.addEventListener('click', (evt)=>{
    document.querySelectorAll('.filter__btn').forEach( (item)=>{
      item.classList.remove('filter__btn--checked');
    })
    item.classList.add('filter__btn--checked');
    let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
    let arrRandom = [];
    let bool = true;
    while(bool) {
      bool = false;
      for (let i = 0; i < 12; i++) {
        let numRandom;
        numRandom = Math.ceil(Math.random() * arr.length-1);
        if (arr[numRandom] === oldArray[i]) {
          if (numRandom === 0) {
            if (arr.length === 1) bool = true;
            else numRandom++;
          }
          else numRandom--;
        }
        arrRandom.push( arr.splice(numRandom, 1)[0] );
      }
    }
    oldArray = arrRandom;
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
      document.querySelector('.message__theme').innerText = subject;
      document.querySelector('.message__description').innerText = description;
      document.querySelector('.message').style.display = 'block';
      setTimeout( ()=> {
        document.querySelector('.message').style.display = 'none';
        document.querySelector('#name').value = ''; 
        document.querySelector('#email').value = '';
        document.querySelector('#subject').value = '';
        document.querySelector('#description').value = '';
      }, 2850 )
    }
  }
})

document.querySelector('.sandwich').addEventListener('click', (evt)=>{
  let nav_bar = document.querySelector('.nav-bar');
  let sandwich = document.querySelector('.sandwich');

  nav_bar.style.display = nav_bar.style.display != 'block' ? 'block' : 'none';
  sandwich.style.transform = sandwich.style.transform != 'rotate(90deg)' ? 'rotate(90deg)' : 'rotate(0deg)';
})

addEventListener('scroll', (evt)=>{
  if (currentAnchor != 1) {
    if (pageYOffset >= coordAnchors[0] && pageYOffset< coordAnchors[0]+100) {
      currentAnchor = 1;
      switchChecked(currentAnchor);    
    }
  }
  if (currentAnchor != 2) {
    if (pageYOffset >= coordAnchors[1] && pageYOffset< coordAnchors[1]+100) {
      currentAnchor = 2
      switchChecked(currentAnchor);    
    }
  }
  if (currentAnchor != 3) {
    if (pageYOffset >= coordAnchors[2] && pageYOffset< coordAnchors[2]+100) {
      currentAnchor = 3;
      switchChecked(currentAnchor);    
    }
  } 
  if (currentAnchor != 4) {
    if (pageYOffset >= coordAnchors[3] && pageYOffset< coordAnchors[3]+100) {
      currentAnchor = 4;
      switchChecked(currentAnchor);    
    }
  }
  if (currentAnchor != 5) {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    if (pageYOffset >= coordAnchors[4] && pageYOffset< coordAnchors[4]+100 || pageYOffset + document.documentElement.clientHeight === scrollHeight) {
      currentAnchor = 5;
      switchChecked(currentAnchor);    
    }
  }
})

if (currentAnchor != 1) {
    if (pageYOffset >= coordAnchors[0] && pageYOffset< coordAnchors[1]) {
      currentAnchor = 1;
      switchChecked(currentAnchor);    
    }
  }
  if (currentAnchor != 2) {
    if (pageYOffset >= coordAnchors[1] && pageYOffset< coordAnchors[2]) {
      currentAnchor = 2
      switchChecked(currentAnchor);    
    }
  }
  if (currentAnchor != 3) {
    if (pageYOffset >= coordAnchors[2] && pageYOffset< coordAnchors[3]) {
      currentAnchor = 3;
      switchChecked(currentAnchor);    
    }
  } 
  if (currentAnchor != 4) {
    if (pageYOffset >= coordAnchors[3] && pageYOffset< coordAnchors[4]) {
      currentAnchor = 4;
      switchChecked(currentAnchor);    
    }
  }
  if (currentAnchor != 5) {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    if (pageYOffset >= coordAnchors[4] && pageYOffset< coordAnchors[5] || pageYOffset + document.documentElement.clientHeight === scrollHeight) {
      currentAnchor = 5;
      switchChecked(currentAnchor);    
    }
  }