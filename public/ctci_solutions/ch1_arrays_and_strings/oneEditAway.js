function oneAway(str1, str2) {
	var length1 = str1.length;
	var length2 = str2.length;
	totalEdits = 0;

	if(Math.abs(length1 - length2) >= 2) {
		return false;
	}

	var i = 0;
	var j = 0;

	while(i !== length1 && j !== length2 && totalEdits < 2) {

		if(str1[i] === str2[j]) {
			i++;
			j++;
		}

		if(str1[i] !== str2[j]) {
			totalEdits++;
			if(str1[i] === str2[j+1]) {
				j++;
			} else if(str2[j] === str1[i+1]) {
				i++;
			} else {
				return false;
			}
		}

	}

	return totalEdits <= 1? true: false;
}

console.log(oneAway('pale','ple'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('bale', 'pale'));
console.log(oneAway('pale', 'bake'));
