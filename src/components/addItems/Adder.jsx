import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const Adder = ({ newItem, setNewItem, handleAdd }) => {
    const inputRef = useRef();
    return (
        <form className="addForm" onSubmit={handleAdd}>
            <input
                autoFocus
                ref={inputRef}
                required
                type="text"
                placeholder="Add a new task to the list"
                className="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                className="btn"
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form >
    )
}

export default Adder;