// JavaScript source code
let show = document.getElementById('show');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                show.innerText = '';
                break;

            case '←':
                if (show.innerText) {
                    show.innerText = show.innerText.slice(0, -1);
                }
                break;

            case '=':
                try {
                    show.innerText = eval(show.innerText);
                }
                catch {
                    show.innerText = 'Error';

                }
                break;



            default:
                show.innerText += e.target.innerText;
        }
    });
});
