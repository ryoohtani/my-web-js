// プロパティはSwiperのライブラリの内容を使用しています
class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            // 画像のスクロールアニメーション
            effect: 'coverflow',
            // 左右矢印に沿って無限にループできる
            loop: true,
            // ハンドカーソル
            grabCursor: true,
            centeredSlides: true,
            // 画像が横にスライドするまでのディレイの秒数を記載
            speed: 1000,
            // 表示されている画像をviewに何枚掲載するか(1024px以下までは1枚の画像表示)
            slidesPerView: 1,
            // ウィンドウサイズに合わせて表示枚数を変える
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                }
            },
        });
    }
    start() {
        // 画像が自動でスライド
        this.swiper.params.autoplay = {
            delay: 4000,
            // マウス操作でのスライド後でも機械的にスライドできる
            disableOnInteraction: false
        } 
        this.swiper.autoplay.start();
    }
}