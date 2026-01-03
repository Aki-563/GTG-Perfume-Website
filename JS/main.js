// subs type logic
const singleButton = document.getElementById('single-button');
const doubleButton = document.getElementById('double-button');

const singleCard = document.getElementById('single-card');
const doubleCard = document.getElementById('double-card');

const singleHeader = document.getElementById('single-header');
const doubleHeader = document.getElementById('double-header');

singleButton.onclick = () => {
    singleCard.style.display = 'block';
    doubleCard.style.display = 'none';
    singleHeader.classList.remove("header-row-no-border");
    doubleHeader.classList.add("header-row");
}

doubleButton.onclick = () => {
    doubleCard.style.display = 'block';
    singleCard.style.display = 'none';
    doubleHeader.classList.remove("header-row-no-border");
    singleHeader.classList.add("header-row");
}




// product image logic
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.small-image-container');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {

        const imgSource = this.querySelector('img').src;

        mainImage.src = imgSource;

        thumbnails.forEach(t => t.classList.remove('selected-image'));

        this.classList.add('selected-image');
    });
});


// accordian logic
const accordianQuestions = document.querySelectorAll('.accordian-question');

accordianQuestions.forEach(accordianQuestion => {
    accordianQuestion.addEventListener('click', function () {
        const accordianContent = this.nextElementSibling;
        const icon = this.querySelector('span');

        if (accordianContent.style.display === 'block') {
            accordianContent.style.display = 'none';
            icon.textContent = '+';
        } else {
            accordianContent.style.display = 'block';
            icon.textContent = '-';
        }
    });
});




// percentage logic
new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
        document.querySelectorAll('.percentage-item h2').forEach(el => {
            let count = 0;
            let target = parseInt(el.innerText);

            let timer = setInterval(() => {
                if (count >= target) clearInterval(timer);
                el.innerText = count++ + '%';
            }, 20);
        });
        observer.disconnect();
    }
}).observe(document.querySelector('.percentages-container'));




//mobile menu logic
const hamburgerBtn = document.getElementById('hamburger');
const hamburgerIcon = hamburgerBtn.querySelector('img');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', function () {
    if (mobileMenu.classList.contains('mobile-menu-closed')) {
        mobileMenu.classList.remove('mobile-menu-closed');
        mobileMenu.classList.add('mobile-menu-open');
        hamburgerIcon.src = "../Assets/close_24dp_4A7B6D_FILL0_wght400_GRAD0_opsz24.svg"
    } else {
        mobileMenu.classList.remove('mobile-menu-open');
        mobileMenu.classList.add('mobile-menu-closed');
        hamburgerIcon.src = "../Assets/dehaze_24dp_4A7B6D_FILL0_wght400_GRAD0_opsz24.svg"
    }

});