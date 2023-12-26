//訂餐流程
const cartContainerSm  = document.querySelector('.cart-container-sm');
const personalOrderlSm = document.getElementById('personalOrderlSm'); //手機版選擇門市

//載入手機版選擇門市畫面
function init() {
    cartContainerSm.innerHTML = `
    <div class="select-store-sm text-center pt-s-10 overflow-auto" id="selectStoreSm">
    <div>
    <h3 class="mt-5 mb-s-10">選擇門市</h3>
    <form action="">
      <select class="form-select w-50 mx-auto mb-s-10" aria-label="Default select example">
        <option value="信義安和店">信義安和店</option>
        <option value="台北車站店">台北車站店</option>
        <option value="新北板橋店">新北板橋店</option>
      </select>
        <div class="form-check w-25 mx-auto mb-s-4 ">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="個人訂餐">
          <label class="form-check-label" for="flexRadioDefault1">
            個人訂餐
          </label>
        </div>
        <div class="form-check w-25 mx-auto mb-s-10">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="揪團訂餐" checked>
          <label class="form-check-label" for="flexRadioDefault2">
            揪團訂餐
          </label>
        </div>
      <button type="submit" class="start-order-btn-sm btn btn-primary py-2 px-4 text-white fw-bold">開始訂餐！</button>
    </form>
  </div>
</div>`;
    getStoreData();
}
init()

//取得所選門市資料
let StoreData={};
function getStoreData(){
    const startOrderBtnSm = document.querySelector('.start-order-btn-sm');
    startOrderBtnSm.addEventListener('click',e=>{
        e.preventDefault();
        StoreData.store = document.querySelector('.form-select').value;
        StoreData.form = document.querySelector('.form-check-input[name="flexRadioDefault"]:checked').value;
        if(StoreData.form === '個人訂餐'){
            cartContainerSm.innerHTML='';
        }else if(StoreData.form === '揪團訂餐'){
            cartContainerSm.innerHTML=`
            <div class="select-store-sm text-center overflow-auto">
                <h3 class="mt-s-20 mb-s-20">揪團連結</h3>
                <p>複製連結</p>
                <div class="input-group mb-s-20 w-75 mx-auto">
                <input type="text" class="form-control" value="http://healthbox/fdgdgvef" placeholder="複製連結" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-copy text-primary"></i></span>
                </div>
                <button type="button" class="start-order-btn-sm btn btn-primary py-2 px-4 text-white fw-bold">開始訂餐！</button>
                </div>
                </div>`
        };
        const startOrderBtnSm = document.querySelector('.start-order-btn-sm');
        if(StoreData.form === '揪團訂餐'){
            startOrderBtnSm.addEventListener('click',e=>{
                cartContainerSm.innerHTML='';
            })
        }

        addCartBtnGo();
    })
    
}
//監聽所有加入購物車按鈕
const addCartBtn = document.querySelectorAll('.add-cart-btn');
const watchCart = document.querySelector('.watch-cart'); //查看購物車按鈕
const cartNum = document.querySelector('.cart-num');

let cartData = {};
cartData.num=0;
function addCartBtnGo(){
    addCartBtn.forEach(item=>{
        item.addEventListener('click',e=>{
            cartData.food = e.target.getAttribute('data-id');
            cartData.num ++;
            watchCart.classList.remove('d-none');
            cartNum.textContent = `(${cartData.num})`
        })
    })
};
//監聽查看購物車按鈕
watchCart.addEventListener('click',e=>{
    if (StoreData.form === '個人訂餐'){
        cartContainerSm.innerHTML = `
        <div class="select-store-sm text-center overflow-auto" id="personalOrderlSm"> 
             <div class="text-end pt-4 pe-4"><a href="#"><i class="fa-solid fa-x text-primary fs-4 close"></i></a></div> 
             <div class="d-flex justify-content-center mt-2 mb-5">
              <span>個人</span>
                <label class="mx-2">
                  <input type="checkbox" class="checkbox">
                  <span class="btn-box btn-box-personal">
                    <span class="circle-btn circle-btn-personal"></span>
                  </span>
              </label>
              <span>揪團</span>
            </div> 
            購物車內容 
             <div>
              <h3 class="text-center">你的訂單<span class="store-name"></span></h3>
              <ul class="mt-5 ps-0">
                <li class="col-11 mx-auto d-flex justify-content-evenly mb-3">
                  <img src="../assets/images/bento 1.png" alt="Photo" class="w-25">
                  <div class="d-flex flex-column justify-content-evenly">
                    <p style="width:100px">雞胸肉燕麥餐</p>
                    <div class="d-flex justify-content-between">
                      <button class="border-0 rounded-circle bg-primary">
                        <i class="fa-solid fa-minus  text-white"></i>
                      </button>
                      <span class="text-primary text-grey-500">1</span>
                      <button class="border-0 rounded-circle bg-primary">
                        <i class="fa-solid fa-plus text-white"></i>
                    </div>         
                  </div>
                  <div class="d-flex flex-column justify-content-evenly text-center">
                    <div>
                      <div class="mb-1 text-grey-500">$150</div>
                      <div class="mb-1 text-grey-400"><del>$150</del></div>
                    <i class="fa-solid fa-trash text-primary"></i>
                  </div>  
                </li>
                <li class="col-11 mx-auto d-flex justify-content-evenly mb-3">
                  <img src="../assets/images/bento 2.png" alt="Photo" class="w-25">
                  <div class="d-flex flex-column justify-content-evenly">
                    <p style="width:100px">力量源泉牛小排餐</p>
                    <div class="d-flex justify-content-between">
                      <button class="border-0 rounded-circle bg-primary">
                        <i class="fa-solid fa-minus  text-white"></i>
                      </button>
                      <span class="text-primary text-grey-500">1</span>
                      <button class="border-0 rounded-circle bg-primary">
                        <i class="fa-solid fa-plus text-white"></i>
                    </div>         
                  </div>
                  <div class="d-flex flex-column justify-content-evenly text-center">
                    <div>
                      <div class="mb-1 text-grey-500">$200</div>
                      <div class="mb-1 text-grey-400"><del>$180</del></div>
                    <i class="fa-solid fa-trash text-primary"></i>
                  </div>  
                </li>
              </ul>
              <div class="col-10 mx-auto">
                <div class=" py-3 border-top border-bottom border-grey-400">
                  <div class="d-flex justify-content-between">
                    <p>小計</p>
                    <p class="fw-bold">$350</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-0">折扣</p>
                    <p class="mb-0 fw-bold">$20</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <p>總計</p>
                  <p class="fw-bold">$330</p>
                </div>
              </div>
              <div class="col-10 mx-auto">
              <button type="button" class="btn btn-primary text-white fw-bold w-75">前往結帳</button>
              </div>
            </div>       
        </div>`
    }else if(StoreData.form === '揪團訂餐'){
        cartContainerSm.innerHTML =`<div class="select-store-sm text-center overflow-auto">
        <div class="text-end pt-4 pe-4"><a href="#"><i class="fa-solid fa-x text-primary fs-4 close"></i></a></div>
          <!-- 切換開關按鈕 -->
          <div class="d-flex justify-content-center mt-2 mb-3">
            <span>個人</span>
              <label class="mx-2">
                <input type="checkbox" class="checkbox">
                <span class="btn-box btn-box-group">
                  <span class="circle-btn circle-btn-group"></span>
                </span>
            </label>
            <span>揪團</span>
          </div>
          <!-- 揪團連結 -->
          <div class="mb-5">
            <p class="text-center">揪團連結</p>
            <div class="input-group mb-3 w-75 mx-auto">
              <input type="text" class="form-control" value="http://healthbox/fdgdgvef" placeholder="複製連結" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-copy text-primary"></i></span>
            </div>
          </div>
          <!-- 購物車內容 -->
          <div>
            <h3 class="text-center">你的訂單<span class="store-name"></span></h3>
            <ul class="mt-5 ps-0">
              <li class="col-11 mx-auto d-flex justify-content-evenly mb-3">
                <img src="../assets/images/bento 1.png" alt="Photo" class="w-25">
                <div class="d-flex flex-column justify-content-evenly">
                  <p style="width:100px">雞胸肉燕麥餐</p>
                  <div class="d-flex justify-content-between">
                    <button class="border-0 rounded-circle bg-primary">
                      <i class="fa-solid fa-minus  text-white"></i>
                    </button>
                    <span class="text-primary text-grey-500">1</span>
                    <button class="border-0 rounded-circle bg-primary">
                      <i class="fa-solid fa-plus text-white"></i>
                  </div>         
                </div>
                <div class="d-flex flex-column justify-content-evenly text-center">
                  <div>
                    <div class="mb-1 text-grey-500">$150</div>
                    <div class="mb-1 text-grey-400"><del>$150</del></div>
                  <i class="fa-solid fa-trash text-primary"></i>
                </div>  
              </li>
              <li class="col-11 mx-auto d-flex justify-content-evenly mb-3">
                <img src="../assets/images/bento 2.png" alt="Photo" class="w-25">
                <div class="d-flex flex-column justify-content-evenly">
                  <p style="width:100px">力量源泉牛小排餐</p>
                  <div class="d-flex justify-content-between">
                    <button class="border-0 rounded-circle bg-primary">
                      <i class="fa-solid fa-minus  text-white"></i>
                    </button>
                    <span class="text-primary text-grey-500">1</span>
                    <button class="border-0 rounded-circle bg-primary">
                      <i class="fa-solid fa-plus text-white"></i>
                  </div>         
                </div>
                <div class="d-flex flex-column justify-content-evenly text-center">
                  <div>
                    <div class="mb-1 text-grey-500">$200</div>
                    <div class="mb-1 text-grey-400"><del>$180</del></div>
                  <i class="fa-solid fa-trash text-primary"></i>
                </div>  
              </li>
            </ul>
            <div class="col-10 mx-auto">
              <div class=" py-3 border-top border-bottom border-grey-400">
                <div class="d-flex justify-content-between">
                  <p>小計</p>
                  <p class="fw-bold">$350</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="mb-0">折扣</p>
                  <p class="mb-0 fw-bold">$20</p>
                </div>
              </div>
              <div class="d-flex justify-content-between mt-3">
                <p>總計</p>
                <p class="fw-bold">$330</p>
              </div>
            </div>
            <div class="col-10 mx-auto">
            <button type="button" class="btn btn-primary text-white fw-bold w-75">前往結帳</button>
            </div>
          </div>
    </div`
    }
      const cartClose = document.querySelector('.close'); //叉叉按鈕
    cartClose.addEventListener('click',e=>{
        cartContainerSm.innerHTML =``
    });
    const storeName = document.querySelector('.store-name');
    storeName.textContent = `(${StoreData.store})`
});

//========================以下是電腦版設定

//監聽電腦版選擇門市按鈕
const startShopBtnLg = document.querySelector('.start-shop-btn-lg');
const addCartBoxLg = document.querySelector('.add-cart-box-lg')

startShopBtnLg.addEventListener('click',e=>{
  e.preventDefault();
    addCartBoxLg.classList.remove('d-none');
    addCartBoxLg.classList.add('show');
    getStoreDataLg()
});

//取得所選門市資料
const copyLinkLg = document.querySelector('.copy-link-lg');

let StoreDataLg={};
function getStoreDataLg(){
    const startOrderBtnLg = document.querySelector('.start-order-btn-lg');
    startOrderBtnLg.addEventListener('click',e=>{
        e.preventDefault();
        StoreDataLg.store = document.querySelector('.form-selectLg').value;
        StoreDataLg.form = document.querySelector('.form-check-input[name="flexRadioDefault"]:checked').value;
        console.log(StoreDataLg);
        if(StoreDataLg.form === '個人訂餐'){
          addCartBoxLg.classList.add('d-none');
          addCartBtnGLg();
        }else if(StoreDataLg.form === '揪團訂餐'){
          copyLinkLg.classList.remove('d-none')
          addCartBoxLg.classList.add('d-none');
        };
        const startOrderBtnA = document.querySelector('.start-order-btn-a');
        if(StoreDataLg.form === '揪團訂餐'){
            startOrderBtnA.addEventListener('click',e=>{
              copyLinkLg.classList.add('d-none');
              addCartBtnGLg();
            })
        }
    })
};
//開始選購(電腦版)
const watchCartLg = document.querySelector('.watch-cart-lg');
const cartNumLg = document.querySelector('.cart-num-lg');

function  addCartBtnGLg(){
  startShopBtnLg.classList.add('d-none');
  watchCartLg.classList.remove('d-none');
  addCartBtnGoLg()
}

//監聽所有加入購物車按鈕

function addCartBtnGoLg(){
    addCartBtn.forEach(item=>{
        item.addEventListener('click',e=>{
          e.preventDefault();
            cartData.food = e.target.getAttribute('data-id');
            cartData.num ++;
            cartNumLg.textContent = `(${cartData.num})`
        })
    })
};

const personalCartLg = document.querySelector('.personal-cart-lg');
const groupCartLg = document.querySelector('.group-cart-lg');
const storeName = document.querySelectorAll('.store-name'); //分店名稱
storeNameArr =  {...storeName};
watchCartLg.addEventListener('click',e=>{
  e.preventDefault();
  if(StoreDataLg.form === '個人訂餐'){
    storeNameArr[0].textContent = `(${StoreDataLg.store})`
    personalCartLg.classList.remove('d-none')
  }else if(StoreDataLg.form === '揪團訂餐'){
    storeNameArr[1].textContent = `(${StoreDataLg.store})`
    groupCartLg.classList.remove('d-none')
  }
})

const cartLgCloseBtn = document.querySelectorAll('.fa-angles-right');
cartLgCloseBtn.forEach(item=>{
  item.addEventListener('click',e=>{
    e.preventDefault();
    personalCartLg.classList.add('d-none')
    groupCartLg.classList.add('d-none')
  })
})
