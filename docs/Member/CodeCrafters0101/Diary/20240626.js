document.getElementById('downloadBtn').addEventListener('click', function() {
    if (confirm('ダウンロードしますか？')) {
        var link = document.createElement('a');
        link.href = 'csv/過去お天気.csv';
        link.download = '過去お天気.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
