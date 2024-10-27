import toast from "react-hot-toast";
import { Button, TextInput } from "../components";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return toast.error("Email and Password are required");
    }

    login(Object.fromEntries(formData));
  }

  return (
    <div className="  w-full h-full flex justify-center ">
      <div className="w-full flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 py-8 rounded-xl w-2/5 flex flex-col items-center mt-8 p-4 "
        >
          <h3 className="text-3xl font-bold mb-8">Log In</h3>
          <TextInput name="email" type="email" label="Email" />
          <TextInput name="password" type="password" label="Password" />

          <div className="w-full px-4 mt-4">
            <Button type="secondary" className=" w-full">
              Log In
            </Button>
          </div>
        </form>

        <div className="w-2/5 border-b-2 border-b-slate-200 bg-red-700 mt-8"></div>

        <Button to="/register" className=" mt-8 bg-slate-200">
          Create new account
        </Button>
      </div>
    </div>
  );
}

export default Login;
