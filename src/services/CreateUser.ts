interface TechObject {
  title: string;
  exp: number; // 0 to 100.
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = { name, email, password };
  return user;
}
