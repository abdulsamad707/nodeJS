var Number1=20;
let Number2=3;

console.log(http);
var Calculate=(...inputs)=>{
        total=0; 
       
        for(let i of inputs){
         
           arr=i.split(",");

        }
  
     for(i=0; i<arr.length; i++){
        total=total+parseInt(arr[i]);
     }
  return total;


}
publicPath=path.join(__dirname,'public');
app.use(express.static(publicPath));
const ages = [3, 18, 1, 20];
 let numbers=[2,4,6,8,10,3,36,9,3,4];
numbers=numbers.sort();
uniqueArray = numbers.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
});
uniqueArray=uniqueArray.sort();
uniqueArray=uniqueArray.toString();
//return self.indexOf(number) == pos;
   rs= ages.findIndex(checkAge);
  evenNumber= numbers.filter(evenNUmberSum);
  oddNumber=numbers.filter(oddNUmberSum);
  numbers=numbers.toString();
    evenNumber=evenNumber.toString();
     oddNumber=oddNumber.toString();
       console.log(` Numbers: ${numbers}`);
       console.log(`Even Numbers: ${evenNumber}`);
       console.log(`unique number:${uniqueArray}`);
       sumeven=Calculate(evenNumber);
       sumodd=Calculate(oddNumber);
       sumnum=Calculate(numbers);
       uniqueSum=Calculate(uniqueArray);
       console.log(`sum of number:${sumnum}`);
        console.log(`sum of even number: ${sumeven}`);
        console.log(`sum of odd number: ${sumodd}`);
        console.log(`sum of unique number: ${uniqueSum}`);
     function evenNUmberSum(number,pos,self){

     
       
        return number%2==0;
     }
     function oddNUmberSum(number){
        return number%2==1;
     }
function checkAge(age) {
  return age >= 18;
}
data=require('./data');
console.log(process.argv);
/*
http.createServer((req,res)=>{

   
    res.end();

}).listen(5000);*/
app.set('view engine','ejs');
