import ItemsList from "./ItemsList";

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <section className="content">
            {items.length != 0 ?
                (
                    <ItemsList
                        items={items}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                ) : (
                    <p className="empty">
                        You have completed all your tasks!
                    </p>
                )
            }
        </section>
    )
}
export default Content;