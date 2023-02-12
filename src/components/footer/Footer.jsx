const Footer = ({ length }) => {
    return (
        <footer className="footer">
            <p>{
                (length == 0) ? "Congratulation" : `${length}${length === 1 ? " Item" : " Items"} Left`
            }
            </p>
        </footer>
    );
};

export default Footer;