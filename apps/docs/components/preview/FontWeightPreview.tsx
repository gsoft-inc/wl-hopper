import "@hopper-ui/tokens/fonts.css";
import "./preview.css";

interface FontWeightPreviewProps {
    values?: TypographyValues;
    style?: React.CSSProperties;
}

interface TypographyValues {
    fontWeight?: string;
}

const FontWeightPreview = ({ values, style }: FontWeightPreviewProps) => {
    return <div className="hd-preview hd-preview--font hd-preview--typography" style={{ fontWeight: values?.fontWeight, ...style }}>Aa</div>;
};

export default FontWeightPreview;

