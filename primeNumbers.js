const arguments = process.argv.slice(2);


function primeNumber(firstNumber,secondNumber) 
{
    for (let i = firstNumber; i <=secondNumber; i++) 
    {
        let control=true;
        for (let j = 2; j <i ; j++) 
        {
            if (i%j==0) 
            {
                  control=false;   
            }         
        }
        
        if (control==true) {
            console.log(i);
        }
    }
}
primeNumber(arguments[0] * 1 , arguments[1] * 1);
