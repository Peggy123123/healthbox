import"./main-09275e5e.js";const l=document.querySelector(".cart-container-sm");document.getElementById("personalOrderlSm");function x(){l.innerHTML=`
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
</div>`,y()}x();AOS.init({once:!0});let a={};function y(){document.querySelector(".start-order-btn-sm").addEventListener("click",t=>{t.preventDefault(),a.store=document.querySelector(".form-select").value,a.form=document.querySelector('.form-check-input[name="flexRadioDefault"]:checked').value,a.form==="個人訂餐"?l.innerHTML="":a.form==="揪團訂餐"&&(l.innerHTML=`
            <div class="select-store-sm text-center overflow-auto">
                <h3 class="mt-s-20 mb-s-20">揪團連結</h3>
                <p>複製連結</p>
                <div class="input-group mb-s-20 w-75 mx-auto">
                <input type="text" class="form-control" value="http://healthbox/fdgdgvef" placeholder="複製連結" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-copy text-primary"></i></span>
                </div>
                <button type="button" class="start-order-btn-sm btn btn-primary py-2 px-4 text-white fw-bold">開始訂餐！</button>
                </div>
                </div>`);const o=document.querySelector(".start-order-btn-sm");a.form==="揪團訂餐"&&o.addEventListener("click",r=>{l.innerHTML=""}),h()})}const u=document.querySelectorAll(".add-cart-btn"),m=document.querySelector(".watch-cart"),g=document.querySelector(".cart-num");let n={};n.num=0;function h(){u.forEach(e=>{e.addEventListener("click",t=>{n.food=t.target.getAttribute("data-id"),n.num++,m.classList.remove("d-none"),g.textContent=`(${n.num})`})})}m.addEventListener("click",e=>{a.form==="個人訂餐"?l.innerHTML=`
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
        </div>`:a.form==="揪團訂餐"&&(l.innerHTML=`<div class="select-store-sm text-center overflow-auto">
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
    </div`),document.querySelector(".close").addEventListener("click",r=>{l.innerHTML=""});const o=document.querySelector(".store-name");o.textContent=`(${a.store})`});const f=document.querySelector(".start-shop-btn-lg"),c=document.querySelector(".add-cart-box-lg");f.addEventListener("click",e=>{e.preventDefault(),c.classList.remove("d-none"),c.classList.add("show"),w()});const i=document.querySelector(".copy-link-lg");let s={};function w(){document.querySelector(".start-order-btn-lg").addEventListener("click",t=>{t.preventDefault(),s.store=document.querySelector(".form-selectLg").value,s.form=document.querySelector('.form-check-input[name="flexRadioDefault2"]:checked').value,console.log(s),s.form==="個人訂餐"?(c.classList.add("d-none"),d()):s.form==="揪團訂餐"&&(i.classList.remove("d-none"),c.classList.add("d-none"));const o=document.querySelector(".start-order-btn-a");s.form==="揪團訂餐"&&o.addEventListener("click",r=>{i.classList.add("d-none"),d()})})}const p=document.querySelector(".watch-cart-lg"),L=document.querySelector(".cart-num-lg");function d(){f.classList.add("d-none"),p.classList.remove("d-none"),S()}function S(){u.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),n.food=t.target.getAttribute("data-id"),n.num++,L.textContent=`(${n.num})`})})}const b=document.querySelector(".personal-cart-lg"),v=document.querySelector(".group-cart-lg"),k=document.querySelectorAll(".store-name");storeNameArr={...k};p.addEventListener("click",e=>{e.preventDefault(),s.form==="個人訂餐"?(storeNameArr[0].textContent=`(${s.store})`,b.classList.remove("d-none")):s.form==="揪團訂餐"&&(storeNameArr[1].textContent=`(${s.store})`,v.classList.remove("d-none"))});const j=document.querySelectorAll(".fa-angles-right");j.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),b.classList.add("d-none"),v.classList.add("d-none")})});
