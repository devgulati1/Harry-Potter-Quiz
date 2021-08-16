var readlineSync=require('readline-sync');
var score=0;
let name=readlineSync.question("Hey What Is Your Name ")
console.log(`Welcome ${name} , 
Welcome to The PotterWorld  
------------------------------`)

let data=[{ques:"Real First  Name Of Harry Potter is :   ",ans:"daniel"},{ques:"What is the name of Harry Potter's owl?",ans:"Hedwig"},{ques:"Name Ron Weasley's pet rat ",ans:"Scabbers"},{ques:"Which actor played the character Cedric Diggory? ",ans:"Robert Pattinson"},{ques:"Name Luna Lovegood's father   ",ans:"Xenophillius Lovegood"}]

let play=(ques,ans)=>{
  let userAns=readlineSync.question(ques)
  if(userAns.toLowerCase()===ans.toLowerCase()){
   
    console.log(" You are right ")
   score++;
   
   console.log("your current score is "+score);
    console.log("-------------------------")
  }else{
  
    console.log("you are wrong")
    
   console.log("your current score is "+score);
    console.log("-------------------------")
     
  }

}
for(let i=0;i<data.length;i++){
play(data[i].ques,data[i].ans)
}

console.log("-------------------------")
console.log( "Your Final  Score is "+score)
