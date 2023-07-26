import Link from "next/link";

function Login() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-50">
      <div
        className="flex flex-col items-center p-4 py-4 border rounded-lg bg-white"
        id="login-box"
      >
        <p>Please Sign In</p>
        <input className="p-2 border border-gray-300 text-gray-900 my-2 rounded-sm" placeholder="Email Addres"/>
        <input type="password" className="p-2 border border-gray-300 text-gray-900 my-2 rounded-sm" placeholder="Password"/>
        <div className="flex mb-2"><input type="checkbox" className="mx-2"/><p>Remember Me</p></div>
        <Link href={'/alerts'} className="p-3 cursor-pointer bg-blue-600 rounded text-white">Sign in</Link>
      </div>
      <p className="mt-5 text-gray-500">© 2017-2023</p>
    </div>
  );
}

export default Login;
