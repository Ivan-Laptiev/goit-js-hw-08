import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const loaded = localStorage.getItem('videoplayer-current-time');

if (loaded) {
  player.setCurrentTime(loaded);
}

player.on('timeupdate', throttle(onCurrentTime, 1000));

function onCurrentTime(e) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}