
//

function receivesAFunction(callback)

{
callback();
}
function returnsANamedFunction(){
   const ba =function (){
    return "before all";
   }
return ba
}
function returnsAnAnonymousFunction(){
    return function(){};
}