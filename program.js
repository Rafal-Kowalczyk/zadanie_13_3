process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instuction = input.toString().trim();
		switch(instuction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/vsNode':
				process.stdout.write('Node version: '+ process.versions.node +'\n');
				break;	
			case '/envSystem':	
				process.stdout.write('System version: '+ process.env.os +'\n');
				process.stdout.write('Computer name: '+ process.env.computername +'\n');
				process.stdout.write('System language: '+ process.env.lang +'\n');
				break;	
			default:
			process.stderr.write('Wrong instuction!');
		};	
	}
});


