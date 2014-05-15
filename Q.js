;(function(){
	function Q(callback){
		if(!(this instanceof Q)){
			var self = new Q;
			self.queue = [];
			self.timmer = {};
			callback && self.queue.push(function(){
				callback.call(null,function(){
					Q.checkQueue(self.queue);
				})
			});
			Q.checkQueue(self.queue);
			return self;
		}
	}
	Q.checkQueue = function(q){
		var p = q.shift();
		p && (p.delay ? p.callback.call(null,p.delay) : p());
	}
	Q.prototype = {
		constructor: Q,
		then: function(callback){
			var self = this;
			callback && self.queue.push(function(){
				callback.call(null,function(){
					Q.checkQueue(self.queue);
				})
			});
			return this;
		},
		delay: function(){
			var arg = [].slice.call(arguments),
				queue = this.queue,
				timmer = this.timmer,
				self = this;
				var id = Math.random().toString(32).slice(2);
				queue.push({
					delay: arg[0],
					callback: function(delay){
						timmer[id] = setTimeout(function(){
							(arg[1] || function(){}).call(null);
							Q.checkQueue(queue);
						},delay)	
					}
				})
			return this;
		}
	}
	window.Q = Q;
})()