// import uuid from "uuid/v4";
import HttpError from "../models/http-errors-model.js";

const Dummy_user = [
    {
        id: 'u1',
        name: "Rishabh",
        email: "rishabh@gmail.com",
        password: "rishabh",
    },
    {
        id: 'u2',
        name: "Rishabh",
        email: "rishabh@gmail.com",
        password: "rishabh",
    },
    {
        id: 'u3',
        name: "Rishabh",
        email: "rishabh@gmail.com",
        password: "rishabh",
    }
];

function getAllUsers(req, res, next) {
    if (Dummy_user.length === 0) {
        res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(Dummy_user);
}

function login(req, res, next) {

}

function signup(req, res, next) {

}

export { getAllUsers, login, signup };