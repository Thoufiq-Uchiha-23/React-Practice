import Todo from "./components/Todo";

const myItems = [
    {
        id: 1,
        title: "I need to finish my hw"
    },
    {
        id: 2,
        title: "I need to watch the new episode of my favorite show"
    }
]

const App: React.FC = () => {
    return (
        <div>
            <h1>Hello from App</h1>
            <Todo items={myItems} />
        </div>
    )
}

export default App;