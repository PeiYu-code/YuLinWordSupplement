// 1. 單字資料庫
const wordBank = [
  // --- 第一張圖片 (44 個) ---
  { eng: 'fossil', ch: '化石、頑固的人(n.)' },
  { eng: 'dinosaur', ch: '恐龍、老古董(人)(n.)' },
  { eng: 'knot', ch: '結(n.); 打結(v.)' },
  { eng: 'bride', ch: '新娘(n.)' },
  { eng: 'groom', ch: '新郎(n.)' },
  { eng: 'scout', ch: '童子軍、星探(n.)' },
  { eng: 'puppet', ch: '木偶、傀儡(n.)' },
  { eng: 'junk', ch: '垃圾(n.)' },
  { eng: 'monk', ch: '和尚、修道士(n.)' },
  { eng: 'nun', ch: '尼姑、修女(n.)' },
  { eng: 'sack', ch: '大袋子(n.)' },
  { eng: 'tide', ch: '潮汐、趨勢(n.)' },
  { eng: 'loan', ch: '貸款、出借(v., n.)' },
  { eng: 'welfare', ch: '社會福利(n.)' },
  { eng: 'consistent', ch: '始終如一的、一致的(adj.)' },
  { eng: 'remark', ch: '評論(v., n.)' },
  { eng: 'remarkable', ch: '傑出的(adj.)' },
  { eng: 'curl', ch: '使...捲曲(v.); 捲髮、捲曲物(n.)' },
  { eng: 'gaze', ch: '凝視(v., n.) +at' },
  { eng: 'portable', ch: '手提的、可攜帶的(adj.)' },
  { eng: 'port', ch: '港口(n.)' },
  { eng: 'deserve', ch: '值得(v.)' },
  { eng: 'bait', ch: '誘餌、誘惑物(n.)' },
  { eng: 'battery', ch: '電池(n.)' },
  { eng: 'bead', ch: '珠子(n.)' },
  { eng: 'crown', ch: '皇冠(n.); 加冕(v.)' },
  { eng: 'lace', ch: '蕾絲、鞋帶(n.); 幫...綁鞋帶(v.)' },
  { eng: 'temper', ch: '脾氣(n.)' },
  { eng: 'necklace', ch: '項鍊(n.)' },
  { eng: 'be laced with', ch: '(食物、飲料裡)摻有...' },
  { eng: 'quick-tempered', ch: '急躁的(adj.)' },
  { eng: 'lose one\'s temper', ch: '發脾氣' },
  { eng: 'research', ch: '研究(n., v.)' },
  { eng: 'carry out', ch: '執行 (實驗、研究)' },
  { eng: 'popularity', ch: '流行、人氣、普及(n.)' },
  { eng: 'fantasy', ch: '奇幻作品、幻想(n.)' },
  { eng: 'fantastic', ch: '極好的(adj.)' },
  { eng: 'fancy', ch: '空想、喜愛(v., n.) +Ving; 花俏的(adj.)' },
  { eng: 'yawn', ch: '哈欠(n.); 打哈欠(v.)' },
  { eng: 'accompany', ch: '陪伴、伴奏、伴隨(發生)(v.)' },
  { eng: 'companion', ch: '同伴(n.)' },
  { eng: 'depart', ch: '離開、出發(v.)' },
  { eng: 'departure', ch: '離開、出發(n.)' },
  { eng: 'accomplish', ch: '完成、達成(v.)' },

  // --- 第二張圖片 (20 個) ---
  { eng: 'fragile', ch: '易碎的、脆弱的(adj.)' },
  { eng: 'complete', ch: '完成(v.); 完整的(adj.)' },
  { eng: 'fulfill', ch: '實現、履行(v.)' },
  { eng: 'fulfillment', ch: '實現、履行(n.)' },
  { eng: 'frustrate', ch: '使...挫折(v.)' },
  { eng: 'possess', ch: '擁有、(鬼魂)附身(v.)' },
  { eng: 'possession', ch: '擁有、所有物、附身(n.)' },
  { eng: 'recall', ch: '回想、(瑕疵品)召回(v., n.)' },
  { eng: 'mountainous', ch: '多山的、像山一樣的(adj.)' },
  { eng: 'oral', ch: '口腔的、口頭的(adj.); 口試(n.)' },
  { eng: 'accomplishment', ch: '完成、成就(n.)' },
  { eng: 'a sense of accomplishment', ch: '成就感(n.)' },
  { eng: 'slender', ch: '修長苗條的(adj.)' },
  { eng: 'slim', ch: '苗條的、渺茫的(adj.)' },
  { eng: 'frustration', ch: '挫折(n.)' },
  { eng: 'embarrass', ch: '使...尷尬(v.)' },
  { eng: 'embarrassment', ch: '尷尬(n.)' },
  { eng: 'launch', ch: '發射、發行、啟動(v., n.)' },
  { eng: 'diligent', ch: '勤勉的(adj.)' },
  { eng: 'diligence', ch: '勤勉(n.)' }
];

// 2. 遊戲狀態變數
let wordPool = [];
let activeEng = [];
let activeCh = [];
let selectedEngSlot = null;
let selectedChSlot = null;
let remainingCount = 0;
let successScore = 0;
let errorScore = 0;
let wrongWordsSet = new Set();
let startTime = null;

const GOOGLE_APP_URL = "https://script.google.com/macros/s/AKfycbwxQzgOPKMe8QQE_CZhEyq42uInQ_Nxmf9pT5dLUxBpFUgar9lPZtDtsKmcLneeOJTBBg/exec";

// 3. 洗牌演算法
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 4. 初始化遊戲
function initGame() {
  let allWords = wordBank.map((item, index) => ({ ...item, id: index }));
  shuffle(allWords);

  const gameSize = Math.min(45, allWords.length);
  wordPool = allWords.slice(0, gameSize);
  remainingCount = wordPool.length;

  successScore = 0;
  errorScore = 0;
  wrongWordsSet.clear();

  startTime = new Date();
  activeEng = [];
  activeCh = [];

  const initialDraw = Math.min(5, wordPool.length);
  for (let i = 0; i < initialDraw; i++) {
    const word = wordPool.pop();
    activeEng.push(word);
    activeCh.push(word);
  }

  shuffle(activeCh);
  updateScoreboard();
  buildSlotsOnce();

  const modal = document.getElementById('result-modal');
  if (modal) modal.classList.add('hidden');

  selectedEngSlot = null;
  selectedChSlot = null;
}

// 5. 更新計分板
function updateScoreboard() {
  const remEl = document.getElementById('remaining-count');
  const sucEl = document.getElementById('success-score');
  const errEl = document.getElementById('error-score');

  if (remEl) remEl.textContent = remainingCount;
  if (sucEl) sucEl.textContent = successScore;
  if (errEl) errEl.textContent = errorScore;
}

// 6. 建立固定 DOM 結構與內部 span 容器
function buildSlotsOnce() {
  const engColumn = document.getElementById('english-column');
  const chColumn = document.getElementById('chinese-column');
  if (!engColumn || !chColumn) return;

  engColumn.innerHTML = '';
  chColumn.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const engSlot = document.createElement('div');
    engSlot.className = 'slot';
    engSlot.dataset.type = 'eng';
    engSlot.addEventListener('click', handleEngClick);

    const engSpan = document.createElement('span');
    engSpan.className = 'slot-text';
    engSlot.appendChild(engSpan);
    engColumn.appendChild(engSlot);

    const chSlot = document.createElement('div');
    chSlot.className = 'slot';
    chSlot.dataset.type = 'ch';
    chSlot.addEventListener('click', handleChClick);

    const chSpan = document.createElement('span');
    chSpan.className = 'slot-text';
    chSlot.appendChild(chSpan);
    chColumn.appendChild(chSlot);
  }

  updateSlotContentsSmoothly(false);
}

// 7. 文字層級淡出 / 淡入切換邏輯 (等待時間同步改為 32000ms = 32秒)
function updateSlotContentsSmoothly(animate = true) {
  const engSlots = document.querySelectorAll('#english-column .slot');
  const chSlots = document.querySelectorAll('#chinese-column .slot');
  const allSpans = document.querySelectorAll('.slot-text');

  const updateTexts = () => {
    engSlots.forEach((slot, i) => {
      const span = slot.querySelector('.slot-text');
      if (activeEng[i]) {
        span.textContent = activeEng[i].eng;
        slot.dataset.id = activeEng[i].id;
        slot.style.visibility = 'visible';
      } else {
        slot.style.visibility = 'hidden';
      }
      slot.classList.remove('selected', 'wrong');
    });

    chSlots.forEach((slot, i) => {
      const span = slot.querySelector('.slot-text');
      if (activeCh[i]) {
        span.textContent = activeCh[i].ch;
        slot.dataset.id = activeCh[i].id;
        slot.style.visibility = 'visible';
      } else {
        slot.style.visibility = 'hidden';
      }
      slot.classList.remove('selected', 'wrong');
    });

    allSpans.forEach(span => span.classList.remove('text-fade-out'));
  };

  if (animate) {
    allSpans.forEach(span => span.classList.add('text-fade-out'));
    setTimeout(updateTexts, 32000);
  } else {
    updateTexts();
  }
}

// 8. 點擊英文欄
function handleEngClick(e) {
  const slot = e.currentTarget;
  if (slot.style.visibility === 'hidden') return;
  if (selectedEngSlot) {
    selectedEngSlot.classList.remove('selected');
  }
  selectedEngSlot = slot;
  selectedEngSlot.classList.add('selected');
  if (selectedChSlot) {
    checkMatch();
  }
}

// 9. 點擊中文欄
function handleChClick(e) {
  const slot = e.currentTarget;
  if (slot.style.visibility === 'hidden') return;
  if (selectedChSlot) {
    selectedChSlot.classList.remove('selected');
  }
  selectedChSlot = slot;
  selectedChSlot.classList.add('selected');
  if (selectedEngSlot) {
    checkMatch();
  }
}

// 10. 配對邏輯
function checkMatch() {
  const engId = selectedEngSlot.dataset.id;
  const chId = selectedChSlot.dataset.id;

  if (engId === chId) {
    remainingCount--;
    successScore++;
    updateScoreboard();

    selectedEngSlot = null;
    selectedChSlot = null;

    const targetId = parseInt(engId, 10);
    const engIndex = activeEng.findIndex(w => w.id === targetId);
    const chIndex = activeCh.findIndex(w => w.id === targetId);

    if (wordPool.length > 0) {
      const nextWord = wordPool.pop();
      if (engIndex !== -1) activeEng[engIndex] = nextWord;
      if (chIndex !== -1) activeCh[chIndex] = nextWord;
    } else {
      if (engIndex !== -1) activeEng.splice(engIndex, 1);
      if (chIndex !== -1) activeCh.splice(chIndex, 1);
    }

    shuffle(activeCh);
    updateSlotContentsSmoothly(true);

    if (activeEng.length === 0) {
      setTimeout(showResult, 32000);
    }
  } else {
    errorScore++;
    updateScoreboard();

    const wrongEngId = parseInt(selectedEngSlot.dataset.id, 10);
    const correctWordObj = wordBank[wrongEngId];
    if (correctWordObj) {
      wrongWordsSet.add(`${correctWordObj.eng}(${correctWordObj.ch})`);
    }

    selectedEngSlot.classList.add('wrong');
    selectedChSlot.classList.add('wrong');
    const currentEng = selectedEngSlot;
    const currentCh = selectedChSlot;
    selectedEngSlot = null;
    selectedChSlot = null;

    setTimeout(() => {
      currentEng.classList.remove('selected', 'wrong');
      currentCh.classList.remove('selected', 'wrong');
    }, 500);
  }
}

// 11. 結算畫面
function showResult() {
  const finalSuc = document.getElementById('final-success');
  const finalErr = document.getElementById('final-error');
  if (finalSuc) finalSuc.textContent = successScore;
  if (finalErr) finalErr.textContent = errorScore;

  const wrongWordsList = document.getElementById('wrong-words-list');
  const wrongWordsBox = document.getElementById('wrong-words-box');
  let wrongWordsString = "";

  if (wrongWordsList) wrongWordsList.innerHTML = '';

  if (wrongWordsSet.size > 0) {
    if (wrongWordsBox) wrongWordsBox.style.display = 'block';
    let items = [];
    wrongWordsSet.forEach(wordStr => {
      items.push(wordStr);
      if (wrongWordsList) {
        const li = document.createElement('li');
        li.textContent = wordStr;
        wrongWordsList.appendChild(li);
      }
    });
    wrongWordsString = items.join(", ");
  } else {
    if (wrongWordsBox) wrongWordsBox.style.display = 'none';
    wrongWordsString = "無答錯單字";
  }

  const endTime = new Date();
  const timeSpentSeconds = startTime ? Math.round((endTime - startTime) / 1000) : 0;

  if (GOOGLE_APP_URL && GOOGLE_APP_URL !== "YOUR_PASTED_URL_HERE") {
    fetch(GOOGLE_APP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        successScore: successScore,
        errorScore: errorScore,
        wrongWords: wrongWordsString,
        timeSpent: timeSpentSeconds
      })
    }).catch(err => console.log("Silent logging status:", err));
  }

  const modal = document.getElementById('result-modal');
  if (modal) modal.classList.remove('hidden');
}

// 12. 啟動進入點
function startApp() {
  document.getElementById('restart-btn')?.addEventListener('click', initGame);
  initGame();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
