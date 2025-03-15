let temperature = 41;
if(temperature <= 50){
    console.log('less then 50')
}else{
    console.log('temperature is greater then 50')
}

const balance = 1000;

if(balance < 500){
    console.log('less then 500')
}else if(balance < 750){
    console.log('less then 750')
}else{
    console.log('less then 1200');
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;

switch(month){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('Aug');
        break;
    case 9:
        console.log('Septembar');
        break;
    case 10:
        console.log('Oct');
        break;
    case 11:
        console.log('Nov');
        break;
    case 12:
        console.log('Dec');
        break;

    default:
        console.log('default case')
        break;
}