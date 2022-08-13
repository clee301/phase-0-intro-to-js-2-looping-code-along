

 

  function writeCards(name, event){
    const newArray = [];
    for(let i = 0; i < name.length; i++){
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return newArray;
  }


  function countDown(){
    let i = 10
    while(i <= 10 && i >= 0 ){
      console.log(i);
      i--
    }

  }