/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecastButton = document.querySelector('.forecast-btn');
const forecast = document.querySelector('h1');
const currentProbability = document.querySelector('p');

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function generatePrediction() {
    let predictionNum = getRandomNum(1, 4);
    let predictionText = "";

    if (predictionNum == 1) {
        predictionText = "Действуй, удача на твоей стороне!";
    } else if (predictionNum == 2) {
        predictionText = "Побудь сегодня на едине с собой, прими ванну, сделай медитации и просто расслабься!";
    } else {
        predictionText = "Скоро ты встретишь свою любовь!";
    };

    const probability = Math.floor(Math.random() * 100);
    const probabilityText = probability + "%";

    forecast.textContent = predictionText;
    currentProbability.textContent = probabilityText;
};

const forecastItem = document.querySelector('#forecast-item');
const container = document.querySelector('.forecasts');

function makeForecastByTemplate() {
    const userForecast = forecastItem.content.cloneNode(true);

    userForecast.querySelector('h3').textContent = forecast.textContent;
    userForecast.querySelector('p').textContent = currentProbability.textContent;

    container.prepend(userForecast);
};

forecastButton.addEventListener ('click', generatePrediction);
forecastButton.addEventListener ('click', makeForecastByTemplate);