enchant();

window.onload = function() {
	var core = new Core(320, 200);

	var CHARA = 'chara',DOTPNG='.png';
	for (var i = 0; i < 8; i++)
		core.preload(CHARA+i+DOTPNG);		
	core.preload('icon0.png');
	core.preload('exp1.png');

	core.onload = function() {
		var MAX_GROUP_NUMBER = 5;
		var MAX_CROPS_NUMBER = 6;
		var groups = [],crops=[];

		for (var i = 0; i < MAX_GROUP_NUMBER; i++) {
			var group = new Sprite(32, 32);
			group.image = core.assets['chara0.png'];
			group.frame = 0;
			group.x = 0;
			group.y = 32 * i;
			core.rootScene.addChild(group);
			groups.push();
			for (var j = 0; j < MAX_CROPS_NUMBER; j++) {
				var crop = new Sprite(32, 32);
				crop.image = core.assets['icon0.png'];
				crop.frame = 15;
				crop.x = 32 + 32 * j;
				crop.y = group.y;
				core.rootScene.addChild(crop);
				crops.push();					
			};
		};
	};
	core.start();
};