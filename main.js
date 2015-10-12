enchant();

window.onload = function() {
	var SOLUTION_X = 230;
	var SOLUTION_Y = 160;
	var core = new Core(SOLUTION_X,SOLUTION_Y);
	core.fps = 30;

	core.preload(
		'chara0.png','chara1.png','chara2.png',
		'chara3.png','chara4.png','chara5.png',
		'chara6.png','chara7.png'
		);
	core.preload('icon0.png');
	core.preload('exp1.png');
	core.preload('background.png');

	core.onload = function() {
		//mapping background
		var background = new Sprite(320,200);
		background.image = core.assets['background.png'];
		background.x = background.y = 0;
		core.rootScene.addChild(background);

		var MAX_GROUP_NUMBER = 5;
		var MAX_CROPS_NUMBER = 6;
		var groups = [],crops=[];
		var every1sec = false;
		var frame_default;

		for (var i = 0; i < MAX_GROUP_NUMBER; i++) {
			var group = new Sprite(32, 32);
			group.image = core.assets['chara0.png'];
			group.frame = 0;
			group.frame_default = group.frame;
			group.x = 0;
			group.y = 32 * i;

			core.rootScene.addChild(group);
			groups.push(group);

			for (var j = 0; j < MAX_CROPS_NUMBER; j++) {
				var crop = new Sprite(16, 16);
				crop.image = core.assets['icon0.png'];
				crop.scale(1.8,1.8);
				crop.frame = 15;
				crop.x = 32 + 32 * j;
				crop.y = group.y;
				core.rootScene.addChild(crop);
				crops.push();					
			};
		};

		//let every charactors walk
		for (var i = 0; i < groups.length; i++) {
			groups[i].addEventListener('enterframe',function(){
				if(core.frame%core.fps == 0){	
					if(this.frame == group.frame_default){
						this.frame = group.frame_default + 2;
					}
					else {
						this.frame = group.frame_default;
					}
				}
			});
		};
	};
	core.start();
};