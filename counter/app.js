const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')


let app = {
    start: function() {
        this.handleEvent()
    },
    handleEvent: function () {
        let number = 0
        $this = this
        btns.forEach(function (btn) {
            btn.onclick = function (e) {
                const element = e.currentTarget.classList
                if (element.contains('decrease')) {
                    number--
                } else if (element.contains('reset')) {
                    number = 0
                } else {
                    number++
                }
               
                if (number < 0) {
                    value.style.color = 'red'
                } else if (number > 0) {
                    value.style.color = 'blue'
                } else {
                    value.style.color = 'hsl(209, 61%, 16%)'
                }
                $this.renderNumber(number)
            }
        })
    },
    renderNumber: number =>  {
        value.innerText = number
    },
}

app.start()