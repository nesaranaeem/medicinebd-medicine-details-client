// import Link from "next/link";
// import { useContext, useState } from "react";
// import { toast } from "react-hot-toast";
// import Select from "react-select";
// import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
// const index = () => {
//   const gender = [
//     { value: "1", label: "Male" },
//     { value: "2", label: "Female" },
//   ];
//   const { createUser, updateName, googleLogin, setUser } =
//     useContext(AuthContext);
//   const [formData, setFormData] = useState({});
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [createdUserEmail, setCreatedUserEmail] = useState("");
//   const [image, setImage] = useState("");
//   const [ImageUrl, setImageUrl] = useState("");
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", "medebd");
//     data.append("cloud_name", "draz5dcbl");
//     fetch("https://api.cloudinary.com/v1_1/draz5dcbl/image/upload", {
//       method: "post",
//       body: data,
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         setImageUrl(data.secure_url);
//         console.log(data);
//         console.log(ImageUrl);
//         if (data.secure_url) {
//           createUser(formData.email, formData.password).then((result) => {
//             const user = result.user;
//             updateName(formData.name, ImageUrl).then(() => {
//               setUser({
//                 ...user,
//                 displayName: formData.name,
//                 photoURL: ImageUrl,
//               });
//               const currentUser = {
//                 email: user.email,
//               };
//             });
//             toast.success(`Hello, ${user.displayName}. Signup Successed`);
//           });
//         }
//       })
//       .catch((err) => console.log(err));
//   };
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <div className="m-5 text-sm breadcrumbs">
//         <ul>
//           <li>
//             <Link href="/">Home</Link>
//           </li>

//           <li>SignUp</li>
//         </ul>
//       </div>
//       <div className="flex justify-center text-black bg-base-100 my-3">
//         <form
//           className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
//           onSubmit={handleSubmit}
//         >
//           <div className="card-body">
//             <h3 className="text-center text-2xl">Sign Up</h3>
//             <div className="form-control mt-2">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name || ""}
//                 onChange={handleChange}
//                 className="input input-bordered"
//                 placeholder="Eg. Nesar"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email Address</span>
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 value={formData.email || ""}
//                 onChange={handleChange}
//                 className="input input-bordered"
//                 placeholder="Eg. you@gmail.com"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password || ""}
//                 onChange={handleChange}
//                 className="input input-bordered"
//                 placeholder="Min. 6 character"
//                 required
//               />
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Gender</span>
//               </label>
//               <Select
//                 defaultValue={selectedGender}
//                 onChange={setSelectedGender}
//                 options={gender}
//               />
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Occupation</span>
//               </label>
//               <input
//                 type="text"
//                 name="occupation"
//                 value={formData.occupation || ""}
//                 onChange={handleChange}
//                 className="input input-bordered"
//                 placeholder="Eg. Professor"
//                 required
//               />
//             </div>
//             <div className="form-control mt-2">
//               <label className="label">
//                 <span className="label-text">Profile Photo</span>
//               </label>
//               <input
//                 type="file"
//                 onChange={(e) => setImage(e.target.files[0])}
//                 className="file-input w-full max-w-xs"
//               />
//             </div>
//             <div className="form-control mt-2">
//               <input className="btn" value="Sign Up" type="submit" />
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default index;
import React from "react";

const index = () => {
  return (
    <div className="my-3">
      <div className="alert alert-error shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Task failed successfully.! Page is not ready yet</span>
        </div>
      </div>
    </div>
  );
};

export default index;
