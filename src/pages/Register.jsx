import toast from "react-hot-toast";
import { Button, TextInput } from "../components";
import { useRegister } from "../hooks/useRegister";

function Register() {
  const { register, isLoading } = useRegister();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return toast.error("Email and Password are required");
    }

    register(Object.fromEntries(formData));
  }

  return (
    <div className=" w-full h-full flex justify-center ">
      <div className="w-full flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 rounded-xl py-8 w-2/5 flex flex-col items-center mt-8 p-4 "
        >
          <h3 className="text-3xl font-bold mb-8">Create a new account</h3>
          <TextInput type="email" label="Email" name="email" />
          <TextInput type="password" label="Password" name="password" />

          <div className="w-full px-4 mt-4">
            <Button
              disabled={isLoading}
              type="secondary"
              className=" w-full bg-blue-500 hover:bg-blue-800"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
