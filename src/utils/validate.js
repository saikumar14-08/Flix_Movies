
export const checkValidData = (email, password, fullName=null) => {
  let emailVaild = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  let passwordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
  let fullNameValid = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/.test(fullName)

  if(!emailVaild) return "Invalid Email Address."
  if(!passwordValid) return "Invalid password."
  if(!fullNameValid) return "Invalid Full Name."
  return null
}
