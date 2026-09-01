/* FUNCTION */
function PageSwitch(file, left, right) {
    const filename = window.location.pathname.split('/').pop(); // gets the page's filename
    document.addEventListener('keydown', (event) => {
        if (event.code == 'ArrowLeft' && filename == `${file}.html`) {
            window.location.href = `${left}.html`; // changes the current page to the left
            console.log('left is working');
        } else if (event.code == 'ArrowRight' && filename == `${file}.html`) {
            window.location.href = `${right}.html`; // changes the current page to the right
            console.log('right is working');
        }
    });
}

/* CODE */
PageSwitch('dinayas', 'dinayas', 'daniel');
PageSwitch('daniel', 'dinayas', 'nafyad');
PageSwitch('nafyad', 'daniel', 'mason');
PageSwitch('mason', 'nafyad', 'faiva');
PageSwitch('faiva', 'mason', 'ryder');
PageSwitch('ryder', 'faiva', 'ryder');


