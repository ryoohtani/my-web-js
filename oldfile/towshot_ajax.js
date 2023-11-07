// XMLHttpRequestはajaxを行うためのオブジェ
let ajax = new XMLHttpRequest(); //readyStateプロパティの結果は、0のunsentでインスタンスができた
// openメソッドで、ajax通信を行うための相手方のアドレス
ajax.open('GET', 'https://h2o-space.com/htmlbook/images.php');//readyStateプロパティの結果は、1のopenedでopenedメソッドを利用した
ajax.responseType = 'json';
// 4行目のファイルに対してリクエストを送るのがsendメソッド
// ファイルに情報を送ることも可能、なければ引数null
// リクエストに対して、レスポンスのタイプを指定するのが、responseTypeプロパティ
ajax.send(null);


ajax.onreadystatechange = function() {
    // readyStateでajaxのステータスを更新している ここからはステータスは2以降行われる
    if(ajax.readyState === 4 && ajax.status === 200){
        for (let i = 0; i < this.response.length; i++) {
            let data = this.response[i];

        // towshot_json.jsに記載されてる内容と同じ
            let img = document.createElement('img');
            img.setAttribute('src', data.path);

            let caption = document.createElement('div');
            caption.className = 'inner';
            caption.innerHTML = '<p>' + data.caption + '<span>' + data.name + '</span></p>';

            let div = document.createElement('div');
            div.className = 'photo';
            div.appendChild(img);
            div.appendChild(caption);

            document.getElementById('img_unit').appendChild(div);
        }
    };
};