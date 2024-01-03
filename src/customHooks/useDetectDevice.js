import { useDispatch } from "react-redux"
import { deviceActions } from "../store/device-slice"
import { useEffect } from "react"

const useDetectDevice = ()=>{
    const device = outerWidth <= 600 ? "phone" : outerWidth <= 1200 && outerWidth > 600 ? "tablet" : "pc"
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(deviceActions.setDevice(device))
    },[])
}

export default useDetectDevice