let head1 = "ボンネット";
let head2 = "ビッグリボンカチューシャ";
let head3 = "リボンコーム";

console.log("変数で出力**********************");
console.log(head1);
console.log(head2);
console.log(head3);

let itemNames = ["ボンネット", "ビッグリボンカチューシャ", "リボンコーム"];
let itemPrices = [100, 200, 300];

console.log("配列で出力**********************");

for (let i = 0; i < itemNames.length; i++) {
    console.log(itemNames[i] + ":" + itemPrices[i]);
}

let head1Object = {
    itemName: "ボンネット",
    itemPrice: 100 
}
let head2Object = {
    itemName: "ビッグリボンカチューシャ",
    itemPrice: 200 
}
let head3Object = {
    itemName: "リボンコーム",
    itemPrice: 300 
}

let items = [head1Object, head2Object, head3Object];

console.log("オブジェクトで出力**********************");

for (let i = 0; i < items.length; i++) {
    console.log("Item Name: " + items[i].itemName + ", Item Price: " + items[i].itemPrice);
}

let itemList = document.getElementById("item-list");

for (let i = 0; i < items.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = items[i].itemName + ":¥" + items[i].itemPrice;
    itemList.appendChild(listItem);
    console.log("Item Name: " + items[i].itemName + ", Item Price: " + items[i].itemPrice);
}