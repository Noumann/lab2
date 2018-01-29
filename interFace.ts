export interface Queue{
    tasks:Array<string>;
    addTask(arg1:string):number;
    deleteTasks(arg1:string):number;
    allTasks():void;
}