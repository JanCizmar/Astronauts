"use strict";

import HttpService from "./HttpService";

export default class AstronautService {
    static baseURL() {
        return "http://localhost:3000/astronauts";
    }

    static create(astronaut) {
        return new Promise((resolve, reject) =>  HttpService.post(`${this.baseURL()}/`, astronaut, resolve, reject))
    }

    static get() {
        return new Promise((resolve, reject) => HttpService.get(`${AstronautService.baseURL()}/`, resolve, reject))
    }

    static update(astronaut) {
        return new Promise((resolve, reject) =>  HttpService.put(`${AstronautService.baseURL()}/`, astronaut, resolve, reject))
    }

    static delete(id) {
        return new Promise((resolve, reject) =>  HttpService.remove(`${AstronautService.baseURL()}/` + id, resolve, reject))
    }
}
