import React from "react"
import {Theme} from "../contexts/ThemeContext"

const useTheme = () => {
   return React.useContext(Theme)
}

export default useTheme