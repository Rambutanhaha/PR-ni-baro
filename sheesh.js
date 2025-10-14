document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Select the associated answer and the icon
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');

            // Toggle the 'active' class on the answer for expansion/collapse
            answer.classList.toggle('active');

            // Change the icon from plus to minus and vice versa
            if (icon.classList.contains('fa-plus')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }

            // (Optional) Close other open FAQs for a clean look
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherIcon = otherQuestion.querySelector('i');

                    otherAnswer.classList.remove('active');

                    if (otherIcon.classList.contains('fa-minus')) {
                        otherIcon.classList.remove('fa-minus');
                        otherIcon.classList.add('fa-plus');
                    }
                }
            });
        });
    });
});