import "./list.css";

export const List = ({ styles }) => {
    const listItems = styles.map(style => {
        return (
            <li className="list__item" >
                <div className="list__color" style={{ backgroundColor: style.value }} />
                <span className="list__value">{style.value}</span>
                <span className="list__name">{style.name}</span>
            </li>);
    });

    return <ul className="list">{listItems}</ul>;
};
