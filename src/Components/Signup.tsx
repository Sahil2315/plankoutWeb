import { baseAPI } from "@/API"
import { useState } from "react"
import { toast } from "sonner"

const Signup = ({mode, setMode}: {mode: string, setMode: (m: string) => void}) => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setCPword] = useState<string>("")
  async function submitter(){
    if (username && password && confirmPassword){
        if (password == confirmPassword){   
            let req = await fetch( baseAPI + "/api/user/signup", {
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
            if (!req.ok){
                toast.error(resp.detail, {
                    position: "top-center",
                    style: {
                        'fontSize': '16px',
                        'color': 'red',
                        'padding': '16px'
                    }
                })
            }
            if(resp.success){
                toast("Successful Registration")
                setMode("login")
            }
            
        }
        else{
            toast("Passwords do not match! Re-enter the Passwords")
            setPassword("")
            setCPword("")
        }
    }
    else{
        toast("All Fields are required!")
    }
  }
  return (
    <div className={mode == "signup" ? 'w-full flex flex-col h-[550px] items-center relative': 'hidden'}>
        <span className="text-5xl font-bold mt-4">Signup</span>
        <span className="text-lg mt-4">Register to Access  XYZ</span>
        <div className="flex flex-col w-[85%]">
            <span className="text-xl mt-4 font-semibold">Username:</span>
            <input onChange={(e) => setUsername(e.target.value)} className="text-lg mt-2 px-2 py-1 border-1 border-indigo-500/70 rounded-lg" type="text" />
            <span className="text-xl mt-4 font-semibold">Password:</span>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="text-lg mt-2 px-2 py-1 border-1 border-indigo-500/70 rounded-lg" type="password" />
            <span className="text-xl mt-4 font-semibold">Confirm Password:</span>
            <input value={confirmPassword} onChange={(e) => setCPword(e.target.value)} className="text-lg mt-2 px-2 py-1 border-1 border-indigo-500/70 rounded-lg" type="password" />
        </div>
        <button onClick={submitter} className="rounded-lg py-1 px-4 mt-8 text-xl bg-indigo-500/50 hover:bg-indigo-500/70">Signup</button>
        <button onClick={() => setMode("login")} className="rounded-lg py-1 px-4 mt-8 text-xl bg-slate-500/50 hover:bg-slate-500/70 absolute right-4 top-0">Login</button>
    </div>
  )
}

export default Signup