import { baseAPI } from "@/API"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const Login = ({mode, setMode}: {mode: string, setMode: (m: string) => void}) => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate()
  async function submitter(){
    if (username && password ){
        let req = await fetch( baseAPI + "/api/user/login", {
            'method': "POST",
            "headers": {
                'Content-Type': 'application/json'
            },
            "body": JSON.stringify({
                'username': username,
                'password': password
            })
        })
        let resp = await req.json()
        console.log(resp)
        if (resp.success){
            navigate("/home")
            const token = resp.token
            localStorage.setItem("userToken", token)
        }
    }
    else{
        toast("All Fields are required!")
    }
  }
  return (
    <div className={mode == "login" ? 'w-full flex flex-col items-center relative h-[550px]': 'hidden'}>
        <span className="text-5xl font-bold mt-4">Login</span>
        <span className="text-lg mt-4">Text related to Authentication / Welcoming Message</span>
        <div className="flex flex-col w-[95%]">
            <span className="text-3xl mt-8 font-semibold">Username:</span>
            <input onChange={(e) => setUsername(e.target.value)} className="text-2xl mt-2 px-3 py-1 border-1 border-indigo-500/70 rounded-lg" type="text" />
            <span className="text-3xl mt-8 font-semibold">Password:</span>
            <input onChange={(e) => setPassword(e.target.value)} className="text-2xl mt-2 px-3 py-1 border-1 border-indigo-500/70 rounded-lg" type="password" />
        </div>
        <button onClick={submitter} className="rounded-lg py-1 px-4 mt-8 text-xl bg-indigo-500/50 hover:bg-indigo-500/70">Login</button>
        <button onClick={() => setMode("signup")} className="rounded-lg py-1 px-4 mt-8 text-xl bg-slate-500/50 hover:bg-slate-500/70 absolute right-4 top-0">Signup</button>
    </div>
  )
}

export default Login