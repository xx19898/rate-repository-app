import { useContext } from "react"
import { TabContext } from "../contexts/TabContext"
import { useNavigate } from "react-router-native"


export default () => {
    const setChosenTab = useContext(TabContext).setChosenTab
    const navigate = useNavigate()

    function customNavigate(newRoute:string,newTab:string){
        setChosenTab(newTab)
        navigate(newRoute)
    }

    return {customNavigate}
}