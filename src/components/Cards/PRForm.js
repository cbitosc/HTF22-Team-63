// import React from "react";
// import { useForm } from "react-hook-form";
// import "./Form.css";

// function PRForm() {
//   const {register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => console.log(data);
  
//   return (
//     <>
//       {/* <p className="title">Registration Form</p>
//       <form className="App" onSubmit={handleSubmit(onSubmit)}>
//         <div className="display flex">
//         <h2>Name : </h2>
//         <input  type="text" {...register("name")} />
//         </div>
//         <div className="display flex">
//         <h2>Email : </h2>
//         <input type="email" {...register("email", { required: true })} />
//         {errors.email && <span style={{ color: "red" }}>
//         *Email* is mandatory </span>}
//         </div>
//         <div className="display flex">
//         <h2>Create Password: </h2>
//         <input type="password" {...register("password")} />
//         <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
//         </div>
//       </form> */}
//     </>
//   );
// }
// export default PRForm;