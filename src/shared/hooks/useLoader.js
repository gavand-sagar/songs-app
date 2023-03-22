import { useContext } from "react";
import { GlobalData } from "../../data/GlobalData.js";

export function useLoader(){
    return useContext(GlobalData)
}