function personTone(){
    var input = prompt("how was your day?")
    var inputUpper = input.toUpperCase()
    var inputLower = input.toLowerCase()
    
    if(input === inputUpper){
      console.log("Stop Shouting")
      return
  
    }
    
    if (input === inputLower){
          console.log("Speak up")
          return   
    }
    
    console.log("thanks for not shouting and not whispering.")
    
  }
  
  
   personTone()