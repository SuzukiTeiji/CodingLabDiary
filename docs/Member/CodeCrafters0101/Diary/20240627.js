function getWeather() {
    const dateInput = document.getElementById('dateInput').value;
    const csvFilePath = 'csv/過去お天気.csv';
    fetch(csvFilePath)
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').map(row => row.split(','));
            const result = rows.find(row => row[0] === dateInput);

            if (result) {
                const maxTemp = result[1];
                const minTemp = result[2];
                document.getElementById('maxTemp').textContent = `最高気温: ${maxTemp}°C`;
                document.getElementById('minTemp').textContent = `最低気温: ${minTemp}°C`;
            } else {
                document.getElementById('maxTemp').textContent = '該当するデータが見つかりません。';
                document.getElementById('minTemp').textContent = '';
            }
        })
        .catch(error => console.error('Error fetching the CSV file:', error));
}
