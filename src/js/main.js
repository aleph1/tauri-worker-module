const workerModule = new Worker('./js/worker-module.js', {type: 'module'});
workerModule.addEventListener('message', e => {
	document.body.append(e.data);
});