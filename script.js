// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});




function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    
    if (isDarkMode) {
       
        
        body.classList.remove('dark-mode');
        const elements = document.querySelectorAll('nav a, .name, .rotated-text, .about-text, .edu-para, .subtitle, .subsubtitle, .ach-para, th, td');
        elements.forEach(element => {
            element.classList.add('dark-text');
        });
    } else {
       
        body.classList.add('dark-mode');
        const elements = document.querySelectorAll('nav a, .name, .rotated-text, .about-text, .edu-para, .subtitle, .subsubtitle, .ach-para, th, td');
        elements.forEach(element => {
            element.classList.remove('dark-text');
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', function() {
            let likeCount = parseInt(this.nextElementSibling.textContent);
            likeCount++;
            this.nextElementSibling.textContent = likeCount;
            
            const blogTitle = this.parentElement.querySelector('.blog-title').textContent;
           
            localStorage.setItem(blogTitle + '_likes', likeCount);
        });
    });

   
    document.querySelectorAll('.like-count').forEach(span => {
        const blogTitle = span.parentElement.querySelector('.blog-title').textContent;
        const likeCount = localStorage.getItem(blogTitle + '_likes');
        if (likeCount !== null) {
            span.textContent = likeCount;
        }
    });

    
});

