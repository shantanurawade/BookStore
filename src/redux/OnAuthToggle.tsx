const initialState = {
    toggle: false
}

export const OnAuthToggle = (state = initialState, action: any) => {
    switch (action.type) {
        case "toggle":
            return { ...state, toggle: !state.toggle }
    }
    return state;
} 