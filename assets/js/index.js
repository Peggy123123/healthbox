$(function () {

  // 設定 AOS
  // 全局設定：
  // disable: 用於禁用 AOS 的設定。接受 'phone', 'tablet', 'mobile', 布林值，表達式或函數。
  // startEvent: AOS 初始化時觸發的 DOM 事件名稱，預設為 'DOMContentLoaded'。
  // initClassName: 初始化後應用的類名，預設為 'aos-init'。
  // animatedClassName: 動畫觸發時應用的類名，預設為 'aos-animate'。
  // useClassNames: 如果為 true，將 data-aos 的內容作為類名添加到元素上。
  // disableMutationObserver: 禁用自動變異檢測（高級設定）。
  // debounceDelay: 調整窗口大小時用於防抖的延遲（高級設定）。
  // throttleDelay: 滾動頁面時用於節流的延遲（高級設定）。
  // 可以在每個元素基礎上覆蓋的設定（通過 data-aos-* 屬性）：
  // offset: 原始觸發點的偏移量（以像素為單位）。
  // delay: 動畫延遲，範圍為 0 到 3000，步長為 50ms。
  // duration: 動畫持續時間，範圍為 0 到 3000，步長為 50ms。
  // easing: AOS 動畫的預設緩動函數。
  // once: 動畫是否只應觸發一次（當向下滾動時）。
  // mirror: 元素是否應在滾動過它們時執行動畫。
  // anchorPlacement: 定義元素相對於窗口的哪個位置應觸發動畫。
  AOS.init({
    // once: true,
  });
   
  var swiper = new Swiper('.heroSwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper2 = new Swiper('.specialSwiper', {
    slidesPerView: 1, // 一次顯示 4 個幻燈片
    slidesPerGroup: 1, // 每次移動 1 個幻燈片
    spaceBetween: 24, // 幻燈片之間的空間
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper3 = new Swiper('.buySwiper', {
    slidesPerView: 1, // 一次顯示 4 個幻燈片
    slidesPerGroup: 1, // 每次移動 1 個幻燈片
    spaceBetween: 24, // 幻燈片之間的空間
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.buy-swiper-button-next',
      prevEl: '.buy-swiper-button-prev',
    },
  });
});
