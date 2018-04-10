var callThisOnReturn = function(resp){
    if (resp && resp.contact) {
        var contact = resp.contact;
        console.warn('Conact Information Received', contact);
        var name = resp.contact['First Name'];
        if (name != undefined) {
        var main_text = document.getElementById('main-text');
        main_text.innerHTML = 'Hi ' + name + ', Welcome to My Site';
        }   else {
        console.warn('Contact Info, but no name', resp.contact);
        var main_text = document.getElementById('main-text');
        main_text.innerHTML = 'Welcome to My Site';
        }
    }
    else {
        console.log('Unknown Lead');
        //window.location="https://youtu.be/dQw4w9WgXcQ?rel=0&autoplay=1";
        window.location="https://bryantobin.com/mediaRedirect/unknown";
    }
};
_ss.push(['_setResponseCallback', callThisOnReturn]);