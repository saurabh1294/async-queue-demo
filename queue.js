const EventEmitter = require('events');

class AsyncQueue extends EventEmitter {
	constructor() {
		super();
		this.queue = [];
		console.log('Async queue constructor');
	}
	
	enqueue(item) {
		console.log('enqueue an item here at end of queue', this.queue);
		this.queue.push(item);
		this.emit('enqueued', item);
	}
	
	start() {
		console.log('starting queue');
		this.dequeue();
	}
	
	pause() {
		console.log('queue paused');
	}
	
	peek() {
		return this.queue[0];
	}
	
	dequeue() {
		// dequeue event to be emitted here
		if (this.queue.length > 0) {
			const item = this.queue[0];
			// remove first item from queue
			this.queue.shift();
			this.emit('dequeue', item);
		} else {
			this.queue = [];
		}
		console.log('queue is empty dequeue rejected');
		return;
	}
	
	print() {
		console.log('printing queue items');
		for (let i = 0; i < this.queue.length; i++) {
			console.log(this.queue[i]);
		}
		return '';
	}
}

module.exports = AsyncQueue;