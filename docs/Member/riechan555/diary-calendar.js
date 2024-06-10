function toggleDiaryContent(element) {
    const flipCardInner = element.closest('.flip-card-inner');
    if (flipCardInner.style.transform === 'rotateY(180deg)') {
        flipCardInner.style.transform = 'rotateY(0deg)';
    } else {
        flipCardInner.style.transform = 'rotateY(180deg)';
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
