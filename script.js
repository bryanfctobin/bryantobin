var vm = new Vue({
    el: '#main',
    data: {
        image: '/content/bryan-face.png',
        /*link: 'https://youtu.be/SUtziaZlDeE',*/
        link: 'https://youtu.be/ji5_MqicxSo',
        textOne: 'Be Brave and Be Kind'
    },
    methods: {
        
    }
});
function changeBG() {
    var bgcolors = ['#33CCCC', '#A6E4E7', '#2980B9', '#2C3E50','#30E3CA','#30E3CA','#7B99FA','#53CDD8','#74F9FF','#00E0FF'];
    var randNum = Math.floor(Math.random() * Math.floor(bgcolors.length));
    var docBody = document.body;
    docBody.style.backgroundColor = bgcolors[randNum];
}
changeBG();