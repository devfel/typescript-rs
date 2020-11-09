"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        email: "luiz@gmail.com",
        password: "1234",
        techs: ["Node.js", "ReactJS", "React Native", { title: "JavaScript", exp: 100 }],
    });
    console.log(user.email);
    return response.json({ message: "Hello World" + user.password });
}
exports.helloWorld = helloWorld;
