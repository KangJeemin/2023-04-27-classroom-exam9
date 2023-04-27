import inquirer from "inquirer";

//? 짝수 엘레베이터는 1층도 가능함
//? 홀수 엘레베이터는 10층도 가능함
//? 짝수 홀수 일레베이터 둘다 지하일층 -1까지 가능하게 설계



function oddElevator(floorNumber) {
    if(floorNumber == 10){
        console.log("10층을 누르셨습니다.")
    }
    else{
        if(floorNumber % 2 !=1) {
            
        }
    }
}

function evenElevator(floorNumber){

}

inquirer
    .prompt(exampleOne([
        {
            type:'input',
            name:'name',
            message:"당신의 이름은 무엇입니까?"
        },
        {
            type:'list',
            name:'like food',
            message: '당신이 좋아하는 음식은 무엇입니까?',
            choices:['바나나우유','딸기우유','초코우유','그냥우유'],
        },
        {
            type:'confirm',
            name:'confirm',
            message:'확실합니까?'
        },
    ]))
    .then((answers)=>{
        console.log('Answers:',answers);
    });