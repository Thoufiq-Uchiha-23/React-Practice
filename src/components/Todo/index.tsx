import TodoItem from "./TodoItem"

const Todo: React.FC = () => {
    return (
        <div>
            <ol>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ol>
        </div>
    )
}

export default Todo