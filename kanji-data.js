// Complete N5 Kanji Data - All 110 Kanji
const kanjiData = {
    "山": {
        readings: { onyomi: ["サン"], kunyomi: ["やま"] },
        meaning: ["mountain"],
        strokeCount: 3,
        examples: ["山", "富士山", "火山"]
    },
    "川": {
        readings: { onyomi: ["セン"], kunyomi: ["かわ"] },
        meaning: ["river"],
        strokeCount: 3,
        examples: ["川", "小川", "河川"]
    },
    "田": {
        readings: { onyomi: ["デン"], kunyomi: ["た"] },
        meaning: ["rice field"],
        strokeCount: 5,
        examples: ["田", "田んぼ", "稻田"]
    },
    "日": {
        readings: { onyomi: ["ニチ", "ジツ"], kunyomi: ["ひ", "か"] },
        meaning: ["day", "sun"],
        strokeCount: 4,
        examples: ["日", "日本", "今日", "日曜日"]
    },
    "月": {
        readings: { onyomi: ["ゲツ", "ガツ"], kunyomi: ["つき"] },
        meaning: ["month", "moon"],
        strokeCount: 4,
        examples: ["月", "今月", "月曜日", "一月"]
    },
    "火": {
        readings: { onyomi: ["カ"], kunyomi: ["ひ"] },
        meaning: ["fire"],
        strokeCount: 4,
        examples: ["火", "火曜日", "火山", "火事"]
    },
    "水": {
        readings: { onyomi: ["スイ"], kunyomi: ["みず"] },
        meaning: ["water"],
        strokeCount: 4,
        examples: ["水", "水曜日", "水道", "水泳"]
    },
    "木": {
        readings: { onyomi: ["モク", "ボク"], kunyomi: ["き", "こ"] },
        meaning: ["tree", "wood"],
        strokeCount: 4,
        examples: ["木", "木曜日", "木材", "木造"]
    },
    "金": {
        readings: { onyomi: ["キン", "コン"], kunyomi: ["かね", "かな"] },
        meaning: ["money", "gold"],
        strokeCount: 8,
        examples: ["金", "金曜日", "お金", "金色"]
    },
    "土": {
        readings: { onyomi: ["ド", "ト"], kunyomi: ["つち"] },
        meaning: ["soil", "earth"],
        strokeCount: 3,
        examples: ["土", "土曜日", "土地", "土産"]
    },
    "一": {
        readings: { onyomi: ["イチ", "イツ"], kunyomi: ["ひと"] },
        meaning: ["one"],
        strokeCount: 1,
        examples: ["一", "一つ", "一月", "一人"]
    },
    "二": {
        readings: { onyomi: ["ニ"], kunyomi: ["ふた"] },
        meaning: ["two"],
        strokeCount: 2,
        examples: ["二", "二つ", "二月", "二人"]
    },
    "三": {
        readings: { onyomi: ["サン"], kunyomi: ["み"] },
        meaning: ["three"],
        strokeCount: 3,
        examples: ["三", "三つ", "三月", "三人"]
    },
    "四": {
        readings: { onyomi: ["シ"], kunyomi: ["よ", "よん"] },
        meaning: ["four"],
        strokeCount: 5,
        examples: ["四", "四つ", "四月", "四人"]
    },
    "五": {
        readings: { onyomi: ["ゴ"], kunyomi: ["いつ"] },
        meaning: ["five"],
        strokeCount: 4,
        examples: ["五", "五つ", "五月", "五人"]
    },
    "六": {
        readings: { onyomi: ["ロク"], kunyomi: ["む"] },
        meaning: ["six"],
        strokeCount: 4,
        examples: ["六", "六つ", "六月", "六人"]
    },
    "七": {
        readings: { onyomi: ["シチ"], kunyomi: ["なな"] },
        meaning: ["seven"],
        strokeCount: 2,
        examples: ["七", "七つ", "七月", "七人"]
    },
    "八": {
        readings: { onyomi: ["ハチ"], kunyomi: ["や"] },
        meaning: ["eight"],
        strokeCount: 2,
        examples: ["八", "八つ", "八月", "八人"]
    },
    "九": {
        readings: { onyomi: ["キュウ", "ク"], kunyomi: ["ここの"] },
        meaning: ["nine"],
        strokeCount: 2,
        examples: ["九", "九つ", "九月", "九人"]
    },
    "十": {
        readings: { onyomi: ["ジュウ"], kunyomi: ["とお"] },
        meaning: ["ten"],
        strokeCount: 2,
        examples: ["十", "十円", "十月", "十人"]
    },
    "百": {
        readings: { onyomi: ["ヒャク"], kunyomi: [] },
        meaning: ["hundred"],
        strokeCount: 6,
        examples: ["百", "百円", "三百", "百貨店"]
    },
    "千": {
        readings: { onyomi: ["セン"], kunyomi: ["ち"] },
        meaning: ["thousand"],
        strokeCount: 3,
        examples: ["千", "千円", "三千", "千葉"]
    },
    "万": {
        readings: { onyomi: ["マン"], kunyomi: [] },
        meaning: ["ten thousand"],
        strokeCount: 3,
        examples: ["万", "一万", "百万", "万年筆"]
    },
    "円": {
        readings: { onyomi: ["エン"], kunyomi: ["まる"] },
        meaning: ["yen", "circle"],
        strokeCount: 4,
        examples: ["円", "百円", "千円", "円い"]
    },
    "年": {
        readings: { onyomi: ["ネン"], kunyomi: ["とし"] },
        meaning: ["year"],
        strokeCount: 6,
        examples: ["年", "今年", "来年", "一年生"]
    },
    "上": {
        readings: { onyomi: ["ジョウ"], kunyomi: ["うえ", "あ", "のぼ"] },
        meaning: ["above", "up"],
        strokeCount: 3,
        examples: ["上", "上手", "上がる", "上着"]
    },
    "下": {
        readings: { onyomi: ["カ", "ゲ"], kunyomi: ["した", "さ", "くだ"] },
        meaning: ["below", "down"],
        strokeCount: 3,
        examples: ["下", "下手", "下がる", "地下"]
    },
    "中": {
        readings: { onyomi: ["チュウ"], kunyomi: ["なか"] },
        meaning: ["middle", "inside"],
        strokeCount: 4,
        examples: ["中", "中国", "中学校", "中心"]
    },
    "半": {
        readings: { onyomi: ["ハン"], kunyomi: ["なかば"] },
        meaning: ["half"],
        strokeCount: 5,
        examples: ["半", "半分", "一時半", "半島"]
    },
    "分": {
        readings: { onyomi: ["ブン", "フン"], kunyomi: ["わ"] },
        meaning: ["minute", "understand"],
        strokeCount: 4,
        examples: ["分", "十分", "分かる", "自分"]
    },
    "人": {
        readings: { onyomi: ["ジン", "ニン"], kunyomi: ["ひと"] },
        meaning: ["person"],
        strokeCount: 2,
        examples: ["人", "日本人", "人間", "三人"]
    },
    "子": {
        readings: { onyomi: ["シ", "ス"], kunyomi: ["こ"] },
        meaning: ["child"],
        strokeCount: 3,
        examples: ["子", "子供", "女子", "電子"]
    },
    "女": {
        readings: { onyomi: ["ジョ", "ニョ"], kunyomi: ["おんな", "め"] },
        meaning: ["woman"],
        strokeCount: 3,
        examples: ["女", "女子", "女性", "女の子"]
    },
    "男": {
        readings: { onyomi: ["ダン", "ナン"], kunyomi: ["おとこ"] },
        meaning: ["man"],
        strokeCount: 7,
        examples: ["男", "男子", "男性", "男の子"]
    },
    "目": {
        readings: { onyomi: ["モク"], kunyomi: ["め"] },
        meaning: ["eye"],
        strokeCount: 5,
        examples: ["目", "目的", "目次", "三目"]
    },
    "口": {
        readings: { onyomi: ["コウ", "ク"], kunyomi: ["くち"] },
        meaning: ["mouth"],
        strokeCount: 3,
        examples: ["口", "人口", "出口", "口紅"]
    },
    "耳": {
        readings: { onyomi: ["ジ"], kunyomi: ["みみ"] },
        meaning: ["ear"],
        strokeCount: 6,
        examples: ["耳", "耳鼻科", "木耳", "耳元"]
    },
    "手": {
        readings: { onyomi: ["シュ"], kunyomi: ["て"] },
        meaning: ["hand"],
        strokeCount: 4,
        examples: ["手", "手紙", "歌手", "手段"]
    },
    "足": {
        readings: { onyomi: ["ソク"], kunyomi: ["あし", "た"] },
        meaning: ["foot", "leg"],
        strokeCount: 7,
        examples: ["足", "足音", "不足", "足りる"]
    },
    "力": {
        readings: { onyomi: ["リョク", "リキ"], kunyomi: ["ちから"] },
        meaning: ["power", "strength"],
        strokeCount: 2,
        examples: ["力", "努力", "電力", "力士"]
    },
    "父": {
        readings: { onyomi: ["フ"], kunyomi: ["ちち"] },
        meaning: ["father"],
        strokeCount: 4,
        examples: ["父", "父親", "父母", "祖父"]
    },
    "母": {
        readings: { onyomi: ["ボ"], kunyomi: ["はは"] },
        meaning: ["mother"],
        strokeCount: 5,
        examples: ["母", "母親", "父母", "祖母"]
    },
    "先": {
        readings: { onyomi: ["セン"], kunyomi: ["さき"] },
        meaning: ["previous", "ahead"],
        strokeCount: 6,
        examples: ["先", "先生", "先月", "先週"]
    },
    "生": {
        readings: { onyomi: ["セイ", "ショウ"], kunyomi: ["い", "う", "なま"] },
        meaning: ["life", "birth"],
        strokeCount: 5,
        examples: ["生", "学生", "先生", "生活"]
    },
    "学": {
        readings: { onyomi: ["ガク"], kunyomi: ["まな"] },
        meaning: ["study", "learning"],
        strokeCount: 8,
        examples: ["学", "学生", "学校", "大学"]
    },
    "校": {
        readings: { onyomi: ["コウ"], kunyomi: [] },
        meaning: ["school"],
        strokeCount: 10,
        examples: ["校", "学校", "校長", "校舎"]
    },
    "友": {
        readings: { onyomi: ["ユウ"], kunyomi: ["とも"] },
        meaning: ["friend"],
        strokeCount: 4,
        examples: ["友", "友達", "友人", "親友"]
    },
    "本": {
        readings: { onyomi: ["ホン"], kunyomi: ["もと"] },
        meaning: ["book", "origin"],
        strokeCount: 5,
        examples: ["本", "日本", "本屋", "本当"]
    },
    "毎": {
        readings: { onyomi: ["マイ"], kunyomi: [] },
        meaning: ["every"],
        strokeCount: 6,
        examples: ["毎", "毎日", "毎週", "毎年"]
    },
    "何": {
        readings: { onyomi: ["カ"], kunyomi: ["なに", "なん"] },
        meaning: ["what"],
        strokeCount: 7,
        examples: ["何", "何時", "何人", "何か"]
    },
    "前": {
        readings: { onyomi: ["ゼン"], kunyomi: ["まえ"] },
        meaning: ["before", "front"],
        strokeCount: 9,
        examples: ["前", "前後", "名前", "前日"]
    },
    "後": {
        readings: { onyomi: ["ゴ", "コウ"], kunyomi: ["あと", "うし", "のち"] },
        meaning: ["after", "behind"],
        strokeCount: 9,
        examples: ["後", "後ろ", "午後", "最後"]
    },
    "外": {
        readings: { onyomi: ["ガイ", "ゲ"], kunyomi: ["そと", "はず"] },
        meaning: ["outside"],
        strokeCount: 5,
        examples: ["外", "外国", "外出", "以外"]
    },
    "左": {
        readings: { onyomi: ["サ"], kunyomi: ["ひだり"] },
        meaning: ["left"],
        strokeCount: 5,
        examples: ["左", "左右", "左側", "左利き"]
    },
    "右": {
        readings: { onyomi: ["ユウ", "ウ"], kunyomi: ["みぎ"] },
        meaning: ["right"],
        strokeCount: 5,
        examples: ["右", "左右", "右側", "右利き"]
    },
    "東": {
        readings: { onyomi: ["トウ"], kunyomi: ["ひがし"] },
        meaning: ["east"],
        strokeCount: 8,
        examples: ["東", "東京", "東北", "関東"]
    },
    "西": {
        readings: { onyomi: ["セイ", "サイ"], kunyomi: ["にし"] },
        meaning: ["west"],
        strokeCount: 6,
        examples: ["西", "西洋", "関西", "西日本"]
    },
    "南": {
        readings: { onyomi: ["ナン"], kunyomi: ["みなみ"] },
        meaning: ["south"],
        strokeCount: 9,
        examples: ["南", "南米", "東南", "南側"]
    },
    "北": {
        readings: { onyomi: ["ホク"], kunyomi: ["きた"] },
        meaning: ["north"],
        strokeCount: 5,
        examples: ["北", "北京", "東北", "北側"]
    },
    "名": {
        readings: { onyomi: ["メイ", "ミョウ"], kunyomi: ["な"] },
        meaning: ["name"],
        strokeCount: 6,
        examples: ["名", "名前", "名字", "有名"]
    },
    "牛": {
        readings: { onyomi: ["ギュウ"], kunyomi: ["うし"] },
        meaning: ["cow"],
        strokeCount: 4,
        examples: ["牛", "牛肉", "牛乳", "子牛"]
    },
    "馬": {
        readings: { onyomi: ["バ"], kunyomi: ["うま", "ま"] },
        meaning: ["horse"],
        strokeCount: 10,
        examples: ["馬", "馬車", "競馬", "子馬"]
    },
    "魚": {
        readings: { onyomi: ["ギョ"], kunyomi: ["さかな"] },
        meaning: ["fish"],
        strokeCount: 11,
        examples: ["魚", "金魚", "魚屋", "熱帯魚"]
    },
    "貝": {
        readings: { onyomi: ["バイ"], kunyomi: ["かい"] },
        meaning: ["shellfish"],
        strokeCount: 7,
        examples: ["貝", "貝殻", "巻貝", "貝類"]
    },
    "雨": {
        readings: { onyomi: ["ウ"], kunyomi: ["あめ", "あま"] },
        meaning: ["rain"],
        strokeCount: 8,
        examples: ["雨", "大雨", "雨天", "雨戸"]
    },
    "天": {
        readings: { onyomi: ["テン"], kunyomi: ["あま"] },
        meaning: ["heaven", "sky"],
        strokeCount: 4,
        examples: ["天", "天気", "天国", "天才"]
    },
    "気": {
        readings: { onyomi: ["キ", "ケ"], kunyomi: [] },
        meaning: ["spirit", "energy"],
        strokeCount: 6,
        examples: ["気", "天気", "元気", "人気"]
    },
    "車": {
        readings: { onyomi: ["シャ"], kunyomi: ["くるま"] },
        meaning: ["car", "vehicle"],
        strokeCount: 7,
        examples: ["車", "電車", "自動車", "車椅子"]
    },
    "門": {
        readings: { onyomi: ["モン"], kunyomi: ["かど"] },
        meaning: ["gate"],
        strokeCount: 8,
        examples: ["門", "専門", "門下", "門前"]
    },
    "午": {
        readings: { onyomi: ["ゴ"], kunyomi: [] },
        meaning: ["noon"],
        strokeCount: 4,
        examples: ["午", "午前", "午後", "正午"]
    },
    "大": {
        readings: { onyomi: ["ダイ", "タイ"], kunyomi: ["おお"] },
        meaning: ["big", "large"],
        strokeCount: 3,
        examples: ["大", "大きい", "大学", "大好き"]
    },
    "小": {
        readings: { onyomi: ["ショウ"], kunyomi: ["ちい", "こ", "お"] },
        meaning: ["small", "little"],
        strokeCount: 3,
        examples: ["小", "小さい", "小学校", "小説"]
    },
    "高": {
        readings: { onyomi: ["コウ"], kunyomi: ["たか"] },
        meaning: ["high", "expensive"],
        strokeCount: 10,
        examples: ["高", "高い", "高校", "最高"]
    },
    "安": {
        readings: { onyomi: ["アン"], kunyomi: ["やす"] },
        meaning: ["cheap", "safe"],
        strokeCount: 6,
        examples: ["安", "安い", "安心", "安全"]
    },
    "新": {
        readings: { onyomi: ["シン"], kunyomi: ["あたら", "あら", "にい"] },
        meaning: ["new"],
        strokeCount: 13,
        examples: ["新", "新しい", "新聞", "最新"]
    },
    "古": {
        readings: { onyomi: ["コ"], kunyomi: ["ふる"] },
        meaning: ["old"],
        strokeCount: 5,
        examples: ["古", "古い", "中古", "古代"]
    },
    "長": {
        readings: { onyomi: ["チョウ"], kunyomi: ["なが"] },
        meaning: ["long", "leader"],
        strokeCount: 8,
        examples: ["長", "長い", "校長", "長さ"]
    },
    "多": {
        readings: { onyomi: ["タ"], kunyomi: ["おお"] },
        meaning: ["many", "much"],
        strokeCount: 6,
        examples: ["多", "多い", "多少", "多数"]
    },
    "少": {
        readings: { onyomi: ["ショウ"], kunyomi: ["すく", "すこ"] },
        meaning: ["few", "little"],
        strokeCount: 4,
        examples: ["少", "少ない", "多少", "少年"]
    },
    "早": {
        readings: { onyomi: ["ソウ", "サッ"], kunyomi: ["はや"] },
        meaning: ["early", "fast"],
        strokeCount: 6,
        examples: ["早", "早い", "早朝", "早速"]
    },
    "行": {
        readings: { onyomi: ["コウ", "ギョウ"], kunyomi: ["い", "おこな"] },
        meaning: ["go", "conduct"],
        strokeCount: 6,
        examples: ["行", "行く", "行動", "銀行"]
    },
    "来": {
        readings: { onyomi: ["ライ"], kunyomi: ["く"] },
        meaning: ["come"],
        strokeCount: 7,
        examples: ["来", "来る", "来年", "来月"]
    },
    "食": {
        readings: { onyomi: ["ショク"], kunyomi: ["た", "く"] },
        meaning: ["eat", "food"],
        strokeCount: 9,
        examples: ["食", "食べる", "食事", "食堂"]
    },
    "見": {
        readings: { onyomi: ["ケン"], kunyomi: ["み"] },
        meaning: ["see", "look"],
        strokeCount: 7,
        examples: ["見", "見る", "見学", "意見"]
    },
    "入": {
        readings: { onyomi: ["ニュウ"], kunyomi: ["はい", "い"] },
        meaning: ["enter"],
        strokeCount: 2,
        examples: ["入", "入る", "入口", "入学"]
    },
    "出": {
        readings: { onyomi: ["シュツ"], kunyomi: ["で", "だ"] },
        meaning: ["exit", "go out"],
        strokeCount: 5,
        examples: ["出", "出る", "出口", "出席"]
    },
    "立": {
        readings: { onyomi: ["リツ"], kunyomi: ["た"] },
        meaning: ["stand"],
        strokeCount: 5,
        examples: ["立", "立つ", "国立", "建立"]
    },
    "書": {
        readings: { onyomi: ["ショ"], kunyomi: ["か"] },
        meaning: ["write"],
        strokeCount: 10,
        examples: ["書", "書く", "辞書", "図書館"]
    },
    "言": {
        readings: { onyomi: ["ゲン", "ゴン"], kunyomi: ["い"] },
        meaning: ["say", "word"],
        strokeCount: 7,
        examples: ["言", "言う", "言葉", "言語"]
    },
    "飲": {
        readings: { onyomi: ["イン"], kunyomi: ["の"] },
        meaning: ["drink"],
        strokeCount: 12,
        examples: ["飲", "飲む", "飲み物", "飲食"]
    },
    "話": {
        readings: { onyomi: ["ワ"], kunyomi: ["はな", "はなし"] },
        meaning: ["talk", "story"],
        strokeCount: 13,
        examples: ["話", "話す", "電話", "会話"]
    },
    "読": {
        readings: { onyomi: ["ドク"], kunyomi: ["よ"] },
        meaning: ["read"],
        strokeCount: 14,
        examples: ["読", "読む", "読書", "読者"]
    },
    "語": {
        readings: { onyomi: ["ゴ"], kunyomi: ["かた"] },
        meaning: ["language", "word"],
        strokeCount: 14,
        examples: ["語", "日本語", "言語", "物語"]
    },
    "間": {
        readings: { onyomi: ["カン", "ケン"], kunyomi: ["あいだ", "ま"] },
        meaning: ["interval", "between"],
        strokeCount: 12,
        examples: ["間", "時間", "人間", "瞬間"]
    },
    "聞": {
        readings: { onyomi: ["ブン", "モン"], kunyomi: ["き"] },
        meaning: ["hear", "ask"],
        strokeCount: 14,
        examples: ["聞", "聞く", "新聞", "聞こえる"]
    },
    "買": {
        readings: { onyomi: ["バイ"], kunyomi: ["か"] },
        meaning: ["buy"],
        strokeCount: 12,
        examples: ["買", "買う", "買い物", "購買"]
    },
    "休": {
        readings: { onyomi: ["キュウ"], kunyomi: ["やす"] },
        meaning: ["rest", "holiday"],
        strokeCount: 6,
        examples: ["休", "休む", "休日", "夏休み"]
    },
    "時": {
        readings: { onyomi: ["ジ"], kunyomi: ["とき"] },
        meaning: ["time"],
        strokeCount: 10,
        examples: ["時", "時間", "時計", "一時"]
    },
    "週": {
        readings: { onyomi: ["シュウ"], kunyomi: [] },
        meaning: ["week"],
        strokeCount: 11,
        examples: ["週", "今週", "先週", "週末"]
    },
    "道": {
        readings: { onyomi: ["ドウ"], kunyomi: ["みち"] },
        meaning: ["road", "way"],
        strokeCount: 12,
        examples: ["道", "道路", "道具", "北海道"]
    },
    "今": {
        readings: { onyomi: ["コン", "キン"], kunyomi: ["いま"] },
        meaning: ["now"],
        strokeCount: 4,
        examples: ["今", "今日", "今月", "今年"]
    },
    "会": {
        readings: { onyomi: ["カイ", "エ"], kunyomi: ["あ"] },
        meaning: ["meeting", "association"],
        strokeCount: 6,
        examples: ["会", "会社", "会う", "社会"]
    },
    "社": {
        readings: { onyomi: ["シャ"], kunyomi: ["やしろ"] },
        meaning: ["company", "shrine"],
        strokeCount: 7,
        examples: ["社", "会社", "社長", "神社"]
    },
    "店": {
        readings: { onyomi: ["テン"], kunyomi: ["みせ"] },
        meaning: ["shop", "store"],
        strokeCount: 8,
        examples: ["店", "店員", "書店", "喫茶店"]
    },
    "駅": {
        readings: { onyomi: ["エキ"], kunyomi: [] },
        meaning: ["station"],
        strokeCount: 14,
        examples: ["駅", "駅前", "駅長", "地下鉄駅"]
    },
    "花": {
        readings: { onyomi: ["カ"], kunyomi: ["はな"] },
        meaning: ["flower"],
        strokeCount: 7,
        examples: ["花", "花見", "花火", "花瓶"]
    },
    "国": {
        readings: { onyomi: ["コク"], kunyomi: ["くに"] },
        meaning: ["country"],
        strokeCount: 8,
        examples: ["国", "中国", "国家", "国際"]
    },
    "白": {
        readings: { onyomi: ["ハク", "ビャク"], kunyomi: ["しろ", "しら"] },
        meaning: ["white"],
        strokeCount: 5,
        examples: ["白", "白い", "白人", "面白い"]
    },
    "空": {
        readings: { onyomi: ["クウ"], kunyomi: ["そら", "あ", "から"] },
        meaning: ["sky", "empty"],
        strokeCount: 8,
        examples: ["空", "空気", "空港", "空く"]
    },
    "電": {
        readings: { onyomi: ["デン"], kunyomi: [] },
        meaning: ["electricity"],
        strokeCount: 13,
        examples: ["電", "電気", "電車", "電話"]
    }
};

// Expanded Sentences - 50+ Sentences using N5 Kanji
const sentences = [
    {
        japanese: "あの{山|やま}はとても{高|たか}いです",
        english: "That mountain is very high",
        level: "N5"
    },
    {
        japanese: "{川|かわ}の{水|みず}がきれいです",
        english: "The river water is clean",
        level: "N5"
    },
    {
        japanese: "{田|た}んぼで働きます",
        english: "I work in the rice fields",
        level: "N5"
    },
    {
        japanese: "今日は{日|ひ}がきれいです",
        english: "The sun is beautiful today",
        level: "N5"
    },
    {
        japanese: "{月|つき}が明るいです",
        english: "The moon is bright",
        level: "N5"
    },
    {
        japanese: "{火|ひ}をたいています",
        english: "I'm building a fire",
        level: "N5"
    },
    {
        japanese: "{水|みず}を飲みます",
        english: "I drink water",
        level: "N5"
    },
    {
        japanese: "大きい{木|き}があります",
        english: "There is a big tree",
        level: "N5"
    },
    {
        japanese: "{金|かね}が{少|すこ}しあります",
        english: "I have a little money",
        level: "N5"
    },
    {
        japanese: "{土|つち}を耕します",
        english: "I cultivate the soil",
        level: "N5"
    },
    {
        japanese: "{一|いち}から{十|じゅう}まで数えます",
        english: "I count from one to ten",
        level: "N5"
    },
    {
        japanese: "{百|ひゃく}円あります",
        english: "I have 100 yen",
        level: "N5"
    },
    {
        japanese: "{千|せん}の星を見ます",
        english: "I see thousands of stars",
        level: "N5"
    },
    {
        japanese: "{万|まん}年筆で{書|か}きます",
        english: "I write with a fountain pen",
        level: "N5"
    },
    {
        japanese: "今年はいい{年|とし}です",
        english: "This is a good year",
        level: "N5"
    },
    {
        japanese: "{上|うえ}を見てください",
        english: "Please look up",
        level: "N5"
    },
    {
        japanese: "{下|した}にあります",
        english: "It's below",
        level: "N5"
    },
    {
        japanese: "{中|なか}に入ります",
        english: "I enter inside",
        level: "N5"
    },
    {
        japanese: "{半|はん}{分|ふん}待ちます",
        english: "I wait for half a minute",
        level: "N5"
    },
    {
        japanese: "あの{人|ひと}は{友|とも}だちです",
        english: "That person is my friend",
        level: "N5"
    },
    {
        japanese: "{子|こ}どもが{三|さん}{人|にん}います",
        english: "I have three children",
        level: "N5"
    },
    {
        japanese: "{女|おんな}の{子|こ}です",
        english: "She is a girl",
        level: "N5"
    },
    {
        japanese: "{男|おとこ}の{人|ひと}です",
        english: "He is a man",
        level: "N5"
    },
    {
        japanese: "{目|め}が{大|おお}きいです",
        english: "My eyes are big",
        level: "N5"
    },
    {
        japanese: "{口|くち}を開けてください",
        english: "Please open your mouth",
        level: "N5"
    },
    {
        japanese: "{耳|みみ}が聞こえます",
        english: "I can hear with my ears",
        level: "N5"
    },
    {
        japanese: "{手|て}を上げてください",
        english: "Please raise your hand",
        level: "N5"
    },
    {
        japanese: "{足|あし}が{長|なが}いです",
        english: "My legs are long",
        level: "N5"
    },
    {
        japanese: "{力|ちから}があります",
        english: "I have strength",
        level: "N5"
    },
    {
        japanese: "{父|ちち}と{母|はは}がいます",
        english: "I have a father and mother",
        level: "N5"
    },
    {
        japanese: "{先|せん}{生|せい}に{会|あ}います",
        english: "I meet my teacher",
        level: "N5"
    },
    {
        japanese: "{学|がく}{生|せい}です",
        english: "I am a student",
        level: "N5"
    },
    {
        japanese: "{学|がっ}{校|こう}へ{行|い}きます",
        english: "I go to school",
        level: "N5"
    },
    {
        japanese: "{友|とも}だちと{話|はな}します",
        english: "I talk with friends",
        level: "N5"
    },
    {
        japanese: "{本|ほん}を{読|よ}みます",
        english: "I read a book",
        level: "N5"
    },
    {
        japanese: "{毎|まい}{日|にち}{食|た}べます",
        english: "I eat every day",
        level: "N5"
    },
    {
        japanese: "これは{何|なん}ですか",
        english: "What is this?",
        level: "N5"
    },
    {
        japanese: "{前|まえ}と{後|うし}ろ",
        english: "Front and back",
        level: "N5"
    },
    {
        japanese: "{外|そと}で遊びます",
        english: "I play outside",
        level: "N5"
    },
    {
        japanese: "{左|ひだり}と{右|みぎ}",
        english: "Left and right",
        level: "N5"
    },
    {
        japanese: "{東|ひがし}と{西|にし}",
        english: "East and west",
        level: "N5"
    },
    {
        japanese: "{南|みなみ}の{国|くに}です",
        english: "It's a southern country",
        level: "N5"
    },
    {
        japanese: "{北|きた}へ{行|い}きます",
        english: "I go north",
        level: "N5"
    },
    {
        japanese: "{名|な}前を{書|か}きます",
        english: "I write my name",
        level: "N5"
    },
    {
        japanese: "{牛|うし}の{肉|にく}を{食|た}べます",
        english: "I eat beef",
        level: "N5"
    },
    {
        japanese: "{馬|うま}に乗ります",
        english: "I ride a horse",
        level: "N5"
    },
    {
        japanese: "{魚|さかな}を{買|か}います",
        english: "I buy fish",
        level: "N5"
    },
    {
        japanese: "{雨|あめ}が{多|おお}いです",
        english: "There is a lot of rain",
        level: "N5"
    },
    {
        japanese: "今日の{天|てん}{気|き}はいいです",
        english: "Today's weather is good",
        level: "N5"
    },
    {
        japanese: "{電|でん}{車|しゃ}で{来|き}ます",
        english: "I come by train",
        level: "N5"
    },
    {
        japanese: "{門|もん}を出ます",
        english: "I go out the gate",
        level: "N5"
    },
    {
        japanese: "{午|ご}{前|ぜん}{九|く}時です",
        english: "It's 9:00 AM",
        level: "N5"
    },
    {
        japanese: "{新|あたら}しい{車|くるま}です",
        english: "It's a new car",
        level: "N5"
    },
    {
        japanese: "{古|ふる}い{本|ほん}です",
        english: "It's an old book",
        level: "N5"
    },
    {
        japanese: "{安|やす}い{店|みせ}です",
        english: "It's a cheap shop",
        level: "N5"
    },
    {
        japanese: "{休|やす}みます",
        english: "I rest",
        level: "N5"
    },
    {
        japanese: "{今|いま}{何|なん}時ですか",
        english: "What time is it now?",
        level: "N5"
    },
    {
        japanese: "{会|かい}{社|しゃ}へ{行|い}きます",
        english: "I go to the company",
        level: "N5"
    },
    {
        japanese: "{駅|えき}の{前|まえ}です",
        english: "It's in front of the station",
        level: "N5"
    },
    {
        japanese: "{花|はな}がきれいです",
        english: "The flowers are beautiful",
        level: "N5"
    },
    {
        japanese: "{白|しろ}い{空|そら}です",
        english: "It's a white sky",
        level: "N5"
    },
    {
        japanese: "{電|でん}{話|わ}をします",
        english: "I make a phone call",
        level: "N5"
    }
];

// Expanded Test Sentences
const testSentences = [
    {
        sentence: "あの__はとても高いです",
        correct: "山",
        options: ["山", "川", "田", "日"],
        english: "That mountain is very high"
    },
    {
        sentence: "__の水がきれいです",
        correct: "川",
        options: ["火", "川", "木", "月"],
        english: "The river water is clean"
    },
    {
        sentence: "__んぼで働きます",
        correct: "田",
        options: ["田", "山", "水", "火"],
        english: "I work in the rice fields"
    },
    {
        sentence: "__が明るいです",
        correct: "月",
        options: ["月", "日", "火", "水"],
        english: "The moon is bright"
    },
    {
        sentence: "__を飲みます",
        correct: "水",
        options: ["水", "火", "木", "金"],
        english: "I drink water"
    },
    {
        sentence: "大きい__があります",
        correct: "木",
        options: ["木", "山", "川", "田"],
        english: "There is a big tree"
    },
    {
        sentence: "__が少しあります",
        correct: "金",
        options: ["金", "水", "火", "土"],
        english: "I have a little money"
    },
    {
        sentence: "__から十まで数えます",
        correct: "一",
        options: ["一", "二", "三", "四"],
        english: "I count from one to ten"
    },
    {
        sentence: "__円あります",
        correct: "百",
        options: ["百", "千", "万", "十"],
        english: "I have 100 yen"
    },
    {
        sentence: "今年はいい__です",
        correct: "年",
        options: ["年", "日", "月", "時"],
        english: "This is a good year"
    },
    {
        sentence: "__を見てください",
        correct: "上",
        options: ["上", "下", "中", "外"],
        english: "Please look up"
    },
    {
        sentence: "__に入ります",
        correct: "中",
        options: ["中", "上", "下", "前"],
        english: "I enter inside"
    },
    {
        sentence: "あの__は友だちです",
        correct: "人",
        options: ["人", "子", "女", "男"],
        english: "That person is my friend"
    },
    {
        sentence: "__どもが三人います",
        correct: "子",
        options: ["子", "女", "男", "人"],
        english: "I have three children"
    },
    {
        sentence: "__が大きいです",
        correct: "目",
        options: ["目", "口", "耳", "手"],
        english: "My eyes are big"
    },
    {
        sentence: "__を開けてください",
        correct: "口",
        options: ["口", "目", "耳", "手"],
        english: "Please open your mouth"
    },
    {
        sentence: "__を上げてください",
        correct: "手",
        options: ["手", "足", "目", "口"],
        english: "Please raise your hand"
    },
    {
        sentence: "__と母がいます",
        correct: "父",
        options: ["父", "母", "子", "友"],
        english: "I have a father and mother"
    },
    {
        sentence: "__生です",
        correct: "学",
        options: ["学", "先", "校", "友"],
        english: "I am a student"
    },
    {
        sentence: "__を読みます",
        correct: "本",
        options: ["本", "友", "学", "校"],
        english: "I read a book"
    },
    {
        sentence: "これは__ですか",
        correct: "何",
        options: ["何", "誰", "どこ", "いつ"],
        english: "What is this?"
    },
    {
        sentence: "__と後ろ",
        correct: "前",
        options: ["前", "後", "左", "右"],
        english: "Front and back"
    },
    {
        sentence: "__で遊びます",
        correct: "外",
        options: ["外", "中", "上", "下"],
        english: "I play outside"
    },
    {
        sentence: "__と右",
        correct: "左",
        options: ["左", "右", "前", "後"],
        english: "Left and right"
    },
    {
        sentence: "__の国です",
        correct: "南",
        options: ["南", "北", "東", "西"],
        english: "It's a southern country"
    }
];