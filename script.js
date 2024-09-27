window.addEventListener('DOMContentLoaded', () => {
    	const icon = document.querySelector('.pulse'),
        	open = document.querySelector('.icon-open'),
            close = document.querySelector('.icon-close');
   	 panel = document.querySelector('.chat_panel');
        icon.addEventListener('click', () => {
            open.classList.toggle('icon-hide');
            close.classList.toggle('icon-hide');
            panel.classList.toggle('panel-open');
     	   icon.classList.toggle('stoppulse');
    	});
	})
