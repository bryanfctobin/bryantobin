var callThisOnReturn = function(resp) {
    if (resp && resp.contact) {
        console.warn('Contact Info Received', resp.contact);
        var name = resp.contact['First Name'];
        if (name != undefined) {
        var main_text = document.getElementById('main-text');
        main_text.innerHTML = 'Hi ' + name + ', Welcome to My Site';
        }   else {
        console.warn('Contact Info, but no name', resp.contact);
        var main_text = document.getElementById('main-text');
        main_text.innerHTML = 'Welcome to My Site';
        }
    }   else {
        console.warn('No contact info');
        var main_text = document.getElementById('main-text');
        main_text.innerHTML = 'Welcome to My Site';
    }
};
_ss.push(['_setResponseCallback', callThisOnReturn]);