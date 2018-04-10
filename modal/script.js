window.onload = function() {
    // Store modal in a variable
    var modal = document.getElementById('info-modal');
    // Store the launch button in variable
    var btn = document.getElementById('launchModal');
    // Store close button for modal in variable
    var close = document.getElementById('close-button');
    // Stores button on modal as variable 
    var modalClose = document.getElementById('modal-close');
    // Set onclick event for button to display modal
    btn.onclick = function() {
        modal.style.display = 'block';
    }
    // Set onclick event for close button to remove modal
    close.onclick = function() {
        modal.style.display = 'none';
    }
    // Set onclick event for close button on modal 
    modalClose.onclick = function() {
        modal.style.display = 'none';
    }
    // Closes modal if clicked outside of modal-content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
