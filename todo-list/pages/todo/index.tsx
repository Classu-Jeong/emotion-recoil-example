import Link from 'next/link'
import { FormEvent } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from 'src/recoil/todo'

export default function Todo() {
    const [todoList, setTodoList] = useRecoilState(todoListState)
    const index = todoList.findIndex((listItem) => listItem === 0)

    return (
        <div>
            <div>
                <h1>Todo</h1>
            </div>
            <div>
                <span>todo : {todoList}</span>
            </div>
            <div>
                <form>
                    <input
                        placeholder="유저 입력하기"
                        value={todoList}
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
