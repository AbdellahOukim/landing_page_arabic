// Profile dropdown 
const profile = document.querySelector('.profile');
const droProf = document.querySelector('.profile .dropdown');

profile.addEventListener('click' , function(){
    droProf.classList.toggle('show') ;
})

// set image profile
const imgInput = document.getElementById('set-img') ;
const profileImg = document.getElementById('profile-image') ;

imgInput.addEventListener('change' , function (e) {
    const file = e.target.files[0] ;
    if (file) {
        let url = URL.createObjectURL(file) ;
        profileImg.src = url ;
    }
    
})

// change tabs content
const navTabs = document.querySelectorAll('.nav-sec-item') ;
const tabsContent = document.querySelectorAll('.all-sections') ;
const account = document.getElementById('user-account') ;

navTabs.forEach(tab=>{
    tab.addEventListener('click' , function () {
        tabsContent.forEach(ele=> {
            ele.classList.remove('show') ;
        })
        let currTab = document.querySelector(`#${this.dataset.target}`) ;
        let title = this.dataset.title
        currTab.classList.add('show') ;
        document.title = `منصة AO التعليمية | ${title}`
    })
})

account.addEventListener('click' , function(){
    tabsContent.forEach(ele=> {
        ele.classList.remove('show') ;
    })
    let currTab = document.querySelector(`#${this.dataset.target}`) ;
        let title = this.dataset.title
        currTab.classList.add('show') ;
        document.title = `منصة AO التعليمية | ${title}`
})