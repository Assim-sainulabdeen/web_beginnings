
let data = [
    {
    start: 0,
    duration: 15,
    title: "Exercise"
    },
    {
    start: 25,
    duration: 30,
    title: "Travel to work"
    }, 
    {
    start: 30,
    duration: 30,
    title: "Plan day"
    },
    {
    start: 60,
    duration: 15,
    title: "Review yesterday's commits"
    }, 
    {
    start: 100,
    duration: 15,
    title: "Code review"
    }, 
    {
    start: 180,
    duration: 90,
    title: "Have lunch with John"
    }, 
    {
    start: 360,
    duration: 30,
    title: "Skype call"
    }, 
    {
    start: 370,
    duration: 45,
    title: "Follow up with designer"
    }, 
    {
    start: 400,
    duration: 30,
    title: "Push up branch"
    }
];


let getTimeArray = () =>{
    let timeInterval = 30;
    let times = [];
    let startTime = 60*8;
    endTime = 18*60;
    for (let i=0; startTime <= endTime; i++) {
    let hh = Math.floor(startTime/60);
    let mm = (startTime%60);
    times[i] = ("" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2);

    if (times[i] == "0:00"){
        times[i] = "12:00";
    }else if (times[i] == "0:30"){
        times[i]="12:30";
    }
    startTime = startTime + timeInterval;
  
    }
    return times;
}
let time = getTimeArray();

for (let i =0 ; i < time.length; i++){

    if(time.indexOf(time[i]) % 2 == 0){
        $("#timecontent").append(
            `<div class="elementHeight fs-13 moveRight">${time[i]}</div>`
        )
    }else{
        $("#timecontent").append(
            `<div class="elementHeight fs-11 moveRight">${time[i]}</div>`    
        )    
    }  
}

for (let i = 0; i<time.length/2; i++){
    
    let hrtop = "top:"+ 120*i +"px"
    $(".horizontal").append(`<hr class="position-absolute hrcolor" style=${hrtop}>`)
    
}


let data2 = [];
let gap = "left:0";

for (let i = 0; i< data.length; i++){


    let height = "height:" + (data[i].duration)*2+"px";
    let topMargin ="top:" + (data[i].start)*2+"px";
  
    if ( ((i-1) >=0) && (data[i].start < ( data[i-1].start + data[i-1].duration)) || (data[i+1].start < ( data[i].start + data[i].duration)) )
    
    {
        data2.push(data[i]);        
    }
    else{
        $("#tasks").append(`
        <div class="fs-13 bodyBackgrounColor borderColor w-100 position-absolute" style="${height}; ${topMargin}" >${data[i].title}</div>
        `)
    }

}


// let data3=[...data2];

// for(let j=0; j<data3.length; j++){
//     let height = "height:" + (data3[j].duration)*2+"px";
//     let topMargin ="top:" + (data3[j].start)*2+"px";
//     let leftMargin ="left:50%";
//     if(((j-1) >=0) && (data3[j-1].start + data3[j-1].duration >  ( data3[j].start))  ){
//         if(data3[j-1].duration ==  data3[j].duration){
//             $("#tasks").append(`
//             <div class="fs-13 bodyBackgrounColor borderColor w-50 position-absolute" style="${height}; ${topMargin}; ${gap};" >${data3[j].title}</div>
//             `)
//         }else
//          if(data3[j].duration > data3[j - 1].duration){
//             $("#tasks").append(`
//             <div class="fs-13 bodyBackgrounColor borderColor w-50 position-absolute" style="${height}; ${topMargin}; ${gap};" >${data3[j].title}</div>
//             `)
//         }else{
//              $("#tasks").append(`
//             <div class="fs-13 bodyBackgrounColor borderColor w-50 position-absolute" style="${height}; ${topMargin}; ${leftMargin};" >${data3[j].title}</div>
//         `)
//         }
       
//     }   
//     else{
//         $("#tasks").append(`
//         <div class="fs-13 bodyBackgrounColor borderColor w-50 position-absolute" style="${height}; ${topMargin}; ${leftMargin}" >${data3[j].title}</div>
//         `)
//     }
// }
var data3 = [...data2];
for(let j = 0; j < data3.length; j++){
    for (let k = 0; k < j; k++){
        let currentValue = data3[j].start;
        let ifOverlapping = currentValue- (data3[k].start + data3[k].duration);
        if(ifOverlapping < 0){
            data3[j].overlapped ="left"; 

            if(data3[k].overlapped == "left"){
                data3[j].overlapped = true
            }
        }
          

    }
}

console.log(data3);

for (let m = 0; m<data3.length; m++){
    let height = "height:" + (data3[m].duration)*2+"px";
    let topMargin ="top:" + (data3[m].start)*2+"px";
    let leftMargin ="left:50%";
    if(data3[m].overlapped == true){
        $("#tasks").append(`
        <div class="fs-13 bodyBackgrounColor borderColor w-50 position-absolute" style="${height}; ${topMargin}; ${leftMargin}" >${data3[m].title}</div>
        `)
    }else if((data3[m].overlapped == 'left')){
        $("#tasks").append(`
        <div class="fs-13 bodyBackgrounColor borderColor w-50 position-absolute" style="${height}; ${topMargin}; ${gap}" >${data3[m].title}</div>
        `)
    }else{
        $("#tasks").append(`
        <div class="fs-13 bodyBackgrounColor borderColor w-50 position-absolute" style="${height}; ${topMargin}; ${leftMargin}" >${data3[m].title}</div>
        `)
    }
}

// var data3 = [...data2];

// for (let m = 0; m<data3.length; m++){
//     if((data3[m].start+data3[m].duration).i)
// }