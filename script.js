const hiragana = {
    "あ": "a",   "い": "i",   "う": "u",   "え": "e",   "お": "o",
    "か": "ka",  "き": "ki",  "く": "ku",  "け": "ke",  "こ": "ko",
    "さ": "sa",  "し": "shi", "す": "su",  "せ": "se",  "そ": "so",
    "た": "ta",  "ち": "chi", "つ": "tsu","て": "te",  "と": "to",
    "な": "na",  "に": "ni",  "ぬ": "nu",  "ね": "ne",  "の": "no",
    "は": "ha",  "ひ": "hi",  "ふ": "fu",  "へ": "he",  "ほ": "ho",
    "ま": "ma",  "み": "mi",  "む": "mu",  "め": "me",  "も": "mo",
    "や": "ya",              "ゆ": "yu",              "よ": "yo",
    "ら": "ra",  "り": "ri",  "る": "ru",  "れ": "re",  "ろ": "ro",
    "わ": "wa",                          "を": "wo",
    "ん": "n"
};

const katakana = {
    "ア": "a",   "イ": "i",   "ウ": "u",   "エ": "e",   "オ": "o",
    "カ": "ka",  "キ": "ki",  "ク": "ku",  "ケ": "ke",  "コ": "ko",
    "サ": "sa",  "シ": "shi", "ス": "su",  "セ": "se",  "ソ": "so",
    "タ": "ta",  "チ": "chi", "ツ": "tsu","テ": "te",  "ト": "to",
    "ナ": "na",  "ニ": "ni",  "ヌ": "nu",  "ネ": "ne",  "ノ": "no",
    "ハ": "ha",  "ヒ": "hi",  "フ": "fu",  "ヘ": "he",  "ホ": "ho",
    "マ": "ma",  "ミ": "mi",  "ム": "mu",  "メ": "me",  "モ": "mo",
    "ヤ": "ya",              "ユ": "yu",              "ヨ": "yo",
    "ラ": "ra",  "リ": "ri",  "ル": "ru",  "レ": "re",  "ロ": "ro",
    "ワ": "wa",                          "ヲ": "wo",
    "ン": "n"
};

let correct = 0;
let wrong = 0;
let currentKana = "";
let currentAnswer = "";

function nextQuestion() {
    const mode = document.querySelector("input[name=mode]:checked").value;
    const dict = mode === "hiragana" ? hiragana : katakana;

    const keys = Object.keys(dict);
    currentKana = keys[Math.floor(Math.random() * keys.length)];
    currentAnswer = dict[currentKana];

    document.getElementById("question").textContent = currentKana;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
}

document.getElementById("submit").addEventListener("click", () => {
    const ans = document.getElementById("answer").value.trim().toLowerCase();

    if (ans === currentAnswer) {
        correct++;
        document.getElementById("result").textContent = "✔ 正確！";
        document.getElementById("result").style.color = "green";
    } else {
        wrong++;
        document.getElementById("result").textContent = `✘ 錯誤（正確：${currentAnswer}）`;
        document.getElementById("result").style.color = "red";
    }

    document.getElementById("score").textContent =
        `答對：${correct}　答錯：${wrong}`;

    setTimeout(nextQuestion, 800);
});

nextQuestion();
