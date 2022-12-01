function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector);
    els = Array.from(els);
    els.forEach(el => {
        addObserver(el, options);
    })
}

function addObserver(el) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        })
    })

    observer.observe(el);
}

scrollTrigger('.image-container', {rootMargin: '-200px'});
scrollTrigger('.homepage-banner-text', {rootMargin: '-200px'});
scrollTrigger('.image-row', {rootMargin: '-200px'});
scrollTrigger('.course-details-section', {rootMargin: '-200px'});