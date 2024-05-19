// game.js

// プレイヤーの初期位置
let playerX = 0;
let playerY = 0;

// ボタン要素を取得
const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

// ボタンクリック時の処理
upButton.addEventListener('click', () => {
    playerY -= 10; // 上に移動
    updatePlayerPosition();
});

downButton.addEventListener('click', () => {
    playerY += 10; // 下に移動
    updatePlayerPosition();
});

leftButton.addEventListener('click', () => {
    playerX -= 10; // 左に移動
    updatePlayerPosition();
});

rightButton.addEventListener('click', () => {
    playerX += 10; // 右に移動
    updatePlayerPosition();
});

// プレイヤーの位置を更新する関数
function updatePlayerPosition() {
    // ここでプレイヤーの位置を更新する処理を実装
    // 例: プレイヤーの位置をCSSで変更するなど
}