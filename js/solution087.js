// FIXME: Get Full Name

class Dinglemouse{ 
    constructor(firstName,lastName){
      this.firstname = firstName
      this.lastname = lastName
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`.trim()
    }
  }