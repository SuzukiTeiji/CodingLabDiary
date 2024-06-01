const API_URL = "https://zipcloud.ibsnet.co.jp/api/search?zipcode="; // APIのベースURL

const format = {
  zip1: /^\d{3}-?\d{4}$/, // 郵便番号(ハイフン有り)
  zip2: /^0\d{7}$/, // 郵便番号(ハイフン無し)
};

const searchBtn = document.getElementById("zipSearchBtn"), // 検索ボタン
  zip = document.getElementById("zip"), // 郵便番号入力欄
  address = document.getElementById("address"); // 住所入力欄

const sanitizeInput = (input) => {
  // ユーザー入力をエスケープして、XSS対策を行う
  const element = document.createElement('div');
  element.innerText = input;
  return element.innerHTML;
};

const getAddress = (text) => {
  const sanitizedText = sanitizeInput(text); // ユーザー入力のエスケープ
  const url = API_URL + encodeURIComponent(sanitizedText); // URLエンコードしてリクエストを作成
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // レスポンスをJSONとしてパース
    })
    .then((data) => {
      if (data.results != null) {
        // 住所を入力欄に設定
        address.value = `${data.results[0].address1}${data.results[0].address2}${data.results[0].address3}`;
      } else {
        alert("該当する住所が見つかりませんでした。");
      }
    })
    .catch((error) => {
      console.error('Fetch error:', error); // エラーをコンソールに出力
      alert("住所検索に失敗しました。");
    });
};

searchBtn.addEventListener("click", (e) => {
  // ボタンがクリックされた時のイベントリスナー
  if (zip.value.trim() !== "") {
    // 郵便番号の形式か確認
    if (format.zip1.test(zip.value) || format.zip2.test(zip.value)) {
      getAddress(zip.value.trim()); // 郵便番号の前後の空白を削除して検索
    } else {
      alert("郵便番号の形式で入力してください。");
    }
  } else {
    alert("郵便番号を入力してください。");
  }
});
