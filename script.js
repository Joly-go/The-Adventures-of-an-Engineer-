// Мобильное меню
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// FAQ аккордеон
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Закрываем все ответы
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    const otherAnswer = q.nextElementSibling;
                    if (otherAnswer) otherAnswer.classList.remove('open');
                }
            });
            
            // Открываем текущий ответ
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer) answer.classList.toggle('open');
        });
    });
    
    // Добавление текущего года в футер
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Подсветка активной страницы в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Закрытие мобильного меню при клике на ссылку
document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-link')) {
        if (window.innerWidth <= 768 && nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        }
    }
});