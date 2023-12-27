const changeTheme = () => {
    if(document.body.className == 'dark-mode'){
        document.body.className = '';
        document.querySelector('.theme-img').src = './assets/light-mode.png';
        return;
    }
    document.querySelector('.theme-img').src = './assets/dark-mode.png';
    document.body.className = 'dark-mode';
}

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

document.addEventListener('DOMContentLoaded', (event) => {
    const helloWorld = document.querySelector('.helloworld');
    const banner = document.querySelector('.banner');
    banner.remove();
    setTimeout(() => {
        helloWorld.classList.remove('typing-effect');
        helloWorld.classList.add('glitch-effect');
        setTimeout(() => {
            helloWorld.remove();
            document.querySelector('.banner-content').appendChild(banner);
            document.querySelector('.banner-text').classList.add('glitch-effect');
            document.querySelector('.banner-name').classList.add('glitch-effect');
            setTimeout(() => {
                document.querySelector('.social-icon').classList.remove('hide');
                document.querySelector('.about-btn').classList.remove('hide');
                document.querySelector('.banner-text').classList.add('hidden', 'show');
                document.querySelector('.banner-name').classList.add('hidden', 'show');
                observeHidden();
            }, 500);
        }, 1000);
    }, 2000);
});