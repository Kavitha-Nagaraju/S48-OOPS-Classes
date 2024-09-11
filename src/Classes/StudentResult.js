class StudentResult{
    constructor(firstName,lastName,telMarks,engMarks,hinMarks,mathMarks,sciMarks,socMarks){
        this.firstName=firstName;
        this.lastName=lastName;
        this.telMarks=telMarks;
        this.engMarks=engMarks;
        this.hinMarks=hinMarks;
        this.mathMarks=mathMarks;
        this.sciMarks=sciMarks;
        this.socMarks=socMarks;
        console.log(firstName,lastName,telMarks,engMarks,hinMarks,mathMarks,sciMarks,socMarks);
    }
     calculateResult=()=>{
       if(this.telMarks>=35 && this.engMarks>=35 && this.hinMarks>=35 && this.mathMarks>=35 && this.sciMarks>=35 && this.socMarks>=35){

        console.log(`${this.firstName} ${this.lastName} is passed in tenth`);
       }else{
        console.log(`${this.firstName} ${this.lastName} Failed in Tenth`);
       }
     }
      
}export default StudentResult