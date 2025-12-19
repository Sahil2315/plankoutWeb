import { baseAPI } from "@/API"
import { useEffect } from "react"

const Diet = () => {
  useEffect(() => {
    async function Init(){
      let request = await fetch( baseAPI + '/generateDiet', {
        'method': 'POST', 
        'headers': {
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
        
        })
      })
      let response = await request.json()
      if(response.success){
        
      }
    } 
    Init()
  }, [])
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <span className="text-3xl font-semibold">Today's Diet Plan</span>
    </div>
  )
}

export default Diet