// get the share button

const share_btn = document.querySelector('.share-icon');
const share_footer = document.querySelector('.share-footer-mobile');
share_btn.addEventListener('click', () => {
    console.log('clicked');
    share_footer.classList.add('share_footer-enable')
})



share_footer.addEventListener('blur',()=>{
    share_footer.classList.remove('share_footer-enable')
})

document.addEventListener('click',(e)=>{
    const target_class = e.target.classList;
    if(!target_class.contains('share-footer-mobile') && !target_class.contains('share-icon')){
        share_footer.classList.remove('share_footer-enable')
    }
})