export const validate = (email, password) => {
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const checkEmail = emailRegex.test(email);
  const checkPassword = passwordRegex.test(password);

  if (!checkEmail) return "Email is not valid";
  if (!checkPassword) return "Password is not valid";

  return null;
};
