// DOMContentLoadedイベントが発火した際に実行される処理を定義
document.addEventListener('DOMContentLoaded', function() {
    // saveButton要素に対してclickイベントリスナーを追加する
    document.getElementById('saveButton').addEventListener('click', function() {
        // テキストエリア（note要素）の値（メモの内容）を取得
        const noteText = document.getElementById('note').value;
        // テキストデータをBlobオブジェクトとして生成する
        const blob = new Blob([noteText], { type: 'text/plain' });
        // BlobオブジェクトのURLを生成する
        const url = URL.createObjectURL(blob);
        // ダウンロード用のリンク（a要素）を動的に作成する
        const a = document.createElement('a');
        // リンク先URLを設定
        a.href = url;
        // ダウンロード時のファイル名を設定
        a.download = 'memo.txt';
        // リンクを一時的にDOMに追加する
        document.body.appendChild(a);
        // リンクをクリックしてダウンロードをトリガーする
        a.click();
        // ダウンロード用リンクをDOMから削除する
        document.body.removeChild(a);
        // BlobオブジェクトのURLを解放する
        URL.revokeObjectURL(url);
    });
});
