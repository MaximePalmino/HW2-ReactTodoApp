import Todo from "./Todo"
import { motion, AnimatePresence } from "framer-motion"

const TodoList = ({todos, setTodo}) => {

    return (
         <AnimatePresence>
            {todos.slice(0,3).map((todo) => (
                        <motion.div className="motion__div"
                        key={todo.id}
                        whileHover={{ scale: 1.1 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 300 }}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        style={{width:'100%'}}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 50, opacity: 0 }}>

                <Todo title={todo.title} content={todo.content} id={todo.id} setTodo={setTodo} todos={todos} time={todo.time} isDone={todo.isDone} />
                
                </motion.div>
            ))}
        </AnimatePresence>

    )
}

export default TodoList