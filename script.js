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

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((element) => observer.observe(element));

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