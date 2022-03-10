export const initialState: {
    avatar: string | null;
    name: string | null;
    email: string | null;
    id: number | null;
} = {
    avatar: null,
    name: null,
    email: null,
    id: null,
};

export const UserReducer = async (state: any, action: any) => {
    switch (action.type) {
        case 'setUser':
            return {
                ...state,
                avatar: action.payload.avatar,
                name: action.payload.name,
                email: action.payload.email,
                id: action.payload.id,
            }
            break;
        default:
            return state;
    }
};
