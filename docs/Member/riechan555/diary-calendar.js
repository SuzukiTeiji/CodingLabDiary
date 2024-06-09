function toggleDiaryContent(element) {
    const title = element;
    const content = element.nextElementSibling;

    if (content.style.display === 'block') {
        content.style.display = 'none';
        title.style.display = 'block';
    } else {
        content.style.display = 'block';
        title.style.display = 'none';
    }
}

function previousMonth() {
    // 前の月に移動するロジックを実装します
    alert('前の月に移動');
}

function nextMonth() {
    // 次の月に移動するロジックを実装します
    alert('次の月に移動');
}
