// Compress a string
function stringCompression(str) {
	let compressed = '';
	let i = 0;

	while(i !== str.length) {
		let c = 1;
		compressed += str[i];

		while(str[i] === str[i+1]) {
			c++;
			i++;
		}

		compressed += c;
		i++;
	}
	return str.length < compressed.length? str: compressed;
}


console.log(stringCompression('aaabbccaa'));
// => 'a3b2c2a2
