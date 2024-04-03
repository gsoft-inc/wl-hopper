import "./footnote.css";

interface FootnoteProps {
    children: React.ReactNode;
    name: string;
}

const Footnote: React.FC<FootnoteProps> = ({ children, name }) => {
    return (
        <div className="hd-footnote" id={name}>
            {children}
        </div>
    );
};

export default Footnote;
