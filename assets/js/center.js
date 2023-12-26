const userProfile = document.querySelector('.userProfile');
const userProfileBtn = document.querySelector('.userProfileBtn');
const oderListBtn = document.querySelector('.oderListBtn');
const oderList = document.querySelector('.oderList')

//頁籤按鈕
userProfileBtn.addEventListener('click',e=>{
    e.preventDefault();
    userProfileBtn.classList.add('active');
    userProfile.classList.remove('d-none');
    oderListBtn.classList.remove('active')
    oderList.classList.add('d-none')
})

oderListBtn.addEventListener('click',e=>{
    oderList.classList.remove('d-none')
    userProfile.classList.add('d-none')
    userProfileBtn.classList.remove('active')
    oderListBtn.classList.add('active')
})


//手機版折疊
const order1 = document.querySelector('.order-1');
const order1Content = document.querySelector('.order-1-content');
const order2 = document.querySelector('.order-2');
const order2Content = document.querySelector('.order-2-content');
const order3 = document.querySelector('.order-3');
const order3Content = document.querySelector('.order-3-content');

order1.addEventListener('click',e=>{
    e.preventDefault();
    order1Content.classList.toggle('d-none')
})
order2.addEventListener('click',e=>{
    e.preventDefault();
    order2Content.classList.toggle('d-none')
})
order3.addEventListener('click',e=>{
    e.preventDefault();
    order3Content.classList.toggle('d-none')
})