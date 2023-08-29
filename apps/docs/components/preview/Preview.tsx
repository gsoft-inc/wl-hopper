import "@hopper-ui/tokens/fonts.css";
import "./preview.css";

interface PreviewProps {
    category?: string;
    name?: string;
    value?: string;
}

interface PreviewElemProps {
    className?: string;
    content?: React.ReactNode;
    style?: React.CSSProperties;
}

const Preview = ({ category, name, value }: PreviewProps) => {
    let preview: PreviewElemProps = {};

    const sampleText = "Aa";
    const nameKeywords = ["inset", "stack", "inline"];
    const matchingKeyword = name ? nameKeywords.find(keyword => name.includes(keyword)) : "";

    switch (category) {
        case "fontFamily":
            preview = {
                style: { fontFamily: value },
                className: "hd-preview--font",
                content: sampleText
            };
            break;
        case "fontWeight":
            preview = {
                style: { fontWeight: value },
                className: "hd-preview--font",
                content: sampleText
            };
            break;
        case "fontSize":
            preview = {
                style: { fontSize: value },
                className: "hd-preview--font",
                content: sampleText
            };
            break;
        case "lineHeight":
            preview = {
                style: { lineHeight: value },
                className: "hd-preview--font hd-preview--line-height",
                content: <>{sampleText}<br />{sampleText}</>
            };
            break;
        case "mediaQuery":
        case "zIndex":
            preview = {
                style: {},
                className: "hd-preview--empty"
            };
            break;
        case "borderRadius":
            preview = {
                style: { borderTopLeftRadius: value },
                className: "hd-preview--stroke"
            };
            break;
        case "shadow":
        case "focus":
            preview = {
                style: { boxShadow: value },
                className: "hd-preview--shadow"
            };
            break;
        case "size":
            preview = {
                style: { width: value }
            };
            if (matchingKeyword) {
                preview = {
                    style: { padding: value },
                    className: `hd-preview--semantic-size hd-preview--${matchingKeyword}`
                };
            }
            break;
        default:
            preview = {
                style: { backgroundColor: value }
            };
            break;
    }

    return <div className={`hd-preview ${preview.className}`} style={preview.style}>{preview.content}</div>;
};

export default Preview;
