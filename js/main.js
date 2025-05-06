

/*youngate*/
const chooseLang = document.querySelectorAll('.choose_lang li');
const tapMenu = document.querySelectorAll('.tap_menu li');
const tapContent = document.querySelectorAll('.brand_item_wrap');
const externalLink = document.querySelectorAll('.external_link');

// console.log(chooseLang);
// 언어 선택 버튼 클릭 시
for(item of chooseLang){
  item.addEventListener('click',function(e){
    e.preventDefault();
    for(item of chooseLang){
      item.classList.remove('active')
    }
    this.classList.add('active');
  });
}

// console.log(externalLink);
// 외부링크 클릭시 a태그 이동 제거거
for(item of externalLink){
  item.addEventListener('click',function(e){
    e.preventDefault();
  });
}

// console.log(tapMenu);
// console.log(tapContent);
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









/* jinuk */
const storyThumbs = document.querySelectorAll('.story_thumbs .thumb');
const stories = document.querySelectorAll('.stories > div');
const storyBtns = document.querySelectorAll('.stories button');
const targetVideo = document.querySelector('#videomodal video');
const videoModal = document.getElementById('videomodal');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const thumbs = document.querySelector('.story_thumbs');
const slides = thumbs.querySelectorAll('li');


let currentIndex = 1;

function active(index) {
  stories.forEach(story => story.classList.remove('active'));
  stories[index].classList.add('active');
  currentIndex = index;
}

rightBtn.addEventListener('click', function () {
  const nextIndex = (currentIndex + 1) % stories.length;
  active(nextIndex);
});

leftBtn.addEventListener('click', function () {
  const prevIndex = (currentIndex - 1 + stories.length) % stories.length;
  active(prevIndex);
})

const slideWidth = 313;
const slideGap = 20;

let thumbsIndex = 0;

function moveSlide(idx) {
  if (idx > slides.length - 3) {
    idx = 0;
  }
  if (idx < 0) {
    idx = slides.length - 3;
  }
  thumbs.style.left = -(idx * (slideWidth + slideGap)) + 'px';
  currentIndex = idx;
  console.log(thumbsIndex);
}

rightBtn.addEventListener('click', () => {
  moveSlide(++thumbsIndex);
});

leftBtn.addEventListener('click', () => {
  moveSlide(--thumbsIndex);
});


storyThumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', (e) => {
    e.preventDefault();
    stories.forEach(story => story.classList.remove('active'));
    stories[index].classList.add('active');
  });
});


storyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const videoURL = btn.getAttribute('data_url');
    targetVideo.src = videoURL;
    videoModal.classList.add('active');
  });
});


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