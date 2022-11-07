import Link from 'next/link'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import userState from 'src/recoil/user'

export default function Home() {
    const [user, setUser] = useRecoilState(userState)

    const handleChangeUser = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setUser(value)
    }
    return (
        <div>
            <div>
                <h1>Home</h1>
            </div>
            <div>
                <span>pageUser : {user}</span>
            </div>
            <div>
                <input
                    onChange={(e) => {
                        handleChangeUser(e)
                    }}
                    placeholder="유저 입력하기"
                    value={user}
                />
            </div>
            <Link href="/todo">
                <button>Todo Pages 이동</button>
            </Link>
        </div>
    )
}
