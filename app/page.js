'use client'
import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  const handleClick = () => {
    router.push('/message')
  }

  return (

    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <button
        style={{ cursor: 'pointer', width: '100px', borderRadius: '10px', border: 'none', padding: '5px' }}
        onClick={handleClick}
      >
        Chat
      </button>
    </div>
  )
}
