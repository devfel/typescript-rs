import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "luiz@gmail.com",
    password: "1234",
    techs: ["Node.js", "ReactJS", "React Native", { title: "JavaScript", exp: 100 }],
  });

  console.log(user.email);

  return response.json({ message: "Hello World" });
}
