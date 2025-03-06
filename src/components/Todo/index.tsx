import TodoItem from "./TodoItem"

interface ITodoItem {
    id: number,
    title: string,
}

interface TodoProps {
    items: ITodoItem[]
}

const Todo: React.FC<TodoProps> = (props) => {
    return (
        <div>
            <ol>
                {props.items.map(item => <TodoItem key={item.id} title={item.title} />)}
            </ol>
            <ol>
                <TodoItem title="Eat"/>
                <TodoItem title="Code"/>
                <TodoItem title="Sleep"/>
                <TodoItem title="Repeat"/>
            </ol>
            <ol>
                <TodoItem title="Eat"/>
                <TodoItem title="Code"/>
                <TodoItem title="Sleep"/>
                <TodoItem title="Repeat"/>
            </ol>
        </div>
    )
}

export default Todo