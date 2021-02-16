export const initialState = {
    courseData:[],
};

export function reducer(state, action) {
    switch(action.type){
        case "ADD_COURSE":
            return {
                ...state,
                courseData:[...state.courseData, action.payload],
            };
        case "SET_COURSE":
            return {
                ...state,
                courseData: action.payload,
            };
        case "DELETE_COURSE":
            return {
                ...state,
                courseData: state.courseData.filter((myCourse) => myCourse.id !== action.payload),
            } ;
        default:
            throw new Error();
    }
}