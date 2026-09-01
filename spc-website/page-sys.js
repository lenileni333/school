/* THIS IS THE page-sys.js THAT WILL BE USED TO MAKE EDITS */
const PageSwitch = (file, left, right) => {
    const filename = window.location.pathname.split('/').pop();
    document.addEventListener('keydown',(event)=>{
        if(filename!==`${file}.html`)return;
        const dir_map={'ArrowLeft':`${left}.html`,'ArrowRight':`${right}.html`}
        const dest=dir_map[event.code];
        dest?(window.location.href=dest):null;
    });
}


PageSwitch('dinayas', 'dinayas', 'daniel');
PageSwitch('daniel', 'dinayas', 'nafyad');
PageSwitch('nafyad', 'daniel', 'mason');
PageSwitch('mason', 'nafyad', 'faiva');
PageSwitch('faiva', 'mason', 'ryder');
PageSwitch('ryder', 'faiva', 'ryder');


