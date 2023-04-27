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

    /*
    문을 열겠습니다.
    1.홀수 엘레베이터인지 짝수 엘레베이터인지 판별한다
    2.입력받은 숫자를 받아온다
    3.만약 홀수 엘레베이터인데, -1,10 값을 제외한 짝수 값은 받지 않는다.
    4.만약 짝수 엘레베이터인데, -1,1 값을 제외한 홀수 값은 받지 않는다.
    5.1초뒤에 입력 받은 숫자 값을 반환
    문을 닫습니다.

    */ 
    // 오늘 머리가 안 돌아 갑니다..
    // 비록 완료는 못 했지만. 내일 다시 해봐야겠습니다.