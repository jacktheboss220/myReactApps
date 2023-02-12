const Header = ({ title }) => {
    return (
        <>
            <header className="header">
                <h1 className='heading'>
                    {title}
                </h1>
            </header>
        </>
    )
}
Header.defaultProps = {
    title: "Default title"
}

export default Header;