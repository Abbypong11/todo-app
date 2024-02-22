
import { useLocalStorage } from "usehooks-ts";

function Todolist() {
    const[todos, setTodos] = useLocalStorage
        ("TODO_KEY", []); 

        
        return (
        <ul>
            <li>Complete online javascript course</li>
            <li>Jog around the park 3 times</li>
        </ul>
    );
        }


export default Todolist