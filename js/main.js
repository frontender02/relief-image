document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    AOS.init();

    // Menu
    const menu = document.querySelector('.menu__body');
    const menuBtn = document.querySelector('.menu__icon');
    if (menu && menuBtn){
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active');
            body.classList.toggle('lock');
        })

        menu.querySelectorAll('.menu__link').forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                menuBtn.classList.remove('active');
                body.classList.remove('lock');
            })
        })
    }
    const menuAnchors = menu.querySelectorAll('a[href*="#"]');
    menuAnchors.forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionID = anchor.getAttribute('href').substring(1);
            document.getElementById(sectionID).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            })
        })
    })


    // Popup Form
    const formBtn = document.querySelector('.hero__btn');
    const formPopup = document.querySelector('.popup-form');
    const formPopupClose = document.querySelector('.form__close-btn');
    formBtn.addEventListener('click', () => {
        formPopup.classList.add('popup-form--active');
        body.classList.add('lock');
    })
    formPopupClose.addEventListener('click', (e) => {
        e.preventDefault();
        formPopup.classList.remove('popup-form--active');
        body.classList.remove('lock');
    })


    // Projects Gallery
    const galleryTop = document.querySelectorAll('.gallery-project__top-img');
    const galleryThumbnail = document.querySelectorAll('.gallery-project__thumbnail');
    const galleryCartsLink = document.querySelectorAll('.projects__item');
    const galleryCartsPopup = document.querySelectorAll('.popup-projects');
    galleryCartsLink.forEach((popupLink) => {
        popupLink.addEventListener('click', (e) => {
            e.preventDefault();
            galleryCartsPopup.forEach((popup) => {
                if(e.target.dataset.projectsItem == popup.dataset.projectsItem){
                    popup.classList.add('popup-projects--active');
                    body.classList.add('lock');
                }
                popup.querySelector('.popup-projects__close').addEventListener('click', () => {
                    popup.classList.remove('popup-projects--active');
                    body.classList.remove('lock');
                })
            })
        })
    })
    function updateActiveImg(img){
        galleryThumbnail.forEach((img) => {
            img.classList.remove('gallery-project__thumbnail--active');
        })
        img.classList.add('gallery-project__thumbnail--active');
        galleryTop.forEach((topImg) => {
            topImg.src = img.querySelector('img').src;
        })
    }
    galleryThumbnail.forEach((img) => {
        img.addEventListener('click', function(){
            updateActiveImg(img);
        })
    })


    // Tabs
    const tabs = () => { 
        const head = document.querySelector('.tabs-garden-maintenance__btns') 
        const body = document.querySelector('.tabs-garden-maintenance__body') 
    
        const getActiveTabName = () => { 
            return head.querySelector('.tabs-garden-maintenance__btn--active').dataset.tab;
        }
    
        const setActiveContent = () => { 
            if (body.querySelector('.tabs-garden-maintenance__content--active')) { 
                body.querySelector('.tabs-garden-maintenance__content--active').classList.remove('tabs-garden-maintenance__content--active') 
            }
            body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add('tabs-garden-maintenance__content--active') 
        }
    
        if (!head.querySelector('.tabs-garden-maintenance__btn--active')) {  
            head.querySelector('.tabs-garden-maintenance__btn').classList.add('tabs-garden-maintenance__btn--active')
        }
    
        setActiveContent(getActiveTabName()) 
    
        head.addEventListener('click', e => { 
            const caption = e.target.closest('.tabs-garden-maintenance__btn') // был ли клик
            if (!caption) return 
            if (caption.classList.contains('tabs-garden-maintenance__btn--active')) return 
            if (head.querySelector('.tabs-garden-maintenance__btn--active')) { 
                head.querySelector('.tabs-garden-maintenance__btn--active').classList.remove('tabs-garden-maintenance__btn--active') 
            }
    
            caption.classList.add('tabs-garden-maintenance__btn--active') 
    
            setActiveContent(getActiveTabName()) 
        })
    };
    tabs();


    // Gallery Landscape
    baguetteBox.run('.gallery-landscape', {
        animation: 'fadeIn'
    });


    // Slider Reviews
    const swiperReviews = new Swiper('.reviews__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            540: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
})