import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(savedStopPhoto, 1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});


function savedStopPhoto(timeupdate) {
    localStorage.setItem("videoplayer-current-time", timeupdate.seconds);
    
};
let savedMoment = localStorage.getItem("videoplayer-current-time");
recreationOfMoment();
function recreationOfMoment() {
    if (savedMoment) {
        player.setCurrentTime(savedMoment);
    }
    
 };