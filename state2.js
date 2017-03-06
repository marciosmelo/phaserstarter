demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#cc0000';
        console.log('state2');
        addChangeStateEventListeners();
    },
    update: function(){}
}