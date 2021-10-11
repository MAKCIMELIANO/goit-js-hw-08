const { throttle } = require('lodash');

// let iframe = document.querySelector('iframe');
// let player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// const onPlay = function (data) {
//   localStorage.setItem('videoplayer-current-time', data.seconds);
// };

// player.on('timeupdate', onPlay);

// player.on('timeupdate', throttle(onPlay, 1000));

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// playerCurrenTime = localStorage.getItem('videoplayer-current-time');

// player.setCurrentTime(playerCurrenTime);
// //   .then(function (seconds) {
// //     // seconds = the actual time that the player seeked to
// //   })
// //   .catch(function (error) {
// //     switch (error.name) {
// //       case 'RangeError':
// //         // the time was less than 0 or greater than the video’s duration
// //         break;

// //       default:
// //         // some other error occurred
// //         break;
// //     }
// //   });

const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  // console.log(onPlay)
};

iframePlayer.on('timeupdate', throttle(onPlay, 1000));

playerCurrenTime = localStorage.getItem('videoplayer-current-time');

if (playerCurrenTime) {
  iframePlayer.setCurrentTime(playerCurrenTime);
} else {
  iframePlayer.setCurrentTime(0);
}
