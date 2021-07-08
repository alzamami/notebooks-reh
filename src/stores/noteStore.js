import { makeAutoObservable } from "mobx";
import axios from "axios";

class NoteStore {
    notes = [];

    constructor() {
        makeAutoObservable(this)
    }

}