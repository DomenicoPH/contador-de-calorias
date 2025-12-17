import type { Activity } from "../types"

// Types
export type ActivityActions = 
    { type: 'save-activity', payload: {newActivity : Activity} }

type ActivityState = {
    activities : Activity[]
}

// Estado inicial
export const initialState : ActivityState = {
    activities: []
}

// Reducer
export const activityReducer = (
    state : ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){
        // Este codigo maneja la lógica para actualizar el state
        console.log(action.payload.newActivity)
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    return state;
}