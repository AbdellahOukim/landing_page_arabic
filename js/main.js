/* <----- index page  -----> */
// ==> Show answers 
const answers = document.querySelectorAll('.answer') ;

answers.forEach(answer => {
    answer.addEventListener('click' , function () {
        let currElement = document.querySelector(`.${this.dataset.target}`) ;
        if (currElement.classList.contains('show')) {
            currElement.classList.remove('show') ;
            this.innerHTML = `<i class="fas fa-angle-down"></i>` ;
        } else {
            currElement.classList.add('show') ;
            this.innerHTML = `<i class="fas fa-angle-up"></i>` ;
        }
    })
})
