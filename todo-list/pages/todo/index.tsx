import Link from 'next/link'
import { FormEvent } from 'react'
import { useRecoilState } from 'recoil'
import userState from 'src/recoil/user'

export default function Home() {
    const [user, setUser] = useRecoilState(userState)

    const handleChangeUser = (event: FormEvent<HTMLFormElement>) => {
        const { value } = event.target as HTMLInputElement
        if (value) setUser(value)
    }

    const handleSubmitUser = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    return (
        <div>
            <div>
                <h1>Todo</h1>
            </div>
            <div>
                <span>todo : {user}</span>
            </div>
            <div>
                <form onSubmit={(e) => handleChangeUser(e)}>
                    <input
                        placeholder="유저 입력하기"
                        value={user}
                        type="text"
                    />
                    <button type="submit">확인하기</button>
                </form>
            </div>
            <Link href="/">
                <button>Home Pages 이동</button>
            </Link>
        </div>
    )
}
