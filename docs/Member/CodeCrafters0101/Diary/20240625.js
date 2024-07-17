document.addEventListener('DOMContentLoaded', function() {
    console.log("ページが読み込まれました。"); // ページ読み込み完了時にコンソールにメッセージを表示

    // ページビューのカウント
    let pageViewCount = localStorage.getItem('pageViewCount'); // ローカルストレージからページビューカウントを取得
    if (!pageViewCount) { // もしページビューカウントが存在しない場合
        pageViewCount = 0; // ページビューカウントを0に設定
    } else {
        pageViewCount = parseInt(pageViewCount); // ページビューカウントを整数に変換
    }
    pageViewCount += 1; // ページビューカウントを1増やす
    localStorage.setItem('pageViewCount', pageViewCount); // 増加したページビューカウントをローカルストレージに保存
    document.getElementById('pageViewCount').textContent = pageViewCount; // ページビューカウントを表示する要素のテキストを更新
});
