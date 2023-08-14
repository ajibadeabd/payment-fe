import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Button, Input, Text } from "components";
import { FiMail, FiLock } from "react-icons/fi"; // You might need to import icons
import { login } from "store/user.store/userSlice";
import { useDispatch } from "react-redux";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting }, 
  } = useForm();
    const dispatch = useDispatch();


  const onSubmit = async (data: any) => {
    setLoading(true)
   const response = await dispatch(login(data) as any )
   if(response?.payload?.success){
    navigate("/dashboard")
    return
   }
   setLoading(false)

  };
  const [loading, setLoading] = useState(false); // Added state for loading
 

  const rowData = [
    {
      label: "Email",
      name: "email",
      placeHolder: "input your email",
      type: "text",
      icon: <FiMail />,
      register: register("email", { required: true, pattern: /^\S+@\S+$/i }),
      error:"Please enter a valid email address"
    },
    {
      label: "Password",
      name: "password",
      placeHolder: "**** **** **** ****",
      type: "password",
      icon: <FiLock />,
      error:"Please enter a password with at least 8 characters",
      register: register("password", { required: true, minLength: 8 }),
    },
  ];

  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen">
      <div className="bg-red-100 p-8 rounded-lg shadow-lg md:w-[400px] sm:w-[350px] w-[600px]">
        <Text className="text-2xl font-semibold mb-4">Sign In</Text>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {rowData.map((eachRow, key) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700">
                {eachRow.label}
              </label>
              <div className="relative rounded-md shadow-sm">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {eachRow.icon}
                </span>
                <input
                  type={eachRow.type}
                  name={eachRow.name}
                  placeholder={eachRow.placeHolder}
                  defaultValue={eachRow.name}
                  className="bg-gray-100 py-2 pl-10 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  {...eachRow.register}
                />
              </div>
              {errors[eachRow.name] && <span className="text-red-500">{eachRow.error}</span>}

            </div>
          ))}
          <Button
            type="submit"
            disabled={loading || isSubmitting}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md w-full"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
