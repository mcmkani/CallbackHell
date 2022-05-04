let titleElement = "";
window.onload=()=>{
    titleElement = document.querySelector('#title');
    titleElement.innerHTML=10;
}

let countDownTen=(callback)=>{
    setTimeout(()=>{
        titleElement.innerHTML = "10";
        callback();
    },1000)
}

let countDownNine=(callback)=>{
    setTimeout(()=>{
        titleElement.innerHTML = "9";
        callback();
    },1000)
}

let countDownEight=(callback)=>{
    setTimeout(()=>{
        titleElement.innerHTML = "8";
        callback();
    },1000)
}

let countDownSeven=(callback)=>{
    setTimeout(()=>{
        titleElement.innerHTML = "7";
        callback();
    },1000)
}

let countDownSix=(callback)=>{
    setTimeout(()=>{
        titleElement.innerHTML = "6";
        callback();
    },1000)
}

let countDownFive=(callback)=>{
    setTimeout(()=>{
        titleElement.innerHTML = "5";
        callback();
    },1000)
}

let countDownFour=(callback)=>{
    setTimeout(()=>{
        titleElement.innerHTML = "4";
        callback();
    },1000)
}

let countDownThree=(callback)=>{
    setTimeout(()=>{
        titleElement.innerHTML = "3";
        callback();
    },1000)
}

let countDownTwo=(callback)=>{
    setTimeout(()=>{
        titleElement.innerHTML = "2";
        callback();
    },1000)
}

let countDownOne=(callback)=>{
    setTimeout(()=>{
        titleElement.innerHTML = "1";        
        callback();
    },1000)
}

let displayGreeting=()=>{
    setTimeout(()=>{
        titleElement.innerHTML = "Happy Independence Day!";    
    },1000)
}


countDownTen(()=>{
    countDownNine(()=>{
        countDownEight(()=>{
            countDownSeven(()=>{
                countDownSix(()=>{
                    countDownFive(()=>{
                        countDownFour(()=>{
                            countDownThree(()=>{
                                countDownTwo(()=>{
                                    countDownOne(()=>{
                                        displayGreeting();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});

