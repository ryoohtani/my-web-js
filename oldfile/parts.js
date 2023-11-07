document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('buy');
    btn.addEventListener('click', () => {
        btn.disabled = true;
    });
});

// DOMContentLoadedを記載すると、htmlが読み込まれてからjsを実行することになる
document.addEventListener('DOMContentLoaded', function() {
// querySelectorでinoutタグのemail属性を作成
    const email = document.querySelector('input[name="email"]')
    // フォーム以外をクリックした際、カラーをピンクにするイベントをblurで実装
    email.addEventListener('blur', () => {
        if(email.value === '') {
            email.style.backgroundColor = '#fcc';
            // nextElementSiblingというのはタグの隣にあるタグの要素をのことを指す
            email.nextElementSibling.innerHTML = '※ メールアドレスをご記入ください'
        } else {
            email.style.backgroundColor = '#fff';
            email.nextElementSibling.innerHTML = '';
        }
    });
});


// 同意から送信するというボタン
document.addEventListener('DOMContentLoaded', function() {
    const agree = document.getElementById('agree');
    // チェックを押下したら、バナー出現
    agree.addEventListener('change', () => {
    // チェックボックスが付いていればボタン押下可能、flaseであればクリック可能
        document.getElementById('submit').disabled = !agree.checked
    });
});


// 郵便番号判定
const zip_pattern = /^\d{3}-?\d{4}$/g;
let zip = '123-4567';

if(zip_pattern.test(zip) === true) {
    document.write('正しく入力されました');
} else {
    document.write('郵便番号は xxx-xxxxの書式で入力してください')
}



const child = document.querySelector('.child');
const cb = function() {
    alert('intersectiong')
}
const io = new IntersectionObserver(cb);
io.observe(child)