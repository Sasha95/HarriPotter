import axios from "axios";

export async function getData() {
    const URL = `http://hp-api.herokuapp.com/api/characters/students`
    const res = await axios(URL)

    return res
}