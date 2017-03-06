demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#00ff00';
        console.log('state3');
        addChangeStateEventListeners();
    },
    update: function(){}
}