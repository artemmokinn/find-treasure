let getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

let getDistance = function (event, target) {
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

let getDistanceHint = function (distance) {
  if (distance < 10) {
    return 'Обожжешься';
  } else if (distance < 20) {
    return 'Очень горячо. У вас осталось: ' + (30 - clicks) + ' попыток.';
  } else if (distance < 40) {
    return 'Горячо. У вас осталось: ' + (30 - clicks) + ' попыток.';
  } else if (distance < 80) {
    return 'Тепло. У вас осталось: ' + (30 - clicks) + ' попыток.';
  } else if (distance < 160) {
    return 'Холодно. У вас осталось: ' + (30 - clicks) + ' попыток.';
  } else if (distance < 320) {
    return 'Очень холодно. У вас осталось: ' + (30 - clicks) + ' попыток.';
  } else {
    return 'Замёрзнешь!. У вас осталось: ' + (30 - clicks) + ' попыток.';
  }
};

let width = 400;
let height = 400;
let clicks = 0;

let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};

$('#map').click(function (event) {
  clicks++;
  let distance = getDistance(event, target);
  let distanceHint = getDistanceHint(distance);
  $('#distance').text(distanceHint);
  if (distance < 10) {
    alert('Клад найден! Сделано кликов: ' + clicks);
  }
  if (clicks > 30) {
    alert('КОНЕЦ ИГРЫ. У вас закончились попытки.');
  }
});