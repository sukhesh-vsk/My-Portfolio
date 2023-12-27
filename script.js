// theme switch
const changeTheme = () => {
    if(document.body.className == 'dark-mode'){
        localStorage.setItem('theme', 'light');
    }else{
        localStorage.setItem('theme', 'dark');
    }
    location.reload();
}

document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
        document.body.className = 'dark-mode';
        document.querySelector('.theme-img').src = './assets/dark-mode.png';
    } else {
        document.body.className = '';
        document.querySelector('.theme-img').src = './assets/light-mode.png';
    }
    
});

// in animations for elements
const observer = new IntersectionObserver((e) => {
    e.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

function observeHidden() {
    const hidden = document.querySelectorAll('.hidden'); 
    hidden.forEach((element) => observer.observe(element));
}

$(document).ready(function(){
    $('a').on('click', function(event) {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $(window).height()/2 + $(hash).height()/2
            }, 100);
        }
    });
});

// Glitch 

document.addEventListener('DOMContentLoaded', async (event) => {
    const helloWorld = document.querySelector('.helloworld');
    const banner = document.querySelector('.banner');
    const bannerText = document.querySelector('.banner-text');
    const bannerName = document.querySelector('.banner-name');
    const socialIcon = document.querySelector('.social-icon');
    const aboutBtn = document.querySelector('.about-btn');

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    banner.remove();

    // glitches after type writing
    await sleep(2500);
    helloWorld.classList.remove('typing-effect');
    helloWorld.classList.add('glitch-effect');
    
    // glitches name text
    await sleep(1000);
    helloWorld.remove();
    document.querySelector('.banner-content').appendChild(banner);
    bannerText.classList.add('glitch-effect');
    bannerName.classList.add('glitch-effect');

    // apply normal animations to banner
    await sleep(500);
    socialIcon.classList.remove('hide');
    aboutBtn.classList.remove('hide');
    bannerText.classList.add('hidden', 'show');
    bannerName.classList.add('hidden', 'show');
    observeHidden();
});