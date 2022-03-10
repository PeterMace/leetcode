441. Arranging Coins
#Recursive Solution
var arrangeCoins = function(n, called = 0) {
    called++;
    if(called > n){
        return 0
    }else{
        return 1 + arrangeCoins(n - called, called)
    }
};


