// main/static/main/js/main.js

document.addEventListener('DOMContentLoaded', function () {
    // Context: Welcome message animation
    const welcomeMessage = document.querySelector('.welcome-message');
  
    if (welcomeMessage) {
      // Using anime.js for animation
      anime.timeline({ loop: false })
        .add({
          targets: '.welcome-message',
          opacity: [0, 1],
          easing: 'easeInOutQuad',
          duration: 800,
        })
        .add({
          targets: '.welcome-message',
          translateY: [50, 0],
          opacity: [1, 1],
          easing: 'easeInOutQuad',
          duration: 800,
        });
    }
  });
  