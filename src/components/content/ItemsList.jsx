import LineItems from "./LineItems";

const ItemsList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((e) => {
                return (
                    <LineItems
                        key={e.id}
                        e={e}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                )
            })
            }
        </ul>
    )
}

export default ItemsList;
