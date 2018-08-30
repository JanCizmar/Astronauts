import AstronautService from "../../services/AstronautService";

export function getAstronauts() {
    return {
        type: 'GET_ASTRONAUTS',
        payload: AstronautService.get()
    }
}

export function createAstronaut(data) {
    return {
        type: 'CREATE_ASTRONAUT',
        payload: AstronautService.create(data)
    }
}


export function updateAstronaut(data) {
    return {
        type: 'UPDATE_ASTRONAUT',
        payload: AstronautService.update(data)
    }
}


export function deleteAstronaut(id) {
    return {
        type: 'DELETE_ASTRONAUT',
        payload: AstronautService.delete(id)
    }
}

export function showCreateModal() {
    return {
        type: 'TOGGLE_CREATE_MODAL',
        payload: true
    }
}

export function hideCreateModal() {
    return {
        type: 'TOGGLE_CREATE_MODAL',
        payload: false
    }
}


export function showEditModal(id) {
    return {
        type: 'TOGGLE_EDIT_MODAL',
        payload: id
    }
}

export function hideEditModal() {
    return {
        type: 'TOGGLE_EDIT_MODAL',
        payload: false
    }
}

export function createInputChange(name, value) {
    return {
        type: 'CREATE_INPUT_CHANGE',
        payload: {name, value}
    }
}


export function editInputChange(name, value) {
    return {
        type: 'EDIT_INPUT_CHANGE',
        payload: {name, value}
    }
}

