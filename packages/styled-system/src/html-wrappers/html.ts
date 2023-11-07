import type { ComponentProps } from "react";
import { htmlElement } from "./htmlElement.tsx";

// Sectioning & Content sectioning

/**
 * A specialized wrapping component for HTML `address` element that allows style props.
*/
export const Address = htmlElement("address");

/**
 * A specialized wrapping component for HTML `article` element that allows style props.
*/
export const Article = htmlElement("article");

/**
 * A specialized wrapping component for HTML `aside` element that allows style props.
*/
export const Aside = htmlElement("aside");

/**
 * A specialized wrapping component for HTML `footer` element that allows style props.
*/
export const HtmlFooter = htmlElement("footer");

/**
 * A specialized wrapping component for HTML `h1` element that allows style props.
*/
export const HtmlH1 = htmlElement("h1");

/**
 * A specialized wrapping component for HTML `h2` element that allows style props.
*/
export const HtmlH2 = htmlElement("h2");

/**
 * A specialized wrapping component for HTML `h3` element that allows style props.
*/
export const HtmlH3 = htmlElement("h3");

/**
 * A specialized wrapping component for HTML `h4` element that allows style props.
*/
export const HtmlH4 = htmlElement("h4");

/**
 * A specialized wrapping component for HTML `h5` element that allows style props.
*/
export const HtmlH5 = htmlElement("h5");

/**
 * A specialized wrapping component for HTML `h6` element that allows style props.
*/
export const HtmlH6 = htmlElement("h6");

/**
 * A specialized wrapping component for HTML `header` element that allows style props.
*/
export const HtmlHeader = htmlElement("header");

/**
 * A specialized wrapping component for HTML `main` element that allows style props.
*/
export const Main = htmlElement("main");

/**
 * A specialized wrapping component for HTML `nav` element that allows style props.
*/
export const Nav = htmlElement("nav");

/**
 * A specialized wrapping component for HTML `section` element that allows style props.
*/
export const HtmlSection = htmlElement("section");

export type AddressProps = ComponentProps<typeof Address>;
export type ArticleProps = ComponentProps<typeof Article>;
export type AsideProps = ComponentProps<typeof Aside>;
export type HtmlFooterProps = ComponentProps<typeof HtmlFooter>;
export type HtmlH1Props = ComponentProps<typeof HtmlH1>;
export type HtmlH2Props = ComponentProps<typeof HtmlH2>;
export type HtmlH3Props = ComponentProps<typeof HtmlH3>;
export type HtmlH4Props = ComponentProps<typeof HtmlH4>;
export type HtmlH5Props = ComponentProps<typeof HtmlH5>;
export type HtmlH6Props = ComponentProps<typeof HtmlH6>;
export type HtmlHeaderProps = ComponentProps<typeof HtmlHeader>;
export type MainProps = ComponentProps<typeof Main>;
export type NavProps = ComponentProps<typeof Nav>;
export type HtmlSectionProps = ComponentProps<typeof HtmlSection>;

// Text content

/**
 * A specialized wrapping component for HTML `div` element that allows style props.
*/
export const Div = htmlElement("div");

/**
 * A specialized wrapping component for HTML `p` element that allows style props.
*/
export const HtmlParagraph = htmlElement("p");

/**
 * A specialized wrapping component for HTML `ol` element that allows style props.
*/
export const OL = htmlElement("ol");

/**
 * A specialized wrapping component for HTML `ul` element that allows style props.
*/
export const UL = htmlElement("ul");

/**
 * A specialized wrapping component for HTML `li` element that allows style props.
*/
export const LI = htmlElement("li");

export type DivProps = ComponentProps<typeof Div>;
export type HtmlParagraphProps = ComponentProps<typeof HtmlParagraph>;
export type OLProps = ComponentProps<typeof OL>;
export type ULProps = ComponentProps<typeof UL>;
export type LIProps = ComponentProps<typeof LI>;

// Inline text semantics

/**
 * A specialized wrapping component for HTML `anchor` element that allows style props.
*/
export const A = htmlElement("a");

/**
 * A specialized wrapping component for HTML `span` element that allows style props.
*/
export const Span = htmlElement("span");

export type AProps = ComponentProps<typeof A>;
export type SpanProps = ComponentProps<typeof Span>;

// Image and multimedia

/**
 * A specialized wrapping component for HTML `img` element that allows style props.
*/
export const Img = htmlElement("img");

export type ImgProps = ComponentProps<typeof Img>;

// Table content

/**
 * A specialized wrapping component for HTML `table` element that allows style props.
*/
export const Table = htmlElement("table");

/**
 * A specialized wrapping component for HTML `thead` element that allows style props.
*/
export const THead = htmlElement("thead");

/**
 * A specialized wrapping component for HTML `tbody` element that allows style props.
*/
export const TBody = htmlElement("tbody");

/**
 * A specialized wrapping component for HTML `tfoot` element that allows style props.
*/
export const TFoot = htmlElement("tfoot");

/**
 * A specialized wrapping component for HTML `th` element that allows style props.
*/
export const TH = htmlElement("th");

/**
 * A specialized wrapping component for HTML `tr` element that allows style props.
*/
export const TR = htmlElement("tr");

/**
 * A specialized wrapping component for HTML `td` element that allows style props.
*/
export const TD = htmlElement("td");

export type TableProps = ComponentProps<typeof Table>;
export type THeadProps = ComponentProps<typeof THead>;
export type TBodyProps = ComponentProps<typeof TBody>;
export type TFootProps = ComponentProps<typeof TFoot>;
export type THProps = ComponentProps<typeof TH>;
export type TRProps = ComponentProps<typeof TR>;
export type TDProps = ComponentProps<typeof TD>;

// Forms
/**
 * A specialized wrapping component for HTML `button` element that allows style props.
*/
export const HtmlButton = htmlElement("button");

/**
 * A specialized wrapping component for HTML `form` element that allows style props.
*/
export const HtmlForm = htmlElement("form");

/**
 * A specialized wrapping component for HTML `input` element that allows style props.
*/
export const HtmlInput = htmlElement("input");

/**
 * A specialized wrapping component for HTML `label` element that allows style props.
*/
export const HtmlLabel = htmlElement("label");

/**
 * A specialized wrapping component for HTML `textarea` element that allows style props.
*/
export const HtmlTextArea = htmlElement("textarea");

export type HtmlButtonProps = ComponentProps<typeof HtmlButton>;
export type HtmlFormProps = ComponentProps<typeof HtmlForm>;
export type HtmlInputProps = ComponentProps<typeof HtmlInput>;
export type HtmlLabelProps = ComponentProps<typeof HtmlLabel>;
export type HtmlTextAreaProps = ComponentProps<typeof HtmlTextArea>;
