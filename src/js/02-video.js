
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
        const currentTime = localStorage.setItem(`videoplayer-current-time`, data.seconds);
        console.log(data.seconds)};
    player.on('timeupdate', throttle(onPlay, 1000));        
      
 player.setCurrentTime(localStorage.getItem(`videoplayer-current-time`));
      
// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".

// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.

// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.








  