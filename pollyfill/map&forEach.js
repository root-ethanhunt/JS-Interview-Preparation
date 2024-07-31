
Array.prototype.myMap = function(callbackFunction) {
    const newArr = [];
  console.log("this",this)
    for(let i = 0;i < this.length;i++){
      //   callbackFunction(this[i])
       newArr.push(callbackFunction(this[i]));
    }
  //   console.log("newArr",newArr);
    return newArr;
  }
  
  
  const arr = [1,2,3,4,5]
  
  function print(e){
      // console.log(e*2)
      return e>3?e*2:e;
  }
  
  const some = arr.myMap(print);
  const some1 = arr.map(e=>e>3?e*2:e)
  console.log("some",some,some1)