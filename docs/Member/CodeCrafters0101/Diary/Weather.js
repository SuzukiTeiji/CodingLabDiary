document.getElementById('fetchWeatherBtn').addEventListener('click', function() {
    const cityCode = '471000';  // 沖縄の都市コード
    getWeather(cityCode);
});

async function getWeather(cityCode) {
    const url = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${cityCode}.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('ネットワークに問題があります。');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('エラーが発生しました:', error);
        document.getElementById('weatherResult').textContent = '天気情報の取得に失敗しました。';
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    const title = data.title ? data.title : '--　沖縄地区　--';
    const reportDatetime = data.reportDatetime ? new Date(data.reportDatetime).toLocaleString() : '日時情報なし';
    const text = data.text ? data.text.replace(/\n/g, '<br>').replace(/　/g, '&nbsp;&nbsp;') : 'テキスト情報なし';

    weatherResult.innerHTML = `
        <h2>${title}</h2>
        <p>発表時刻: ${reportDatetime}</p>
        <p>${text}</p>
    `;
}
