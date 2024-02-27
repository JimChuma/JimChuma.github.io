var checkHeader = _.throttle(() => { 
    console.log('checkHeader'); 

    let scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 60) {
        document.querySelector('header').classList.add('sticky');
    }

    else {
        document.querySelector('header').classList.remove('sticky');
    }

    if (scrollPosition >= 802 && scrollPosition < 2365) {
        document.querySelector('#about1').classList.add('active');
    }

    else {
        document.querySelector('#about1').classList.remove('active');
    } 
    
    if (scrollPosition >= 2365 && scrollPosition < 4225) {
        document.querySelector('#prop-nav').classList.add('active');
    }

    else {
        document.querySelector('#prop-nav').classList.remove('active');
    }

    if (scrollPosition >= 4225 && scrollPosition < 5337) {
        document.querySelector('#agent-nav').classList.add('active');
    }

    else {
        document.querySelector('#agent-nav').classList.remove('active');
    }

    if (scrollPosition >= 5337 && scrollPosition < 6425) {
        document.querySelector('#blog-nav').classList.add('active');
    }

    else {
        document.querySelector('#blog-nav').classList.remove('active');
    }

    if (scrollPosition >= 6425 && scrollPosition < 7462) {
        document.querySelector('#partner-nav').classList.add('active');
    }

    else {
        document.querySelector('#partner-nav').classList.remove('active');
    }

    if (scrollPosition >= 7462 && scrollPosition < 9444) {
        document.querySelector('#contact-nav').classList.add('active');
    }

    else {
        document.querySelector('#contact-nav').classList.remove('active');
    }

}, 300);


window.addEventListener('scroll', checkHeader);



