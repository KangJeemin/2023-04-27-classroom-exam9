import inquirer from "inquirer";

//? 짝수 엘레베이터는 1층도 가능함
//? 홀수 엘레베이터는 10층도 가능함
//? 짝수 홀수 일레베이터 둘다 지하일층 -1까지 가능하게 설계



function oddElevator(array) {
  let array1 = []
  array1=array
  console.log("문을 열겠습니다")
  return array1;
}

function evenElevator(floorNumber){

}

inquirer
    .prompt(oddElevator([
        {
            type:'input',
            name:'floor',
            message:"몇층을 가시겠습니까?"
        },
        
    ]))
    .then((answers)=>{
        if(answers.floor)
            if(answers.floor%2==0){
             console.log("홀수층만 입력 가능합니다");
             return;
             }
        setTimeout(()=>{
            console.log(answers.floor+"층에 도착했습니다.");

        },1000)
    });