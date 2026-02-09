// Complete N5 Kanji Data - All 110 Kanji
const kanjiData = {
    "山": {
        readings: { onyomi: ["サン"], kunyomi: ["やま"] },
        meaning: ["tog'"],
        strokeCount: 3,
        examples: ["山", "ふじさん", "かざん"]
    },
    "川": {
        readings: { onyomi: ["セン"], kunyomi: ["かわ"] },
        meaning: ["daryo"],
        strokeCount: 3,
        examples: ["川", "おがわ", "かせん"]
    },
    "田": {
        readings: { onyomi: ["デン"], kunyomi: ["た"] },
        meaning: ["sholi dalasi"],
        strokeCount: 5,
        examples: ["田", "たんぼ", "いなだ"]
    },
    "日": {
        readings: { onyomi: ["ニチ", "ジツ"], kunyomi: ["ひ", "か"] },
        meaning: ["kun", "quyosh"],
        strokeCount: 4,
        examples: ["日", "にほん", "きょう", "にちようび"]
    },
    "月": {
        readings: { onyomi: ["ゲツ", "ガツ"], kunyomi: ["つき"] },
        meaning: ["oy", "oy (kalendar)"],
        strokeCount: 4,
        examples: ["月", "こんげつ", "げつようび", "いちがつ"]
    },
    "火": {
        readings: { onyomi: ["カ"], kunyomi: ["ひ"] },
        meaning: ["olov"],
        strokeCount: 4,
        examples: ["火", "かようび", "かざん", "かじ"]
    },
    "水": {
        readings: { onyomi: ["スイ"], kunyomi: ["みず"] },
        meaning: ["suv"],
        strokeCount: 4,
        examples: ["水", "すいようび", "すいどう", "すいえい"]
    },
    "木": {
        readings: { onyomi: ["モク", "ボク"], kunyomi: ["き", "こ"] },
        meaning: ["daraxt", "yog'och"],
        strokeCount: 4,
        examples: ["木", "もくようび", "もくざい", "もくぞう"]
    },
    "金": {
        readings: { onyomi: ["キン", "コン"], kunyomi: ["かね", "かな"] },
        meaning: ["pul", "oltin"],
        strokeCount: 8,
        examples: ["金", "きんようび", "おかね", "きんいろ"]
    },
    "土": {
        readings: { onyomi: ["ド", "ト"], kunyomi: ["つち"] },
        meaning: ["tuproq", "yer"],
        strokeCount: 3,
        examples: ["土", "どようび", "とち", "みやげ"]
    },
    "一": {
        readings: { onyomi: ["イチ", "イツ"], kunyomi: ["ひと"] },
        meaning: ["bir"],
        strokeCount: 1,
        examples: ["一", "ひとつ", "いちがつ", "ひとり"]
    },
    "二": {
        readings: { onyomi: ["ニ"], kunyomi: ["ふた"] },
        meaning: ["ikki"],
        strokeCount: 2,
        examples: ["二", "ふたつ", "にがつ", "ふたり"]
    },
    "三": {
        readings: { onyomi: ["サン"], kunyomi: ["み"] },
        meaning: ["uch"],
        strokeCount: 3,
        examples: ["三", "みっつ", "さんがつ", "さんにん"]
    },
    "四": {
        readings: { onyomi: ["シ"], kunyomi: ["よ", "よん"] },
        meaning: ["to'rt"],
        strokeCount: 5,
        examples: ["四", "よっつ", "しがつ", "よにん"]
    },
    "五": {
        readings: { onyomi: ["ゴ"], kunyomi: ["いつ"] },
        meaning: ["besh"],
        strokeCount: 4,
        examples: ["五", "いつつ", "ごがつ", "ごにん"]
    },
    "六": {
        readings: { onyomi: ["ロク"], kunyomi: ["む"] },
        meaning: ["olti"],
        strokeCount: 4,
        examples: ["六", "むっつ", "ろくがつ", "ろくにん"]
    },
    "七": {
        readings: { onyomi: ["シチ"], kunyomi: ["なな"] },
        meaning: ["yetti"],
        strokeCount: 2,
        examples: ["七", "ななつ", "しちがつ", "しちにん"]
    },
    "八": {
        readings: { onyomi: ["ハチ"], kunyomi: ["や"] },
        meaning: ["sakkiz"],
        strokeCount: 2,
        examples: ["八", "やっつ", "はちがつ", "はちにん"]
    },
    "九": {
        readings: { onyomi: ["キュウ", "ク"], kunyomi: ["ここの"] },
        meaning: ["to'qqiz"],
        strokeCount: 2,
        examples: ["九", "ここのつ", "くがつ", "きゅうにん"]
    },
    "十": {
        readings: { onyomi: ["ジュウ"], kunyomi: ["とお"] },
        meaning: ["o'n"],
        strokeCount: 2,
        examples: ["十", "じゅうえん", "じゅうがつ", "じゅうにん"]
    },
    "百": {
        readings: { onyomi: ["ヒャク"], kunyomi: [] },
        meaning: ["yuz"],
        strokeCount: 6,
        examples: ["百", "ひゃくえん", "さんびゃく", "ひゃっかてん"]
    },
    "千": {
        readings: { onyomi: ["セン"], kunyomi: ["ち"] },
        meaning: ["ming"],
        strokeCount: 3,
        examples: ["千", "せんえん", "さんぜん", "ちば"]
    },
    "万": {
        readings: { onyomi: ["マン"], kunyomi: [] },
        meaning: ["o'n ming"],
        strokeCount: 3,
        examples: ["万", "いちまん", "ひゃくまん", "まんねんひつ"]
    },
    "円": {
        readings: { onyomi: ["エン"], kunyomi: ["まる"] },
        meaning: ["yena", "doira"],
        strokeCount: 4,
        examples: ["円", "ひゃくえん", "せんえん", "まるい"]
    },
    "年": {
        readings: { onyomi: ["ネン"], kunyomi: ["とし"] },
        meaning: ["yil"],
        strokeCount: 6,
        examples: ["年", "ことし", "らいねん", "いちねんせい"]
    },
    "上": {
        readings: { onyomi: ["ジョウ"], kunyomi: ["うえ", "あ", "のぼ"] },
        meaning: ["yuqori", "tepaga"],
        strokeCount: 3,
        examples: ["上", "じょうず", "あがる", "うわぎ"]
    },
    "下": {
        readings: { onyomi: ["カ", "ゲ"], kunyomi: ["した", "さ", "くだ"] },
        meaning: ["past", "pastga"],
        strokeCount: 3,
        examples: ["下", "へた", "さがる", "ちか"]
    },
    "中": {
        readings: { onyomi: ["チュウ"], kunyomi: ["なか"] },
        meaning: ["o'rta", "ichida"],
        strokeCount: 4,
        examples: ["中", "ちゅうごく", "ちゅうがっこう", "ちゅうしん"]
    },
    "半": {
        readings: { onyomi: ["ハン"], kunyomi: ["なかば"] },
        meaning: ["yarim"],
        strokeCount: 5,
        examples: ["半", "はんぶん", "いちじはん", "はんとう"]
    },
    "分": {
        readings: { onyomi: ["ブン", "フン"], kunyomi: ["わ"] },
        meaning: ["daqiqa", "tushunish"],
        strokeCount: 4,
        examples: ["分", "じゅっぷん", "わかる", "じぶん"]
    },
    "人": {
        readings: { onyomi: ["ジン", "ニン"], kunyomi: ["ひと"] },
        meaning: ["odam"],
        strokeCount: 2,
        examples: ["人", "にほんじん", "にんげん", "さんにん"]
    },
    "子": {
        readings: { onyomi: ["シ", "ス"], kunyomi: ["こ"] },
        meaning: ["bola"],
        strokeCount: 3,
        examples: ["子", "こども", "じょし", "でんし"]
    },
    "女": {
        readings: { onyomi: ["ジョ", "ニョ"], kunyomi: ["おんな", "め"] },
        meaning: ["ayol"],
        strokeCount: 3,
        examples: ["女", "じょし", "じょせい", "おんなのこ"]
    },
    "男": {
        readings: { onyomi: ["ダン", "ナン"], kunyomi: ["おとこ"] },
        meaning: ["erkak"],
        strokeCount: 7,
        examples: ["男", "だんし", "だんせい", "おとこのこ"]
    },
    "目": {
        readings: { onyomi: ["モク"], kunyomi: ["め"] },
        meaning: ["ko'z"],
        strokeCount: 5,
        examples: ["目", "もくてき", "もくじ", "さんもく"]
    },
    "口": {
        readings: { onyomi: ["コウ", "ク"], kunyomi: ["くち"] },
        meaning: ["og'iz"],
        strokeCount: 3,
        examples: ["口", "じんこう", "でぐち", "くちべに"]
    },
    "耳": {
        readings: { onyomi: ["ジ"], kunyomi: ["みみ"] },
        meaning: ["quloq"],
        strokeCount: 6,
        examples: ["耳", "じびか", "きくらげ", "みみもと"]
    },
    "手": {
        readings: { onyomi: ["シュ"], kunyomi: ["て"] },
        meaning: ["qo'l"],
        strokeCount: 4,
        examples: ["手", "てがみ", "かしゅ", "しゅだん"]
    },
    "足": {
        readings: { onyomi: ["ソク"], kunyomi: ["あし", "た"] },
        meaning: ["oyoq", "oyoq (qism)"],
        strokeCount: 7,
        examples: ["足", "あしおと", "ふそく", "たりる"]
    },
    "力": {
        readings: { onyomi: ["リョク", "リキ"], kunyomi: ["ちから"] },
        meaning: ["kuch", "quvvat"],
        strokeCount: 2,
        examples: ["力", "どりょく", "でんりょく", "りきし"]
    },
    "父": {
        readings: { onyomi: ["フ"], kunyomi: ["ちち"] },
        meaning: ["ota"],
        strokeCount: 4,
        examples: ["父", "ちちおや", "ふぼ", "そふ"]
    },
    "母": {
        readings: { onyomi: ["ボ"], kunyomi: ["はは"] },
        meaning: ["ona"],
        strokeCount: 5,
        examples: ["母", "ははおや", "ふぼ", "そぼ"]
    },
    "先": {
        readings: { onyomi: ["セン"], kunyomi: ["さき"] },
        meaning: ["oldingi", "oldinda"],
        strokeCount: 6,
        examples: ["先", "せんせい", "せんげつ", "せんしゅう"]
    },
    "生": {
        readings: { onyomi: ["セイ", "ショウ"], kunyomi: ["い", "う", "なま"] },
        meaning: ["hayot", "tug'ilish"],
        strokeCount: 5,
        examples: ["生", "がくせい", "せんせい", "せいかつ"]
    },
    "学": {
        readings: { onyomi: ["ガク"], kunyomi: ["まな"] },
        meaning: ["o'qish", "o'rganish"],
        strokeCount: 8,
        examples: ["学", "がくせい", "がっこう", "だいがく"]
    },
    "校": {
        readings: { onyomi: ["コウ"], kunyomi: [] },
        meaning: ["maktab"],
        strokeCount: 10,
        examples: ["校", "がっこう", "こうちょう", "こうしゃ"]
    },
    "友": {
        readings: { onyomi: ["ユウ"], kunyomi: ["とも"] },
        meaning: ["do'st"],
        strokeCount: 4,
        examples: ["友", "ともだち", "ゆうじん", "しんゆう"]
    },
    "本": {
        readings: { onyomi: ["ホン"], kunyomi: ["もと"] },
        meaning: ["kitob", "kelib chiqish"],
        strokeCount: 5,
        examples: ["本", "にほん", "ほんや", "ほんとう"]
    },
    "毎": {
        readings: { onyomi: ["マイ"], kunyomi: [] },
        meaning: ["har"],
        strokeCount: 6,
        examples: ["毎", "まいにち", "まいしゅう", "まいとし"]
    },
    "何": {
        readings: { onyomi: ["カ"], kunyomi: ["なに", "なん"] },
        meaning: ["nima"],
        strokeCount: 7,
        examples: ["何", "なんじ", "なんにん", "なにか"]
    },
    "前": {
        readings: { onyomi: ["ゼン"], kunyomi: ["まえ"] },
        meaning: ["oldin", "olding"],
        strokeCount: 9,
        examples: ["前", "ぜんご", "なまえ", "ぜんじつ"]
    },
    "後": {
        readings: { onyomi: ["ゴ", "コウ"], kunyomi: ["あと", "うし", "のち"] },
        meaning: ["keyin", "orqada"],
        strokeCount: 9,
        examples: ["後", "うしろ", "ごご", "さいご"]
    },
    "外": {
        readings: { onyomi: ["ガイ", "ゲ"], kunyomi: ["そと", "はず"] },
        meaning: ["tashqari"],
        strokeCount: 5,
        examples: ["外", "がいこく", "がいしゅつ", "いがい"]
    },
    "左": {
        readings: { onyomi: ["サ"], kunyomi: ["ひだり"] },
        meaning: ["chap"],
        strokeCount: 5,
        examples: ["左", "さゆう", "ひだりがわ", "ひだりきき"]
    },
    "右": {
        readings: { onyomi: ["ユウ", "ウ"], kunyomi: ["みぎ"] },
        meaning: ["o'ng"],
        strokeCount: 5,
        examples: ["右", "さゆう", "みぎがわ", "みぎきき"]
    },
    "東": {
        readings: { onyomi: ["トウ"], kunyomi: ["ひがし"] },
        meaning: ["sharq"],
        strokeCount: 8,
        examples: ["東", "とうきょう", "とうほく", "かんとう"]
    },
    "西": {
        readings: { onyomi: ["セイ", "サイ"], kunyomi: ["にし"] },
        meaning: ["g'arb"],
        strokeCount: 6,
        examples: ["西", "せいよう", "かんさい", "にしにほん"]
    },
    "南": {
        readings: { onyomi: ["ナン"], kunyomi: ["みなみ"] },
        meaning: ["janub"],
        strokeCount: 9,
        examples: ["南", "なんべい", "とうなん", "みなみがわ"]
    },
    "北": {
        readings: { onyomi: ["ホク"], kunyomi: ["きた"] },
        meaning: ["shimol"],
        strokeCount: 5,
        examples: ["北", "ぺきん", "とうほく", "きたがわ"]
    },
    "名": {
        readings: { onyomi: ["メイ", "ミョウ"], kunyomi: ["な"] },
        meaning: ["ism"],
        strokeCount: 6,
        examples: ["名", "なまえ", "みょうじ", "ゆうめい"]
    },
    "牛": {
        readings: { onyomi: ["ギュウ"], kunyomi: ["うし"] },
        meaning: ["sigir"],
        strokeCount: 4,
        examples: ["牛", "ぎゅうにく", "ぎゅうにゅう", "こうし"]
    },
    "馬": {
        readings: { onyomi: ["バ"], kunyomi: ["うま", "ま"] },
        meaning: ["ot"],
        strokeCount: 10,
        examples: ["馬", "ばしゃ", "けいば", "こうま"]
    },
    "魚": {
        readings: { onyomi: ["ギョ"], kunyomi: ["さかな"] },
        meaning: ["baliq"],
        strokeCount: 11,
        examples: ["魚", "きんぎょ", "さかなや", "ねったいぎょ"]
    },
    "貝": {
        readings: { onyomi: ["バイ"], kunyomi: ["かい"] },
        meaning: ["mollyuska"],
        strokeCount: 7,
        examples: ["貝", "かいがら", "まきがい", "かいるい"]
    },
    "雨": {
        readings: { onyomi: ["ウ"], kunyomi: ["あめ", "あま"] },
        meaning: ["yomg'ir"],
        strokeCount: 8,
        examples: ["雨", "おおあめ", "うてん", "あまど"]
    },
    "天": {
        readings: { onyomi: ["テン"], kunyomi: ["あま"] },
        meaning: ["jannat", "osmon"],
        strokeCount: 4,
        examples: ["天", "てんき", "てんごく", "てんさい"]
    },
    "気": {
        readings: { onyomi: ["キ", "ケ"], kunyomi: [] },
        meaning: ["ruh", "energiya"],
        strokeCount: 6,
        examples: ["気", "てんき", "げんき", "にんき"]
    },
    "車": {
        readings: { onyomi: ["シャ"], kunyomi: ["くるま"] },
        meaning: ["mashina", "transport"],
        strokeCount: 7,
        examples: ["車", "でんしゃ", "じどうしゃ", "くるまいす"]
    },
    "門": {
        readings: { onyomi: ["モン"], kunyomi: ["かど"] },
        meaning: ["darvoza"],
        strokeCount: 8,
        examples: ["門", "せんもん", "もんか", "もんぜん"]
    },
    "午": {
        readings: { onyomi: ["ゴ"], kunyomi: [] },
        meaning: ["tush"],
        strokeCount: 4,
        examples: ["午", "ごぜん", "ごご", "しょうご"]
    },
    "大": {
        readings: { onyomi: ["ダイ", "タイ"], kunyomi: ["おお"] },
        meaning: ["katta", "keng"],
        strokeCount: 3,
        examples: ["大", "おおきい", "だいがく", "だいすき"]
    },
    "小": {
        readings: { onyomi: ["ショウ"], kunyomi: ["ちい", "こ", "お"] },
        meaning: ["kichik", "oz"],
        strokeCount: 3,
        examples: ["小", "ちいさい", "しょうがっこう", "しょうせつ"]
    },
    "高": {
        readings: { onyomi: ["コウ"], kunyomi: ["たか"] },
        meaning: ["baland", "qimmat"],
        strokeCount: 10,
        examples: ["高", "たかい", "こうこう", "さいこう"]
    },
    "安": {
        readings: { onyomi: ["アン"], kunyomi: ["やす"] },
        meaning: ["arzon", "xavfsiz"],
        strokeCount: 6,
        examples: ["安", "やすい", "あんしん", "あんぜん"]
    },
    "新": {
        readings: { onyomi: ["シン"], kunyomi: ["あたら", "あら", "にい"] },
        meaning: ["yangi"],
        strokeCount: 13,
        examples: ["新", "あたらしい", "しんぶん", "さいしん"]
    },
    "古": {
        readings: { onyomi: ["コ"], kunyomi: ["ふる"] },
        meaning: ["qadimgi", "eski"],
        strokeCount: 5,
        examples: ["古", "ふるい", "ちゅうこ", "こだい"]
    },
    "長": {
        readings: { onyomi: ["チョウ"], kunyomi: ["なが"] },
        meaning: ["uzun", "rahbar"],
        strokeCount: 8,
        examples: ["長", "ながい", "こうちょう", "ながさ"]
    },
    "多": {
        readings: { onyomi: ["タ"], kunyomi: ["おお"] },
        meaning: ["ko'p", "juda"],
        strokeCount: 6,
        examples: ["多", "おおい", "たしょう", "たすう"]
    },
    "少": {
        readings: { onyomi: ["ショウ"], kunyomi: ["すく", "すこ"] },
        meaning: ["oz", "kichik"],
        strokeCount: 4,
        examples: ["少", "すくない", "たしょう", "しょうねん"]
    },
    "早": {
        readings: { onyomi: ["ソウ", "サッ"], kunyomi: ["はや"] },
        meaning: ["erta", "tez"],
        strokeCount: 6,
        examples: ["早", "はやい", "そうちょう", "さっそく"]
    },
    "行": {
        readings: { onyomi: ["コウ", "ギョウ"], kunyomi: ["い", "おこな"] },
        meaning: ["borish", "o'tkazish"],
        strokeCount: 6,
        examples: ["行", "いく", "こうどう", "ぎんこう"]
    },
    "来": {
        readings: { onyomi: ["ライ"], kunyomi: ["く"] },
        meaning: ["kelish"],
        strokeCount: 7,
        examples: ["来", "くる", "らいねん", "らいげつ"]
    },
    "食": {
        readings: { onyomi: ["ショク"], kunyomi: ["た", "く"] },
        meaning: ["yeyish", "ovqat"],
        strokeCount: 9,
        examples: ["食", "たべる", "しょくじ", "しょくどう"]
    },
    "見": {
        readings: { onyomi: ["ケン"], kunyomi: ["み"] },
        meaning: ["ko'rish", "qarash"],
        strokeCount: 7,
        examples: ["見", "みる", "けんがく", "いけん"]
    },
    "入": {
        readings: { onyomi: ["ニュウ"], kunyomi: ["はい", "い"] },
        meaning: ["kirish"],
        strokeCount: 2,
        examples: ["入", "はいる", "いりぐち", "にゅうがく"]
    },
    "出": {
        readings: { onyomi: ["シュツ"], kunyomi: ["で", "だ"] },
        meaning: ["chiqish", "tashqariga chiqish"],
        strokeCount: 5,
        examples: ["出", "でる", "でぐち", "しゅっせき"]
    },
    "立": {
        readings: { onyomi: ["リツ"], kunyomi: ["た"] },
        meaning: ["turish"],
        strokeCount: 5,
        examples: ["立", "たつ", "こくりつ", "こんりゅう"]
    },
    "書": {
        readings: { onyomi: ["ショ"], kunyomi: ["か"] },
        meaning: ["yozish"],
        strokeCount: 10,
        examples: ["書", "かく", "じしょ", "としょかん"]
    },
    "言": {
        readings: { onyomi: ["ゲン", "ゴン"], kunyomi: ["い"] },
        meaning: ["aytish", "so'z"],
        strokeCount: 7,
        examples: ["言", "いう", "ことば", "げんご"]
    },
    "飲": {
        readings: { onyomi: ["イン"], kunyomi: ["の"] },
        meaning: ["ichish"],
        strokeCount: 12,
        examples: ["飲", "のむ", "のみもの", "いんしょく"]
    },
    "話": {
        readings: { onyomi: ["ワ"], kunyomi: ["はな", "はなし"] },
        meaning: ["gapirish", "hikoya"],
        strokeCount: 13,
        examples: ["話", "はなす", "でんわ", "かいわ"]
    },
    "読": {
        readings: { onyomi: ["ドク"], kunyomi: ["よ"] },
        meaning: ["o'qish"],
        strokeCount: 14,
        examples: ["読", "よむ", "どくしょ", "どくしゃ"]
    },
    "語": {
        readings: { onyomi: ["ゴ"], kunyomi: ["かた"] },
        meaning: ["til", "so'z"],
        strokeCount: 14,
        examples: ["語", "にほんご", "げんご", "ものがたり"]
    },
    "間": {
        readings: { onyomi: ["カン", "ケン"], kunyomi: ["あいだ", "ま"] },
        meaning: ["interval", "o'rtasida"],
        strokeCount: 12,
        examples: ["間", "じかん", "にんげん", "しゅんかん"]
    },
    "聞": {
        readings: { onyomi: ["ブン", "モン"], kunyomi: ["き"] },
        meaning: ["eshitish", "so'rash"],
        strokeCount: 14,
        examples: ["聞", "きく", "しんぶん", "きこえる"]
    },
    "買": {
        readings: { onyomi: ["バイ"], kunyomi: ["か"] },
        meaning: ["sotib olish"],
        strokeCount: 12,
        examples: ["買", "かう", "かいもの", "こうばい"]
    },
    "休": {
        readings: { onyomi: ["キュウ"], kunyomi: ["やす"] },
        meaning: ["dam olish", "bayram"],
        strokeCount: 6,
        examples: ["休", "やすむ", "きゅうじつ", "なつやすみ"]
    },
    "時": {
        readings: { onyomi: ["ジ"], kunyomi: ["とき"] },
        meaning: ["vaqt"],
        strokeCount: 10,
        examples: ["時", "じかん", "とけい", "いちじ"]
    },
    "週": {
        readings: { onyomi: ["シュウ"], kunyomi: [] },
        meaning: ["hafta"],
        strokeCount: 11,
        examples: ["週", "こんしゅう", "せんしゅう", "しゅうまつ"]
    },
    "道": {
        readings: { onyomi: ["ドウ"], kunyomi: ["みち"] },
        meaning: ["yo'l", "usul"],
        strokeCount: 12,
        examples: ["道", "どうろ", "どうぐ", "ほっかいどう"]
    },
    "今": {
        readings: { onyomi: ["コン", "キン"], kunyomi: ["いま"] },
        meaning: ["hozir"],
        strokeCount: 4,
        examples: ["今", "きょう", "こんげつ", "ことし"]
    },
    "会": {
        readings: { onyomi: ["カイ", "エ"], kunyomi: ["あ"] },
        meaning: ["yig'ilish", "assotsiatsiya"],
        strokeCount: 6,
        examples: ["会", "かいしゃ", "あう", "しゃかい"]
    },
    "社": {
        readings: { onyomi: ["シャ"], kunyomi: ["やしろ"] },
        meaning: ["kompaniya", "ibodatxona"],
        strokeCount: 7,
        examples: ["社", "かいしゃ", "しゃちょう", "じんじゃ"]
    },
    "店": {
        readings: { onyomi: ["テン"], kunyomi: ["みせ"] },
        meaning: ["do'kon", "magazin"],
        strokeCount: 8,
        examples: ["店", "てんいん", "しょてん", "きっさてん"]
    },
    "駅": {
        readings: { onyomi: ["エキ"], kunyomi: [] },
        meaning: ["stansiya"],
        strokeCount: 14,
        examples: ["駅", "えきまえ", "えきちょう", "ちかてつえき"]
    },
    "花": {
        readings: { onyomi: ["カ"], kunyomi: ["はな"] },
        meaning: ["gul"],
        strokeCount: 7,
        examples: ["花", "はなみ", "はなび", "かびん"]
    },
    "国": {
        readings: { onyomi: ["コク"], kunyomi: ["くに"] },
        meaning: ["mamlakat"],
        strokeCount: 8,
        examples: ["国", "ちゅうごく", "こっか", "こくさい"]
    },
    "白": {
        readings: { onyomi: ["ハク", "ビャク"], kunyomi: ["しろ", "しら"] },
        meaning: ["oq"],
        strokeCount: 5,
        examples: ["白", "しろい", "はくじん", "おもしろい"]
    },
    "空": {
        readings: { onyomi: ["クウ"], kunyomi: ["そら", "あ", "から"] },
        meaning: ["osmon", "bo'sh"],
        strokeCount: 8,
        examples: ["空", "くうき", "くうこう", "あく"]
    },
    "電": {
        readings: { onyomi: ["デン"], kunyomi: [] },
        meaning: ["elektr"],
        strokeCount: 13,
        examples: ["電", "でんき", "でんしゃ", "でんわ"]
    }
};

// Expanded Sentences - 50+ Sentences using N5 Kanji
const sentences = [
    {
        japanese: "あの{山|やま}はとてもたかいです",
        english: "Ana u tog' juda baland",
        level: "N5"
    },
    {
        japanese: "{川|かわ}のみずがきれいです",
        english: "Daryo suvi juda toza",
        level: "N5"
    },
    {
        japanese: "{田|た}んぼではたらきます",
        english: "Men sholi dalasida ishlayman",
        level: "N5"
    },
    {
        japanese: "きょうは{日|ひ}がきれいです",
        english: "Bugun quyosh juda chiroyli",
        level: "N5"
    },
    {
        japanese: "{月|つき}があかるいです",
        english: "Oy juda yorqin",
        level: "N5"
    },
    {
        japanese: "{火|ひ}をたいています",
        english: "Men olov yoqyapman",
        level: "N5"
    },
    {
        japanese: "{水|みず}をのみます",
        english: "Men suv ichaman",
        level: "N5"
    },
    {
        japanese: "おおきい{木|き}があります",
        english: "U yerda katta daraxt bor",
        level: "N5"
    },
    {
        japanese: "{金|かね}がすこしあります",
        english: "Menda ozgina pul bor",
        level: "N5"
    },
    {
        japanese: "{土|つち}をたがやします",
        english: "Men tuproqni shudgor qilaman",
        level: "N5"
    },
    {
        japanese: "{一|いち}からじゅうまでかぞえます",
        english: "Men birdan o'ngacha sanayman",
        level: "N5"
    },
    {
        japanese: "{百|ひゃく}えんあります",
        english: "Menda yuz yena bor",
        level: "N5"
    },
    {
        japanese: "{千|せん}のほしをみます",
        english: "Men minglab yulduzlarni ko'raman",
        level: "N5"
    },
    {
        japanese: "{万|まん}ねんひつで{書|か}きます",
        english: "Men ruchka bilan yozaman",
        level: "N5"
    },
    {
        japanese: "ことしはいい{年|とし}です",
        english: "Bu yil yaxshi yil",
        level: "N5"
    },
    {
        japanese: "{上|うえ}をみてください",
        english: "Iltimos, yuqoriga qarang",
        level: "N5"
    },
    {
        japanese: "{下|した}にあります",
        english: "U pastda joylashgan",
        level: "N5"
    },
    {
        japanese: "{中|なか}にはいります",
        english: "Men ichkariga kiraman",
        level: "N5"
    },
    {
        japanese: "{半|はん}ぷんまちます",
        english: "Men yarim daqiqa kutaman",
        level: "N5"
    },
    {
        japanese: "あの{人|ひと}はともだちです",
        english: "U odam mening do'stim",
        level: "N5"
    },
    {
        japanese: "{子|こ}どもがさんにんいます",
        english: "Mening uchta bolam bor",
        level: "N5"
    },
    {
        japanese: "{女|おんな}のこです",
        english: "U qiz bola",
        level: "N5"
    },
    {
        japanese: "{男|おとこ}のひとです",
        english: "U erkak kishi",
        level: "N5"
    },
    {
        japanese: "{目|め}がおおきいです",
        english: "Mening ko'zlarim katta",
        level: "N5"
    },
    {
        japanese: "{口|くち}をあけてください",
        english: "Iltimos, og'zingizni oching",
        level: "N5"
    },
    {
        japanese: "{耳|みみ}がきこえます",
        english: "Men qulog'im bilan eshitaman",
        level: "N5"
    },
    {
        japanese: "{手|て}をあげてください",
        english: "Iltimos, qo'lingizni ko'taring",
        level: "N5"
    },
    {
        japanese: "{足|あし}がながいです",
        english: "Mening oyoqlarim uzun",
        level: "N5"
    },
    {
        japanese: "{力|ちから}があります",
        english: "Menda kuch bor",
        level: "N5"
    },
    {
        japanese: "{父|ちち}とははがいます",
        english: "Mening otam va onam bor",
        level: "N5"
    },
    {
        japanese: "せんせいに{会|あ}います",
        english: "Men o'qituvchim bilan uchrashaman",
        level: "N5"
    },
    {
        japanese: "がく{生|せい}です",
        english: "Men talabaman",
        level: "N5"
    },
    {
        japanese: "がっこうへ{行|い}きます",
        english: "Men maktabga boraman",
        level: "N5"
    },
    {
        japanese: "ともだちと{話|はな}します",
        english: "Men do'stlarim bilan gaplashaman",
        level: "N5"
    },
    {
        japanese: "{本|ほん}をよみます",
        english: "Men kitob o'qiyman",
        level: "N5"
    },
    {
        japanese: "まいにち{食|た}べます",
        english: "Men har kuni ovqatlanaman",
        level: "N5"
    },
    {
        japanese: "これは{何|なん}ですか",
        english: "Bu nima?",
        level: "N5"
    },
    {
        japanese: "{前|まえ}とうしろ",
        english: "Old va orqa",
        level: "N5"
    },
    {
        japanese: "{外|そと}であそびます",
        english: "Men tashqarida o'ynayman",
        level: "N5"
    },
    {
        japanese: "{左|ひだり}とみぎ",
        english: "Chap va o'ng",
        level: "N5"
    },
    {
        japanese: "{東|ひがし}とにし",
        english: "Sharq va g'arb",
        level: "N5"
    },
    {
        japanese: "{南|みなみ}のくにです",
        english: "Bu janubiy mamlakat",
        level: "N5"
    },
    {
        japanese: "{北|きた}へいきます",
        english: "Men shimolga boraman",
        level: "N5"
    },
    {
        japanese: "なまえを{書|か}きます",
        english: "Men ismimni yozaman",
        level: "N5"
    },
    {
        japanese: "{牛|うし}のにくを{食|た}べます",
        english: "Men mol go'shti yeyman",
        level: "N5"
    },
    {
        japanese: "{馬|うま}にのります",
        english: "Men otga minaman",
        level: "N5"
    },
    {
        japanese: "{魚|さかな}を{買|か}います",
        english: "Men baliq sotib olaman",
        level: "N5"
    },
    {
        japanese: "{雨|あめ}がおおいです",
        english: "Yomg'ir ko'p yog'yapti",
        level: "N5"
    },
    {
        japanese: "きょうのてんきはいいです",
        english: "Bugun ob-havo yaxshi",
        level: "N5"
    },
    {
        japanese: "でんしゃで{来|き}ます",
        english: "Men poyezdda kelaman",
        level: "N5"
    },
    {
        japanese: "{門|もん}をでます",
        english: "Men darvozadan chiqaman",
        level: "N5"
    },
    {
        japanese: "ごぜん{九|く}じです",
        english: "Soat ertalab to'qqiz",
        level: "N5"
    },
    {
        japanese: "あたらしい{車|くるま}です",
        english: "Bu yangi mashina",
        level: "N5"
    },
    {
        japanese: "ふるい{本|ほん}です",
        english: "Bu eski kitob",
        level: "N5"
    },
    {
        japanese: "やすい{店|みせ}です",
        english: "Bu arzon do'kon",
        level: "N5"
    },
    {
        japanese: "{休|やす}みます",
        english: "Men dam olaman",
        level: "N5"
    },
    {
        japanese: "{今|いま}なんじですか",
        english: "Hozir soat nechi?",
        level: "N5"
    },
    {
        japanese: "かいしゃへ{行|い}きます",
        english: "Men kompaniyaga boraman",
        level: "N5"
    },
    {
        japanese: "えきの{前|まえ}です",
        english: "U stansiya oldida",
        level: "N5"
    },
    {
        japanese: "{花|はな}がきれいです",
        english: "Gullar juda chiroyli",
        level: "N5"
    },
    {
        japanese: "しろい{空|そら}です",
        english: "Bu oq osmon",
        level: "N5"
    },
    {
        japanese: "でんわを{話|はな}します",
        english: "Men telefon qilaman",
        level: "N5"
    }
];

// Expanded Test Sentences
// Expanded Test Sentences - 50+ Sentences
const testSentences = [
    // Existing 25 questions...
    {
        sentence: "あの__はとてもたかいです",
        correct: "山",
        options: ["山", "川", "田", "日"],
        english: "Ana u tog' juda baland"
    },
    {
        sentence: "__のみずがきれいです",
        correct: "川",
        options: ["火", "川", "木", "月"],
        english: "Daryo suvi juda toza"
    },
    {
        sentence: "__んぼではたらきます",
        correct: "田",
        options: ["田", "山", "水", "火"],
        english: "Men sholi dalasida ishlayman"
    },
    {
        sentence: "__があかるいです",
        correct: "月",
        options: ["月", "日", "火", "水"],
        english: "Oy juda yorqin"
    },
    {
        sentence: "__をのみます",
        correct: "水",
        options: ["水", "火", "木", "金"],
        english: "Men suv ichaman"
    },
    {
        sentence: "おおきい__があります",
        correct: "木",
        options: ["木", "山", "川", "田"],
        english: "U yerda katta daraxt bor"
    },
    {
        sentence: "__がすこしあります",
        correct: "金",
        options: ["金", "水", "火", "土"],
        english: "Menda ozgina pul bor"
    },
    {
        sentence: "__からじゅうまでかぞえます",
        correct: "一",
        options: ["一", "二", "三", "四"],
        english: "Men birdan o'ngacha sanayman"
    },
    {
        sentence: "__えんあります",
        correct: "百",
        options: ["百", "千", "万", "十"],
        english: "Menda yuz yena bor"
    },
    {
        sentence: "ことしはいい__です",
        correct: "年",
        options: ["年", "日", "月", "時"],
        english: "Bu yil yaxshi yil"
    },
    {
        sentence: "__をみてください",
        correct: "上",
        options: ["上", "下", "中", "外"],
        english: "Iltimos, yuqoriga qarang"
    },
    {
        sentence: "__にはいります",
        correct: "中",
        options: ["中", "上", "下", "前"],
        english: "Men ichkariga kiraman"
    },
    {
        sentence: "あの__はともだちです",
        correct: "人",
        options: ["人", "子", "女", "男"],
        english: "U odam mening do'stim"
    },
    {
        sentence: "__どもがさんにんいます",
        correct: "子",
        options: ["子", "女", "男", "人"],
        english: "Mening uchta bolam bor"
    },
    {
        sentence: "__がおおきいです",
        correct: "目",
        options: ["目", "口", "耳", "手"],
        english: "Mening ko'zlarim katta"
    },
    {
        sentence: "__をあけてください",
        correct: "口",
        options: ["口", "目", "耳", "手"],
        english: "Iltimos, og'zingizni oching"
    },
    {
        sentence: "__をあげてください",
        correct: "手",
        options: ["手", "足", "目", "口"],
        english: "Iltimos, qo'lingizni ko'taring"
    },
    {
        sentence: "__とははがいます",
        correct: "父",
        options: ["父", "母", "子", "友"],
        english: "Mening otam va onam bor"
    },
    {
        sentence: "がく__です",
        correct: "生",
        options: ["生", "先", "校", "友"],
        english: "Men talabaman"
    },
    {
        sentence: "__をよみます",
        correct: "本",
        options: ["本", "友", "学", "校"],
        english: "Men kitob o'qiyman"
    },
    {
        sentence: "これは__ですか",
        correct: "何",
        options: ["何", "誰", "どこ", "いつ"],
        english: "Bu nima?"
    },
    {
        sentence: "__とうしろ",
        correct: "前",
        options: ["前", "後", "左", "右"],
        english: "Old va orqa"
    },
    {
        sentence: "__であそびます",
        correct: "外",
        options: ["外", "中", "上", "下"],
        english: "Men tashqarida o'ynayman"
    },
    {
        sentence: "__とみぎ",
        correct: "左",
        options: ["左", "右", "前", "後"],
        english: "Chap va o'ng"
    },
    {
        sentence: "__のくにです",
        correct: "南",
        options: ["南", "北", "東", "西"],
        english: "Bu janubiy mamlakat"
    },
    // NEW QUESTIONS (25 more to make 50 total)
    {
        sentence: "__がふっています",
        correct: "雨",
        options: ["雨", "雪", "風", "雲"],
        english: "Yomg'ir yog'yapti"
    },
    {
        sentence: "__でがっこうへいきます",
        correct: "車",
        options: ["車", "電", "自", "飛"],
        english: "Maktabga mashinada boraman"
    },
    {
        sentence: "あたらしい__をかいました",
        correct: "本",
        options: ["本", "紙", "字", "書"],
        english: "Yangi kitob sotib oldim"
    },
    {
        sentence: "__をききます",
        correct: "音",
        options: ["音", "声", "聞", "耳"],
        english: "Ovoz eshitaman"
    },
    {
        sentence: "__がすきです",
        correct: "花",
        options: ["花", "草", "木", "葉"],
        english: "Gullarni yoqtiraman"
    },
    {
        sentence: "__をたべます",
        correct: "食",
        options: ["食", "飲", "飯", "米"],
        english: "Ovqat yeyman"
    },
    {
        sentence: "__にのります",
        correct: "電",
        options: ["電", "車", "機", "道"],
        english: "Poyezdga chiqaman"
    },
    {
        sentence: "__をかきます",
        correct: "字",
        options: ["字", "書", "筆", "紙"],
        english: "Yozaman"
    },
    {
        sentence: "__があります",
        correct: "時",
        options: ["時", "間", "分", "秒"],
        english: "Vaqt bor"
    },
    {
        sentence: "__がはやいです",
        correct: "早",
        options: ["早", "速", "急", "快"],
        english: "Tez"
    },
    {
        sentence: "__がおおいです",
        correct: "人",
        options: ["人", "民", "衆", "群"],
        english: "Odam ko'p"
    },
    {
        sentence: "__がすくないです",
        correct: "少",
        options: ["少", "小", "微", "細"],
        english: "Odam oz"
    },
    {
        sentence: "__がたかいです",
        correct: "高",
        options: ["高", "上", "大", "長"],
        english: "Baland"
    },
    {
        sentence: "__がやすいです",
        correct: "安",
        options: ["安", "低", "小", "少"],
        english: "Arzon"
    },
    {
        sentence: "__がながいです",
        correct: "長",
        options: ["長", "遠", "大", "高"],
        english: "Uzun"
    },
    {
        sentence: "__がみじかいです",
        correct: "短",
        options: ["短", "小", "少", "低"],
        english: "Qisqa"
    },
    {
        sentence: "__があついです",
        correct: "暑",
        options: ["暑", "熱", "温", "暖"],
        english: "Issiq"
    },
    {
        sentence: "__がさむいです",
        correct: "寒",
        options: ["寒", "冷", "涼", "凍"],
        english: "Sovuq"
    },
    {
        sentence: "__がおおきいです",
        correct: "大",
        options: ["大", "広", "巨", "太"],
        english: "Katta"
    },
    {
        sentence: "__がちいさいです",
        correct: "小",
        options: ["小", "少", "細", "微"],
        english: "Kichik"
    },
    {
        sentence: "__がたのしいです",
        correct: "楽",
        options: ["楽", "喜", "嬉", "愉"],
        english: "Qiziqarli"
    },
    {
        sentence: "__がかなしいです",
        correct: "悲",
        options: ["悲", "哀", "痛", "苦"],
        english: "G'amgin"
    },
    {
        sentence: "__がうれしいです",
        correct: "嬉",
        options: ["嬉", "喜", "楽", "幸"],
        english: "Baxtli"
    },
    {
        sentence: "__がおもしろいです",
        correct: "面",
        options: ["面", "楽", "興", "有"],
        english: "Qiziqarli"
    },
    {
        sentence: "__がつまらないです",
        correct: "詰",
        options: ["詰", "退", "飽", "無"],
        english: "Zerikarli"
    },
    {
        sentence: "__がむずかしいです",
        correct: "難",
        options: ["難", "困", "複", "煩"],
        english: "Qiyin"
    },
    {
        sentence: "__がやさしいです",
        correct: "易",
        options: ["易", "優", "簡", "単"],
        english: "Oson"
    },
    {
        sentence: "__がきれいです",
        correct: "美",
        options: ["美", "麗", "清", "潔"],
        english: "Chiroyli"
    },
    {
        sentence: "__がきたないです",
        correct: "汚",
        options: ["汚", "穢", "濁", "乱"],
        english: "Iflos"
    },
    {
        sentence: "__がつよいです",
        correct: "強",
        options: ["強", "剛", "丈", "丈"],
        english: "Kuchli"
    },
    {
        sentence: "__がよわいです",
        correct: "弱",
        options: ["弱", "柔", "軟", "細"],
        english: "Zaif"
    },
    {
        sentence: "__がはやいです",
        correct: "速",
        options: ["速", "急", "迅", "快"],
        english: "Tez"
    },
    {
        sentence: "__がおそいです",
        correct: "遅",
        options: ["遅", "緩", "慢", "徐"],
        english: "Sekin"
    },
    {
        sentence: "__がおいしいです",
        correct: "美",
        options: ["美", "旨", "甘", "香"],
        english: "Mazali"
    },
    {
        sentence: "__がまずいです",
        correct: "不",
        options: ["不", "悪", "劣", "粗"],
        english: "Yomon"
    },
    {
        sentence: "__がいいです",
        correct: "良",
        options: ["良", "善", "好", "優"],
        english: "Yaxshi"
    },
    {
        sentence: "__がわるいです",
        correct: "悪",
        options: ["悪", "害", "毒", "邪"],
        english: "Yomon"
    },
    {
        sentence: "__がひろいです",
        correct: "広",
        options: ["広", "大", "拡", "寛"],
        english: "Keng"
    },
    {
        sentence: "__がせまいです",
        correct: "狭",
        options: ["狭", "小", "窄", "細"],
        english: "Tor"
    },
    {
        sentence: "__がふかいです",
        correct: "深",
        options: ["深", "奥", "底", "淵"],
        english: "Chuqur"
    },
    {
        sentence: "__があさいです",
        correct: "浅",
        options: ["浅", "低", "短", "小"],
        english: "Sayoz"
    },
    {
        sentence: "__がおもいです",
        correct: "重",
        options: ["重", "沈", "濃", "厚"],
        english: "Og'ir"
    },
    {
        sentence: "__がかるいです",
        correct: "軽",
        options: ["軽", "薄", "弱", "小"],
        english: "Yengil"
    },
    {
        sentence: "__がかたいです",
        correct: "硬",
        options: ["硬", "固", "堅", "強"],
        english: "Qattiq"
    },
    {
        sentence: "__がやわらかいです",
        correct: "柔",
        options: ["柔", "軟", "弱", "軽"],
        english: "Yumshoq"
    }
];