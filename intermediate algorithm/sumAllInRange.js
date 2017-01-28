
	function sumAll(arr) {
    	var minNum = Math.min.apply(null, arr);
        var maxNum = Math.max.apply(null, arr);
        var answer =0;
        for (var i = minNum; i <= maxNum; i++) {
        	answer = answer + i;
            
        	
        }
    	return answer;
    }

sumAll([1, 4]);