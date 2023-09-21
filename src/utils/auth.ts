export default function auth({
  id,
  email,
  password,
  method = "login",
}: {
  id: string;
  email: string;
  password: string;
  method?: string;
}) {
  type User = {
    id: typeof id;
    email: typeof email;
    password: typeof password;
    method: typeof method;
  };

  const usuario: User = {
    id: id,
    email: email,
    password: password,
    method: method,
  };

  return usuario;
}
