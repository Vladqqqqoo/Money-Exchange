// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
		// Return an object containing the minimum number of coins needed to make change
		if(currency<=0)
			return {};
		if(currency>10000)
			return {error: "You are rich, my friend! We don't have so much coins for exchange"};

			function isInt(n){
				return Number(n) === n && n % 1 === 0;
		}
		var keys = ['H', 'Q', 'D','N','P'];
		var count = [50, 25, 10, 5 ,1];
		var change = {};

		for(var i=0;i<count.length;i++){
  		var part=currency/count[i];
  		if(!isInt(part)){
   		 part=Math.floor(part);
  		}
			if(part<1)
  			continue;
  		currency = currency-(part*count[i]);
  		change[keys[i]]=part;
 			if(currency===0){
   		break;
 			}
		}

		return change;
}
