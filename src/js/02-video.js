import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
let currentTime = localStorage.getItem(TIME_KEY)

if (currentTime === null || currentTime === undefined) {
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(localStorageTime, 1000));

function localStorageTime(data) {
  try {
    localStorage.setItem(TIME_KEY, data.seconds);
  } catch (error) {
    console.error('Error: ', error.message);
  }
}