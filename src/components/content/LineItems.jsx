import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({ e, handleCheck, handleDelete }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={e.checked}
                id={e.name}
                onChange={() => handleCheck(e.id)}
            />
            <label
                style={(e.checked) ? { textDecoration: "line-through" } : null}
                htmlFor={e.name}>{e.name}
            </label>
            <FaTrashAlt
                onClick={() => handleDelete(e.id)}
                className="btn-right"
                role="button"
                tabIndex="0"
            />
        </li>
    )
}

export default LineItems;
