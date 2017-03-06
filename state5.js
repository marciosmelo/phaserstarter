demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#c0f0c0';
        console.log('state5');
        addChangeStateEventListeners();
    },
    update: function(){}
}