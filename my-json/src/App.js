import {useForm} from "react-hook-form"
import * as Yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
export const App = () => {
const validationSchema = Yup.object({
    name: Yup.string().required("ism majburiy"),
    lastname: Yup.string().required("familya majburiy"),
    email: Yup.string().email("Eamil xato").required("Email majburiy"),
    password:Yup.string().min(3, "Min 3").max(15, "Max 15").required("password majburiy")
})
const {register, watch, handleSubmit, formState:{errors,isValid}} = useForm({
    defaultValues: {
        name: "",
        lastname: "",
        email: "",
        password: ""
    },
    mode:  "onChange",
resolver:yupResolver(validationSchema)
})
const onSubmit = (event) => {
 console.log(event)
}
console.log(errors);
watch()
    return(
        <div className="d-flex text-center text-light align-items-center justify-content-center" style={{minHeight:"100vh"}}>
            <div className="container">
             <form onSubmit={handleSubmit(onSubmit)} className="w-25 mx-auto">
                <output>
                    <h1>Register</h1>
                </output>
                <label   className="w-100 text-start" htmlFor="name "> 
                <p className={errors?.name ? "text-danger": "text-light"}>{errors?.name ? "Ism majburiy": "Ism"}</p>
                <input {...register("name")}  className="form-control w-100" type="text" placeholder="Name" id="name" name="name" />
                </label>
                <label   className="w-100 my-3 text-start " htmlFor="lastname "> 
                <p className={errors?.lastname ? "text-danger": "text-light"}>{errors?.lastname ? "Familya majburiy": "Familya"}</p>
                <input {...register("lastname")} className="form-control w-100" type="text" placeholder="lastname" id="lastname" name="lastname" />
                </label>
                <label   className="w-100  text-start mb-3 " htmlFor="email "> 
                <p className={errors?.email ? "text-danger": "text-light"}>{errors?.email ? "Email majburiy": "Email"}</p>
                <input {...register("email")}  className="form-control w-100" type="email" placeholder="Email" id="email" name="email" />
                </label>
                <label   className="w-100 text-start " htmlFor="password "> 
                <p className={errors?.password ? "text-danger": "text-light"}>{errors?.password ? errors?.password?.message: "Password"}</p>
                <input {...register("password")}className="form-control w-100" type="password" placeholder="Password" id="password" name="password" />
                </label>
                <button disabled={!isValid} className="btn btn-primary mt-3" type="submit">Submit</button>
             </form>
            </div>
        </div>
    )
}