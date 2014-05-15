Qjs
===

简单的异步队列方法

		Q(function(next){
			setTimeout(function(){
				console.log('开始');
				next();
			},1000)
		}).then(function(next){
			console.log('马上执行');
			next();
		}).delay(1000,function(){
			 console.log('1s之后运行')
		}).then(function(next){
			console.log('马上执行');
			next();
		}).delay(1000,function(){
			console.log('1s之后运行')
		}).delay(400,function(){
			console.log('400ms之后运行！')
		}).delay(1000,function(){
			console.log('1s之后运行！')
		}).delay(1000,function(){
			console.log('1s之后运行！')
		})
