// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
    this.printMail = function(){
      console.log(newMail.subject + ": " + newMail.message)
    }
  }
  
  const subject = process.argv[3];
  const message = process.argv[4];
  const newMail = new Mail( subject, message );
  
  // Type your code above this line!
  
  newMail.printMail()