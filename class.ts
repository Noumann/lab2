import { Queue } from "./interFace";

class myClass implements Queue{
    
    tasks : string[] = [];
    
    constructor(){
        //tasks=[];
    }

    //tasks: Array<string>=[];


    addTask(task:string) : number {
        let count:number;
        //adding a string into the array
        this.tasks.push(task);
        //number or items in array
        count=this.tasks.length;
        //console.log("Length of the array is : "+count);
        //returning the number of items in an array
        return count;
      }

      allTasks():void{
        this.tasks.forEach(function(task){console.log(task)})
    }

    deleteTasks(task:string) : number {
        let key:string=task;
        let index:number=this.tasks.indexOf(key,0);
        if(index>-1){
            this.tasks.splice(index,1);
        }
        return this.tasks.length;
    }
}