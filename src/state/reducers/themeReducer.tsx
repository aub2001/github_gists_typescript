import { lightTheme, darkTheme } from "../../GlobalStyles";

type Actions = {
    type: string
}

export const themeReducer = (theme = lightTheme, actions: Actions) => {
    const {type} = actions;
    switch (type){
        case "TOGGLE_THEME":
            if (theme === lightTheme){
                theme = darkTheme;
            }
            else{
                theme = lightTheme;
            }
            return theme;
        default:
            return theme;
    }
}