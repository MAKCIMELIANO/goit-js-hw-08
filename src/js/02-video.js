let iframe = document.querySelector('iframe');
let player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

playerCurrenTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(playerCurrenTime);
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
