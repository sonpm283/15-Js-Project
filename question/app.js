const questions = document.querySelectorAll('.question')

questions.forEach(function(question) {
    const btn = question.querySelector('button')
    btn.addEventListener('click', function() {
        questions.forEach(function(item) {                                                                                  
            if(question !== item) {
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
  
})
