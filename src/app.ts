import { HandlerTable } from "./utils/handlerTable";
import { setTable } from "./database/data";

(()=>{
    main()
})();


async function main (){
    try{
        console.log("-------------------------------------------init")
        console.log(setTable)
        HandlerTable.printHierarchy(setTable)
        console.log("--------------------------------------------end")
    }catch(err){
        console.log(err)
    }
}