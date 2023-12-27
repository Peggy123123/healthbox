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
