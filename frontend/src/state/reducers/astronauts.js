const defaultState = {
    astronauts: [],
    loading: false,
    createModal: false,
    editModal: false,
    message: "",
    createInputs: {
        name: "",
        surname: "",
        birthDate: "",
        ability: 0
    },
    editInputs:{}
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case ('CREATE_ASTRONAUT_PENDING'): {
            return {...state, loading: true}
        }
        case ('CREATE_ASTRONAUT_FULFILLED'): {
            let astronauts = state.astronauts.slice(0);
            astronauts.push(action.payload);
            return {...state, loading: false, astronauts, createModal: false, createInputs: {...defaultState.createInputs}}
        }
        case ('CREATE_ASTRONAUT_REJECTED'): {
            return {...state, loading: false, message: action.payload}
        }
        case ('GET_ASTRONAUTS_PENDING'): {
            return {...state, loading: true}
        }
        case ('GET_ASTRONAUTS_FULFILLED'): {
            return {...state, loading: false, astronauts: action.payload}
        }
        case ('GET_ASTRONAUTS_REJECTED'): {
            return {...state, loading: false, message: action.payload}
        }
        case ('UPDATE_ASTRONAUT_PENDING'): {
            return {...state, loading: true}
        }
        case ('UPDATE_ASTRONAUT_FULFILLED'): {
            let idx = state.astronauts.findIndex(astr => astr._id === action.payload._id);
            let astronauts = state.astronauts.splice(0);
            astronauts[idx] = action.payload;
            return {...state, loading: false, astronauts, editModal: false}
        }
        case ('UPDATE_ASTRONAUT_REJECTED'): {
            return {...state, loading: false, message: action.payload}
        }
        case ('DELETE_ASTRONAUT_PENDING'): {
            return {...state, loading: true}
        }
        case ('DELETE_ASTRONAUT_FULFILLED'): {
            let idx = state.astronauts.findIndex(astr => astr._id === action.payload._id);
            let astronauts = state.astronauts.splice(0, idx);
            return {...state, loading: false, astronauts}
        }
        case ('DELETE_ASTRONAUT_REJECTED'): {
            return {...state, loading: false, message: action.payload}
        }
        case ('TOGGLE_CREATE_MODAL'):{
            return {...state, createModal: action.payload}
        }

        case ('TOGGLE_EDIT_MODAL'):{
            console.log(state.astronauts.find(astr => astr._id === action.payload));
            return {...state, editModal: !!action.payload, editInputs: state.astronauts.find(astr => astr._id === action.payload)}
        }

        case ('CREATE_INPUT_CHANGE'):{
            return {...state, createInputs: {...state.createInputs, [action.payload.name]: action.payload.value}}
        }

        case ('EDIT_INPUT_CHANGE'):{
            return {...state, editInputs: {...state.editInputs, [action.payload.name]: action.payload.value}}
        }

        case ('CREATE_SUBMIT'):{
            return {...state, createInputs: {...state.createInputs, [action.payload.name]: action.payload.value}}
        }

    }
    return {...state};
};