document.addEventListener('DOMContentLoaded', function() {
    const addEntryButton = document.getElementById('add-entry-btn');
    const diaryLinksContainer = document.getElementById('diary-links');
    
    // ダミーの日記データ（実際にはファイルやデータベースから取得することができます）
    const diaryEntries = [
        { date: '2024年10月31日', link: 'Diary/20241031.html' },
        { date: '2024年11月10日', link: 'Diary/20241110.html' },
    ];

    // 日記リンクを表示する
    diaryEntries.forEach(entry => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = entry.link;
        link.textContent = `${entry.date}の日記`;
        listItem.appendChild(link);
        diaryLinksContainer.appendChild(listItem);
    });

    addEntryButton.addEventListener('click', function() {
        const entryDate = prompt('日記の日付を入力してください（例：2024年11月12日）');
        const entryText = prompt('今日の出来事を入力してください：');

        if (entryDate && entryText) {
            const newDiaryFileName = `diary_${entryDate.replace(/[^\w\s]/g, '_').replace(/\s+/g, '_')}.html`;
            const newEntry = {
                date: entryDate,
                link: newDiaryFileName
            };

            // 新しい日記データを追加
            diaryEntries.unshift(newEntry);

            // 新しいリンクをリストに追加
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = newDiaryFileName;
            link.textContent = `${entryDate}の日記`;
            listItem.appendChild(link);
            diaryLinksContainer.prepend(listItem);

            alert('新しい日記を追加しました！');
        } else {
            alert('日付と内容を入力してください！');
        }
    });
});
