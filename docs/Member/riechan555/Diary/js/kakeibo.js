// 初期設定
document.addEventListener('DOMContentLoaded', function() {
    // HTML要素の取得
    const listScreen = document.getElementById('list-screen');
    const formScreen = document.getElementById('form-screen');
    const addButton = document.getElementById('add-button');
    const backButton = document.getElementById('back-button');
    const dataForm = document.getElementById('data-form');
    const dataTable = document.getElementById('data-table');
    const dataBody = document.getElementById('data-body');
    const noDataMessage = document.getElementById('no-data-message');
    const searchInput = document.getElementById('search');
    const formTitle = document.getElementById('form-title');
    const dateInput = document.getElementById('date');
    const categoryInput = document.getElementById('category');
    const amountInput = document.getElementById('amount');
    const descriptionInput = document.getElementById('description');
    const receiptInput = document.getElementById('receipt');
    const receiptPreview = document.getElementById('receipt-preview');

    let isEditing = false;
    let editingIndex = null;

    // データをLocalStorageから取得
    let kakeiboData = JSON.parse(localStorage.getItem('kakeiboData')) || [];

    // データ一覧を表示
    function displayData() {
        dataBody.innerHTML = '';
        if (kakeiboData.length === 0) {
            noDataMessage.style.display = 'block';
        } else {
            noDataMessage.style.display = 'none';
            // 日付の降順にデータをソート
            kakeiboData.sort((a, b) => new Date(b.date) - new Date(a.date));
            kakeiboData.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.date}</td>
                    <td>${item.category}</td>
                    <td>${item.amount}</td>
                    <td>${item.description}</td>
                    <td>
                        <button onclick="editData(${index})">編集</button>
                        <button onclick="deleteData(${index})">削除</button>
                    </td>
                `;
                dataBody.appendChild(row);
            });
        }
    }

    // データの追加・更新
    function saveData(event) {
        event.preventDefault();
        const newItem = {
            date: dateInput.value,
            category: categoryInput.value,
            amount: amountInput.value,
            description: descriptionInput.value,
            receipt: receiptInput.files[0] ? URL.createObjectURL(receiptInput.files[0]) : null
        };

        if (isEditing) {
            kakeiboData[editingIndex] = newItem;
            isEditing = false;
            editingIndex = null;
        } else {
            kakeiboData.push(newItem);
        }

        localStorage.setItem('kakeiboData', JSON.stringify(kakeiboData));
        displayData();
        switchToListScreen();
    }

    // データの編集
    window.editData = function(index) {
        const item = kakeiboData[index];
        dateInput.value = item.date;
        categoryInput.value = item.category;
        amountInput.value = item.amount;
        descriptionInput.value = item.description;

        if (item.receipt) {
            receiptPreview.src = item.receipt;
            receiptPreview.style.display = 'block';
        } else {
            receiptPreview.style.display = 'none';
        }

        isEditing = true;
        editingIndex = index;
        formTitle.textContent = 'データ編集';
        switchToFormScreen();
    };

    // データの削除
    window.deleteData = function(index) {
        if (confirm('本当に削除しますか？')) {
            kakeiboData.splice(index, 1);
            localStorage.setItem('kakeiboData', JSON.stringify(kakeiboData));
            displayData();
        }
    };

    // 入出金一覧画面に切り替え
    function switchToListScreen() {
        formScreen.style.display = 'none';
        listScreen.style.display = 'block';
    }

    // データ登録/編集画面に切り替え
    function switchToFormScreen() {
        listScreen.style.display = 'none';
        formScreen.style.display = 'block';
    }

    // 検索機能
    searchInput.addEventListener('input', function() {
        const keyword = searchInput.value.toLowerCase();
        const filteredData = kakeiboData.filter(item => 
            item.date.includes(keyword) || 
            item.category.includes(keyword) || 
            item.amount.toString().includes(keyword) || 
            item.description.toLowerCase().includes(keyword)
        );

        dataBody.innerHTML = '';
        if (filteredData.length === 0) {
            noDataMessage.style.display = 'block';
        } else {
            noDataMessage.style.display = 'none';
            filteredData.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.date}</td>
                    <td>${item.category}</td>
                    <td>${item.amount}</td>
                    <td>${item.description}</td>
                    <td>
                        <button onclick="editData(${index})">編集</button>
                        <button onclick="deleteData(${index})">削除</button>
                    </td>
                `;
                dataBody.appendChild(row);
            });
        }
    });

    // イベントリスナーの設定
    addButton.addEventListener('click', function() {
        formTitle.textContent = 'データ登録';
        dataForm.reset();
        receiptPreview.style.display = 'none';
        switchToFormScreen();
    });

    backButton.addEventListener('click', switchToListScreen);

    dataForm.addEventListener('submit', saveData);

    // 初回データ表示
    displayData();
});
