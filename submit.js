////////////PROBLEM-1/////////////


 function mindGame(myNum){
     const result1 = myNum * 3;
     const result2 = result1 + 10;
     const result3 = result2 / 2;
     const myResult = result3 - 5;
     if(typeof myNum != 'number') {
         return ('put a valid number');
     }
     else{
         return myResult;
     }
 }


///////////PROBLEM-2/////////////



 function evenOdd(myNumLength){
     const reminder = myNumLength.length % 2;
    
      if (reminder === 0){
         return ('even')
      }
      else {
         return ('odd')
      }
 }



///////////PROBLEM-3/////////////


 function isLGSeven(givenNumber){
         const inputNumber = givenNumber - 7;
        
         if(typeof givenNumber != 'number') {
             return ('put a valid number');
          }
          else if(inputNumber <! 7){
             return inputNumber;
          }
         else{
             const double = givenNumber * 2;
               return double;
         }
  }


////////////PROBLEM-4////////////


function findingBadData(numbers){
     let count = 0;
     for (let i =0; i < numbers.length; i++) {
     const element = numbers[i];
     if (element < 0){
     count = count + 1
     }
     }
     return count;
     }
     

     ////////////PROBLEM-5////////////


     function gemsToDiamond(frndOne, frndTwo, frndThree){
        const gemsOne = (frndOne) * 21;
        const gemsTwo = (frndTwo) * 32;
        const gemsThree = (frndThree) * 43;
        const totalGems = gemsOne + gemsTwo + gemsThree;
        if (isNaN(totalGems) ){
            return ('input a value');
        }
        else if (totalGems >= 2000){
            const diamond = totalGems - 2000;
            return diamond;
        }
        else{
            return totalGems;
        }
    }