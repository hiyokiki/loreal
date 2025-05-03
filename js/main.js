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