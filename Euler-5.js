var prime = [ 1 ,2 ];
var num = 20;
for( var i = 3; i <= num; i++){
  var flag = 1;
  for( var j= 1; i >= prime[ j ] * prime[ j ]; j++ )
    if( i % prime[ j ] == 0 ){
      flag = 0;
      break;
    }
  if(flag)
    prime.push( i );
}
var primes = new Array();
for( var i = 1; i < prime.length; i++)
  for( var j = 1; j <= num; j++)
    if( j % prime[ i ] == 0 ){
      var temp = j;
      var log = 1;
      for( ; temp /= prime[ i ]; log++)
        if( temp % prime[ i ] )
          break;
      if( primes[ prime[ i ] ] < log || primes[ prime[ i ] ] === undefined )
        primes[ prime[ i ] ] = log;
    }
var ans = 1;
for( var i = 1; i < prime.length; i++)
  ans *= prime[ i ] ** primes[ prime[ i ] ];

ans;
