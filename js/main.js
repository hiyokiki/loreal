
/*youngate*/
const chooseLang = document.querySelectorAll('.choose_lang li');
const tapMenu = document.querySelectorAll('.tap_menu li');
const tapContent = document.querySelectorAll('.brand_item_wrap');
const externalLink = document.querySelectorAll('.external_link');

// slide
const slideShow = document.querySelector('.slide_show');
const slideContainer = document.querySelector('.slide_container');
const slideItem = document.querySelectorAll('.slide_container .slide');  
const esgSlideLength = slideItem.length;
let showSlide = 0;
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

console.log(slideShow);
console.log(slideContainer);
console.log(slideItem);
console.log(prevBtn);
console.log(nextBtn);

for(item of chooseLang){
  item.addEventListener('click',function(e){
    e.preventDefault();
    for(item of chooseLang){
      item.classList.remove('active')
    }
    this.classList.add('active');
  });
}

for(item of externalLink){
  item.addEventListener('click',function(e){
    e.preventDefault();
  });
}

for(item of tapMenu){
  item.addEventListener('click',function(e){
    // 기본 이동 막기
    e.preventDefault();
    for(item of tapMenu){
      item.classList.remove('active')
    }
    this.classList.add('active');
    for(item of tapContent){
      // 모든 탭 컨텐츠 숨기기
      item.classList.remove('active');
    }
    let targetID = e.target.getAttribute('href');
    // 클릭된 요소의 id 값 받아오기
    console.log(targetID);
    // id값 활용해 탭 컨텐츠에 클래스 추가하기
    document.querySelector(targetID).classList.add('active');
  });
}



//버튼을 누르면 할 일
//일단 한 칸 옮겨보자

// slideContainer.style.left = 0 + '%';
// slideContainer.style.left = 100 + '%';
// slideContainer.style.left = -200 + '%';
nextBtn.addEventListener('click',function(){
  let nextIdx = (showSlide + 1)
  console.log(nextIdx);
  slideContainer.style.left = -(nextIdx * 100) + '%';
  showSlide = nextIdx;
  if(showSlide == esgSlideLength -1){
    nextBtn.style.display = 'none';
  }else{
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'block';
  }
});

prevBtn.addEventListener('click',function(){
  let prevIdx = (showSlide - 1);
  console.log(prevIdx);
  slideContainer.style.left = -(prevIdx * 100) + '%';
  showSlide = prevIdx;
  if(showSlide == 0){
    prevBtn.style.display = 'none';
  }else{
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'block';
  }
});

function moveSlide(){
  
}
























/* jinuk */


/* careers */
const stories = document.querySelectorAll('.story');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const thumbsWrapper = document.querySelector('.story_thumbs'); 
const thumbs = document.querySelector('.story_thumbs'); 
const slides = thumbs.querySelectorAll('li');
const slideWidth = 313;
const slideGap = 20;

let thumbsIndex = 0;

let currentIndex = 0; 

function updateActive(index) {
  stories.forEach(story => story.classList.remove('active'));
  stories[index].classList.add('active');

  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');

  currentIndex = index;
}

rightBtn.addEventListener('click', function () {
  const nextIndex = (currentIndex + 1) % stories.length;
  updateActive(nextIndex);
});

leftBtn.addEventListener('click', function () {
  const prevIndex = (currentIndex - 1 + stories.length) % stories.length;
  updateActive(prevIndex);
});

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    updateActive(index);
  });
});
updateActive(0);

slides.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
  });
});

const storyBtns = document.querySelectorAll('.stories button');
const videoModal=document.querySelector('#videomodal');
const videoTarget=videoModal.querySelector('video');
const videoModalCloseBtn=videoModal.querySelector('.close');

for(let btn of storyBtns){
  btn.addEventListener('click',()=>{
    let videoURL=btn.getAttribute('data-url');
    videoTarget.setAttribute('src',videoURL);
    videoTarget.setAttribute('autoplay','');
    videoModal.classList.add('active');
  })
}
videoModalCloseBtn.addEventListener('click', () => {
  closeModal();
});


videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    closeModal();
  }
});


function closeModal() {
  videoModal.classList.remove('active');
  videoTarget.setAttribute('src', '');
}

/* //careers */
// top버튼
const topButton = document.querySelector('.top button');

topButton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// //top 버튼


// footer icon


const icons = [
  { id: 'face', normal: 'images/facebook.svg', hover: 'images/facebook_hover.svg' },
  { id: 'insta', normal: 'images/instagram.svg', hover: 'images/insta_hover.svg' },
  { id: 'twitter', normal: 'images/twitter.svg', hover: 'images/twitter_hover.svg' },
  { id: 'youtube', normal: 'images/youtube.svg', hover: 'images/youtube_hover.svg' }
];

icons.forEach(icon => {
  const img = document.getElementById(icon.id);
  img.addEventListener('mouseenter', () => {
    img.src = icon.hover;
  });
  img.addEventListener('mouseleave', () => {
    img.src = icon.normal;
  });
});


// //footer icon