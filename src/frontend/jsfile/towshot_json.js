// jsonデータの内容
const images = [
    {
        "path": "../img/horiguchi.jpeg",
        "name": "堀口恭司選手",
        "caption": "元RIZIN・Bellatorバンタム級王者"
    },
    {
        "path": "../img/satoshi.jpeg",
        "name": "ホベルト・サトシ・ソウザ選手",
        "caption": "現RIZINライト級王者"
    },
    {
        "path": "../img/archuleta.jpeg",
        "name": "フアン・アーチュレッタ選手",
        "caption": "元Bellatorバンタム級王者・現RIZINバンタム級王者"
    },
    {
        "path": "../img/inoue.jpeg",
        "name": "井上直樹・浅倉カンナ・斎藤裕選手",
        "caption": "RIZINファイター、左から"
    },
    {
        "path": "../img/sasaki.jpeg",
        "name": "佐々木憂流迦選手",
        "caption": "RIZINファザー級"
    },
    {
        "path": "../img/takizawa.jpeg",
        "name": "瀧澤謙太選手",
        "caption": "RIZINバンタム級"
    },
    {
        "path": "../img/yachi.jpeg",
        "name": "矢地祐介選手",
        "caption": "RIZINライト級"
    },
    {
        "path": "../img/suzuki.jpeg",
        "name": "鈴木千裕選手",
        "caption": "現RIZINフェザー級王者"
    },
];

let img;
let caption;
let div;

for(let i = 0; i < images.length; i++) {
    // ※<img src="../img/horiguchi.jpeg"></img>こちらを作成する※
    // createElementメソッドでhtmlのimgタグを生成
    img = document.createElement('img');

    // 下記ソースは右の内容のイメージ<img src="img/img01.jpg">src属性を作成
    // jsonデータである変数imagesのインデックスを指定する
    img.setAttribute('src', images[i].path);


    // ※<div class="inner"><p>元Bellatorバンタム級王者・元RIZINバンタム級王者<span>堀口恭司選手</span></p></div>こちらを作成する※
    caption = document.createElement('div');
    caption.className = 'inner';
    caption.innerHTML = '<p>' + images[i].caption + '<span>' + images[i].name + '</span></p>';


    // ※<div class="photo"></div>こちらを作成する※
    div = document.createElement('div');
    div.className = 'photo';

    //<div class="photo"></div>こちらの中に、変数imgとcaptionを引数で持たす
    div.appendChild(img);
    div.appendChild(caption);

    // img_unitの親要素に.appendChildでimg(div)の子要素を格納する
    document.getElementById('img_unit').appendChild(div);
}