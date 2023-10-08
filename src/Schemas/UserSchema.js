import * as Yup from "yup";

export  const UserSchema = Yup.object().shape({
  user_id: Yup.string().max(5).required(),
  name: Yup.string().min(2).max(25).required("Please enter your name"),

  password: Yup.string().min(6).max(6).required("Please ener your password")
})


