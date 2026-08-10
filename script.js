// 1. 單字資料庫 (包含所有單字)
const wordBank = [
  { eng: "chest", ch: "胸膛、木箱(n.)" },
    { eng: "breast", ch: "胸部、乳房(n.)" },
    { eng: "skin", ch: "皮膚(n.)" },
    { eng: "skinny", ch: "骨瘦如柴(adj.)" },
    { eng: "lobby", ch: "大廳(n.)" },
    { eng: "rust", ch: "鐵鏽(n.)" },
    { eng: "rusty", ch: "生疏的、生鏽的(adj.)" },
    { eng: "tent", ch: "帳篷(n.)" },
    { eng: "portrait", ch: "肖像(n.)" },
    { eng: "portray", ch: "描繪、描寫(v.)" },
    { eng: "statue", ch: "雕像(n.)" },
    { eng: "glory", ch: "榮耀" },
  { eng: "glorious", ch: "輝煌的、美好的(adj.)" },
    { eng: "structure", ch: "結構、建築物(n.)" },
    { eng: "emperor", ch: "帝王、皇帝(n.)" },
    { eng: "citizen", ch: "公民(n.)" },
    { eng: "sword", ch: "劍(n.)" },
    { eng: "carve", ch: "雕刻(v.)" },
    { eng: "weapon", ch: "武器(n.)" },
    { eng: "bomb", ch: "炸彈(n.)" },
    { eng: "spear", ch: "長茅(n.)" },
    { eng: "bullet", ch: "子彈(n.)" },
    { eng: "missle", ch: "飛彈(n.)" },
    { eng: "monument", ch: "紀念碑(n.)" },
    { eng: "gap", ch: "鴻溝、裂縫、差距(n.)" },
    { eng: "bridge the gap", ch: "消除鴻溝(ph.)" },
    { eng: "studio", ch: "工作室、錄音室、攝影棚(n.)" },
    { eng: "convey", ch: "傳達(想法、理念)、運送(v.)" },
      { eng: "rank", ch: "排名(v., n.)" },
      { eng: "suicide", ch: "自殺(n.)" },
      { eng: "commit suicide", ch: "自殺(v.)" },
      { eng: "chill", ch: "使...變冷(v.); 寒氣(n.)" },
      { eng: "chilly", ch: "冷的(adj.)" },
      { eng: "inspire", ch: "啟發(v.)" },
      { eng: "inspiration", ch: "靈感(n.)" },
      { eng: "revenge", ch: "復仇(v., n.)" },
      { eng: "stir", ch: "攪拌、煽動(v., n.)" },
      { eng: "screw", ch: "螺絲釘(n.); 用螺絲釘固定(v.)" },
      { eng: "screw up", ch: "搞砸(ph.)" },
      { eng: "bang", ch: "用力重捶、發出巨響(v.); 一聲巨響、重擊、瀏海+s(n.)" },
      { eng: "spite", ch: "惡意、刁難(n.)" },
      { eng: "in spite of", ch: "儘管 +N" },
      { eng: "punch", ch: "一擊(n.); 用拳頭猛擊、穿洞(v.)" },
      { eng: "prosper", ch: "(經濟)興盛、(人)成功(v.)" },
      { eng: "prosperity", ch: "繁榮(n.)" },
      { eng: "prosperous", ch: "繁榮的(adj.)" },
      { eng: "sacrifice", ch: "犧牲(v., n.)、祭品(n.)" },
      { eng: "illustrate", ch: "(用例子、圖像)說明闡述(v.)" },
      { eng: "illustration", ch: "插圖、圖解、例證(n.)" },
      { eng: "solid", ch: "固體的、堅硬的、確切可信賴的(adj.)" },
      { eng: "queer", ch: "古怪的(adj.)" },
      { eng: "establish", ch: "建立(v.)" },
      { eng: "establishment", ch: "建立、機構單位(n.)" },
      { eng: "moist", ch: "濕潤的(adj.)" },
      { eng: "moisture", ch: "濕氣(n.)" },
      { eng: "bare", ch: "赤裸的(adj.)" },
      { eng: "barely", ch: "幾乎沒有(adv.)" },
      { eng: "naked", ch: "赤裸的(adj.)" },
      { eng: "dim", ch: "昏暗的(adj.); 使...變暗(v.)" },
      { eng: "rough", ch: "粗糙的、粗略的、艱困的(adj.)" },
      { eng: "inner", ch: "內部的(adj.)" },
      { eng: "outer", ch: "外在的(adj.)" },
      { eng: "tight", ch: "緊的(adj.)" },
      { eng: "tighten", ch: "變緊(v.)" },
        { eng: "athlete", ch: "運動員(n.)" },
          { eng: "athletic", ch: "有運動細胞的(adj.)" },
          { eng: "medal", ch: "獎牌(n.)" },
          { eng: "jet", ch: "噴射機(n.)" },
          { eng: "stadium", ch: "運動場(n.)" },
          { eng: "bulb", ch: "電燈泡(n.)" },
          { eng: "marathon", ch: "馬拉松(n.)" },
          { eng: "kit", ch: "成套工具組(n.)" },
          { eng: "purse", ch: "女用錢包(n.)" },
          { eng: "wallet", ch: "錢包、皮夾(n.)" },
          { eng: "crew", ch: "(船、飛機..等)全體機組人員(n.)" },
          { eng: "staff", ch: "全體員工(n.)" },
          { eng: "gum", ch: "口香糖、牙齦(n.)" },
          { eng: "brunch", ch: "早午餐(n.)" },
      { eng: "supper", ch: "晚餐(n.)" },
        { eng: "sauce", ch: "醬(n.)" },
        { eng: "saucer", ch: "茶碟(n.)" },
        { eng: "dairy", ch: "乳製品(n.); 乳類的(adj.)" },
        { eng: "chimney", ch: "煙囪(n.)" },
        { eng: "strive", ch: "努力、力爭(v.) +to V or +for N" },
        { eng: "honor", ch: "榮耀(n.); 對...致敬、紀念(v.)" },
          { eng: "trace", ch: "追朔(v.); 微量痕跡(n.)" },
          { eng: "relief", ch: "減緩、救助(物資)(n.)" },
          { eng: "relieve", ch: "減緩(v.)" },
          { eng: "unique", ch: "獨特的(adj.)" },
          { eng: "sweat", ch: "汗水(n.); 流汗(v.)" },
          { eng: "heap", ch: "一堆(n.); 堆積(v.)" },
          { eng: "breeze", ch: "微風(n.)" },
          { eng: "triumph", ch: "勝利(n., v.)" },
          { eng: "victory", ch: "勝利(n.)" },
          { eng: "grin", ch: "露齒一笑(v., n.)" },
          { eng: "giggle", ch: "咯咯的笑(v.)" },
          { eng: "roar", ch: "獅吼、大吼(v.); 咆哮聲、轟隆聲(n.)" },
          { eng: "yell", ch: "咆哮(v., n.) +at" },
          { eng: "scream", ch: "尖叫(v., n.)" },
          { eng: "leap", ch: "跳躍、激增(v., n.)" },
          { eng: "ski", ch: "滑雪(v., n.)" },
          { eng: "swear", ch: "發誓、咒罵(v., n.)" },
          { eng: "boast", ch: "吹噓、以...(擁有某物)為傲(v.)" },
          { eng: "concentrate", ch: "專心、濃縮(v.)" },
          { eng: "concentration", ch: "專心、集中(n.)" },
          { eng: "discourage", ch: "勸阻、使...氣餒(v.)" },
          { eng: "encourage", ch: "鼓勵(v.)" },
          { eng: "courage", ch: "勇氣(n.)" },
          { eng: "obtain", ch: "(經努力或請求而)獲得(v.)" },
          { eng: "overcome", ch: "克服(v.)" },
          { eng: "mighty", ch: "強大的(adj.)" },
          { eng: "slippery", ch: "濕滑的(adj.)" },
          { eng: "slip", ch: "滑倒(v.)" },
          { eng: "raw", ch: "生的、未經加工的(adj.)" },
          { eng: "crispy", ch: "酥脆的(adj.)(強調質感)(v.)" },
          { eng: "crunchy", ch: "易碎的、發出喀滋聲(強調聲音)(adj.)" },
          { eng: "neat", ch: "整齊、俐落的(adj.)" },
          { eng: "stale", ch: "走味、不新鮮的(adj.)" },
          { eng: "fresh", ch: "新鮮的(adj.)" },
          { eng: "handful", ch: "一把、滿手的量(n.)" }
];

// 2. 遊戲狀態與記錄變數
let wordPool = [];
let activeEng = [];
let activeCh = [];
let selectedEngSlot = null;
let selectedChSlot = null;
let remainingCount = 0;
let successScore = 0;
let errorScore = 0;
let wrongWordsSet = new Set();
let startTime = null; // 用於計算單輪花費秒數

// ⚠️ 請把你在 Google Apps Script 部署得到的 Web App 網址貼在下方雙引號內：
const GOOGLE_APP_URL = "https://script.google.com/macros/s/AKfycbwxQzgOPKMe8QQE_CZhEyq42uInQ_Nxmf9pT5dLUxBpFUgar9lPZtDtsKmcLneeOJTBBg/exec";

// 3. 亂數洗牌函數 (Fisher-Yates Shuffle)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 4. 初始化遊戲
function initGame() {
  let allWords = [...wordBank];
  shuffle(allWords);

  // 每回嚴格抽取 45 個單字測試
  const gameSize = Math.min(45, allWords.length);
  wordPool = allWords.slice(0, gameSize);
  remainingCount = wordPool.length;
  successScore = 0;
  errorScore = 0;
  wrongWordsSet.clear();
  updateScoreboard();

  // ⏱️ 記錄此輪遊戲的起點時間
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
  renderColumns();

  document.getElementById('result-modal').classList.add('hidden');
  selectedEngSlot = null;
  selectedChSlot = null;
}

// 5. 更新計分板
function updateScoreboard() {
  document.getElementById('remaining-count').textContent = remainingCount;
  document.getElementById('success-score').textContent = successScore;
  document.getElementById('error-score').textContent = errorScore;
}

// 6. 渲染欄位
function renderColumns() {
  const engColumn = document.getElementById('english-column');
  const chColumn = document.getElementById('chinese-column');
  engColumn.innerHTML = '';
  chColumn.innerHTML = '';

  activeEng.forEach(word => {
    const slot = document.createElement('div');
    slot.className = 'slot fade-in';
    slot.textContent = word.eng;
    slot.dataset.type = 'eng';
    slot.dataset.word = word.eng;
    slot.addEventListener('click', handleEngClick);
    engColumn.appendChild(slot);
  });

  activeCh.forEach(word => {
    const slot = document.createElement('div');
    slot.className = 'slot fade-in';
    slot.textContent = word.ch;
    slot.dataset.type = 'ch';
    slot.dataset.word = word.eng;
    slot.addEventListener('click', handleChClick);
    chColumn.appendChild(slot);
  });
}

// 7. 點擊英文欄處理
function handleEngClick(e) {
  if (selectedEngSlot) {
    selectedEngSlot.classList.remove('selected');
  }
  selectedEngSlot = e.target;
  selectedEngSlot.classList.add('selected');

  if (selectedChSlot) {
    checkMatch();
  }
}

// 8. 點擊中文欄處理
function handleChClick(e) {
  if (selectedChSlot) {
    selectedChSlot.classList.remove('selected');
  }
  selectedChSlot = e.target;
  selectedChSlot.classList.add('selected');

  if (selectedEngSlot) {
    checkMatch();
  }
}

// 9. 檢查是否配對成功
function checkMatch() {
  const engWord = selectedEngSlot.dataset.word;
  const chWord = selectedChSlot.dataset.word;

  if (engWord === chWord) {
    // 配對成功
    selectedEngSlot.classList.add('fade-out');
    selectedChSlot.classList.add('fade-out');
    remainingCount--;
    successScore++;
    updateScoreboard();

    selectedEngSlot = null;
    selectedChSlot = null;

    setTimeout(() => {
      // 🎯 關鍵修正：精準找出這顆單字在 activeEng 與 activeCh 陣列中的記憶體位置
      const engIndex = activeEng.findIndex(w => w.eng === engWord);
      const chIndex = activeCh.findIndex(w => w.eng === engWord);

      if (wordPool.length > 0) {
        // 字庫還有字，抽新字精準遞補到該位置
        const nextWord = wordPool.pop();
        if (engIndex !== -1) activeEng[engIndex] = nextWord;
        if (chIndex !== -1) activeCh[chIndex] = nextWord;
      } else {
        // 字庫空了，將此題從記憶體陣列中精準移除（畫面單字開始遞減）
        if (engIndex !== -1) activeEng.splice(engIndex, 1);
        if (chIndex !== -1) activeCh.splice(chIndex, 1);
      }

      // 🎲 每次答對後，將剩下的中文陣列重新亂數洗牌
      shuffle(activeCh);

      // 🔄 關鍵修正：直接呼叫 renderColumns()，徹底杜絕 DOM 節點與資料錯位的卡關 Bug
      renderColumns();

      // 🏁 檢查遊戲是否結束
      if (activeEng.length === 0) {
        showResult();
      }
    }, 500);

  } else {
    // 配對失敗
    errorScore++;
    updateScoreboard();

    const wrongEngText = selectedEngSlot.textContent;
    const correctWordObj = wordBank.find(w => w.eng === wrongEngText);
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

// 10. 顯示結算畫面彈出視窗 + 暗中上傳結果與時間記錄至 Google 試算表
function showResult() {
  document.getElementById('final-success').textContent = successScore;
  document.getElementById('final-error').textContent = errorScore;

  const wrongWordsList = document.getElementById('wrong-words-list');
  wrongWordsList.innerHTML = '';
  let wrongWordsString = "";

  if (wrongWordsSet.size > 0) {
    document.getElementById('wrong-words-box').style.display = 'block';
    let items = [];
    wrongWordsSet.forEach(wordStr => {
      items.push(wordStr);
      const li = document.createElement('li');
      li.textContent = wordStr;
      wrongWordsList.appendChild(li);
    });
    wrongWordsString = items.join(", ");
  } else {
    document.getElementById('wrong-words-box').style.display = 'none';
    wrongWordsString = "無答錯單字";
  }

  // ⏱️ 計算時間花費（秒數）
  const endTime = new Date();
  const timeSpentSeconds = startTime ? Math.round((endTime - startTime) / 1000) : 0;

  // 🤫 修正傳輸格式：改用 text/plain 繞過瀏覽器的 CORS 攔截，確保 100% 成功傳送
  if (GOOGLE_APP_URL && GOOGLE_APP_URL !== "YOUR_PASTED_URL_HERE") {
    fetch(GOOGLE_APP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify({
        successScore: successScore,
        errorScore: errorScore,
        wrongWords: wrongWordsString,
        timeSpent: timeSpentSeconds
      })
    }).catch(err => console.log("Silent logging status:", err));
  }

  document.getElementById('result-modal').classList.remove('hidden');
}

// 11. 監聽重新開始按鈕與網頁載入
document.getElementById('restart-btn').addEventListener('click', initGame);
window.addEventListener('DOMContentLoaded', initGame);
