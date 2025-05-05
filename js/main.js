









/* jinuk */
// carrer
const stories = [
  document.getElementById('story1'),
  document.getElementById('story2'),
  document.getElementById('story3')
];

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const thumbs = document.querySelectorAll('.story_thumbs a');

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
});





  





// top버튼
const topButton = document.querySelector('.top button');

topButton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// //top 버튼


// footer icon


const icons = [
    { id: 'face', normal:'images/facebook.svg', hover:'images/facebook_hover.svg' },
    { id: 'insta', normal: 'images/instagram.svg', hover: 'images/insta_hover.svg' },
    { id: 'twitter', normal:'images/twitter.svg', hover:'images/twitter_hover.svg' },
    { id: 'youtube', normal:'images/youtube.svg', hover:'images/youtube_hover.svg' }
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