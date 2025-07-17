export function validateCredentials(email, password) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{8,}$/;

  return {
    email: typeof email === "string" && emailRegex.test(email.trim()),
    password: typeof password === "string" && passwordRegex.test(password),
  };
}
