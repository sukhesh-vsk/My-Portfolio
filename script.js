const changeTheme = () => {
    if(document.body.className == 'dark-mode'){
        document.body.className = '';
        document.querySelector('.theme-img').src = './assets/light-mode.png';
        return;
    }
    document.querySelector('.theme-img').src = './assets/dark-mode.png';
    document.body.className = 'dark-mode';
}