import { toast } from "react-toastify";

export const getApps=()=>{
    const storedAppsSTR=localStorage.getItem("applist");
    if(storedAppsSTR){
        const storedApps=JSON.parse(storedAppsSTR);
        return  storedApps.map(id => Number(id));
    }else{
        return [];
    }
}

export const addToDB=(id)=>{
    const storedApps=getApps();
     const numericId = Number(id);
    if(storedApps.includes(numericId)){
        toast.error("You have already installed the app");
        return;
    }else{
        storedApps.push(numericId);
        const data=JSON.stringify(storedApps);
        localStorage.setItem("applist",data);
        return;
    }
}
