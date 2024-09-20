document.getElementById('fetch-button').addEventListener('click', fetchSpells);

function fetchSpells() {
    fetch('https://hp-api.onrender.com/api/spells')
        .then(response => response.json())
        .then(data => {
            const spellsDiv = document.getElementById('spells');
            spellsDiv.innerHTML = ''; // 前回の結果をクリア
            data.forEach(spell => {
                const spellDiv = document.createElement('div');
                spellDiv.classList.add('spell');
                spellDiv.innerHTML = `
                    <h2>${spell.name}</h2>
                    <p>効果: ${spell.description || '情報なし'}</p>
                `;
                spellsDiv.appendChild(spellDiv);
            });
        })
        .catch(error => console.error('データの取得エラー:', error));
}
