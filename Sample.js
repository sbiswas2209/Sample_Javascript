let first_name = "Sagnik";
let second_name = "Biswas";
function concat(){
    let result = first_name.concat(" ",second_name).toUpperCase();
    console.log(result);
}
concat();



let choice = 2;
let day = 'Monday';
let i = 1;
switch(choice){
    case 1:
        if(day == 'Sunday' || day == 'Saturday'){
            console.log(day+" is a weekend.");
        }
        else{
            console.log(day+" is a weekday.");
        }
    break;
    case 2:
        while(i<=100){
            console.log(i+" x 5 = "+(i++*5));
        }
    break;
    default:
        console.log("Wrong Input.");
}