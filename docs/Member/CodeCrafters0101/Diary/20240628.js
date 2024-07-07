// DOMContentLoadedイベントが発火した際に実行される処理を定義
document.addEventListener('DOMContentLoaded', function() {
    // アクセスしている機器を判別する関数
    function getDeviceType() {
        const userAgent = navigator.userAgent; // ユーザーエージェント文字列を取得
        // ユーザーエージェントにiPhoneまたはAndroidのモバイルデバイスが含まれているかをチェック
        if (userAgent.match(/iPhone|Android.+Mobile/)) {
            return 'mobile'; // モバイルデバイスの場合
        } else {
            return 'desktop'; // デスクトップデバイスの場合
        }
    }

    // エンコーディングを設定する関数
    function getEncoding() {
        const deviceType = getDeviceType(); // デバイスの種類を取得
        if (deviceType === 'desktop') {
            return 'Shift-JIS'; // デスクトップの場合はShift-JIS
        } else {
            return 'UTF-8'; // モバイルの場合はUTF-8
        }
    }

    // 保存ボタンにクリックイベントリスナーを追加
    document.getElementById('saveButton').addEventListener('click', function() {
        const noteText = document.getElementById('note').value; // テキストエリアの内容を取得
        const encoding = getEncoding(); // エンコーディングを取得
        let blob;

        if (encoding === 'Shift-JIS') {
            // Shift-JISエンコーディングに変換（Blobでは直接サポートされていないため、手動で変換する必要があります）
            // 簡単なShift-JISエンコーディングへの変換（完全な変換には他のライブラリが必要）
            const sjisArray = new TextEncoder('shift_jis', { NONSTANDARD_allowLegacyEncoding: true }).encode(noteText);
            blob = new Blob([sjisArray], { type: 'text/plain' }); // Shift-JISでBlobを作成
        } else {
            // UTF-8でBlobを作成
            blob = new Blob([noteText], { type: 'text/plain' });
        }

        const url = URL.createObjectURL(blob); // BlobのURLを生成
        const a = document.createElement('a'); // ダウンロード用のリンクを作成
        a.href = url; // リンク先URLを設定
        a.download = 'memo.txt'; // ダウンロード時のファイル名を設定
        document.body.appendChild(a); // リンクを一時的にDOMに追加
        a.click(); // リンクをクリックしてダウンロードをトリガー
        document.body.removeChild(a); // ダウンロード用リンクをDOMから削除
        URL.revokeObjectURL(url); // BlobオブジェクトのURLを解放
    });
});
