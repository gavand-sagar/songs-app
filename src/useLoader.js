import { useContext } from "react";
import { GlobalData } from "./GlobalData";

export function useLoader(){
    return useContext(GlobalData)
}