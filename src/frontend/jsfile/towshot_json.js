// jsonデータの内容
const images = [
    {
        "path": "../img/horiguchi.jpeg",
        "name": "name01",
        "caption": "コメント1"
    },
    {
        "path": "../img/satoshi.jpeg",
        "name": "name02",
        "caption": "コメント2"
    },
    {
        "path": "../img/archuleta.jpeg",
        "name": "name03",
        "caption": "コメント3"
    },
    {
        "path": "../img/inoue.jpeg",
        "name": "name04",
        "caption": "コメント4"
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