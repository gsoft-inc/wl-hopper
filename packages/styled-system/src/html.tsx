import type { ComponentProps, ComponentType, ElementType, FunctionComponent } from "react";

import { type HtmlElementProps, htmlElement } from "./htmlElement.tsx";
import { isNil } from "./assertion.ts";

// Sectioning & Content sectioning

/**
 * A specialized wrapping component for HTML `address` element that allows style props.
*/
export const Address = htmlElement("html-address", "address");

/**
 * A specialized wrapping component for HTML `article` element that allows style props.
*/
export const Article = htmlElement("html-article", "article");

/**
 * A specialized wrapping component for HTML `aside` element that allows style props.
*/
export const Aside = htmlElement("html-aside", "aside");

/**
 * A specialized wrapping component for HTML `footer` element that allows style props.
*/
export const HtmlFooter = htmlElement("html-footer", "footer");

/**
 * A specialized wrapping component for HTML `h1` element that allows style props.
*/
export const HtmlH1 = htmlElement("html-h1", "h1");

/**
 * A specialized wrapping component for HTML `h2` element that allows style props.
*/
export const HtmlH2 = htmlElement("html-h2", "h2");

/**
 * A specialized wrapping component for HTML `h3` element that allows style props.
*/
export const HtmlH3 = htmlElement("html-h3", "h3");

/**
 * A specialized wrapping component for HTML `h4` element that allows style props.
*/
export const HtmlH4 = htmlElement("html-h4", "h4");

/**
 * A specialized wrapping component for HTML `h5` element that allows style props.
*/
export const HtmlH5 = htmlElement("html-h5", "h5");

/**
 * A specialized wrapping component for HTML `h6` element that allows style props.
*/
export const HtmlH6 = htmlElement("html-h6", "h6");

/**
 * A specialized wrapping component for HTML `header` element that allows style props.
*/
export const HtmlHeader = htmlElement("html-header", "header");

/**
 * A specialized wrapping component for HTML `main` element that allows style props.
*/
export const Main = htmlElement("html-main", "main");

/**
 * A specialized wrapping component for HTML `nav` element that allows style props.
*/
export const Nav = htmlElement("html-nav", "nav");

/**
 * A specialized wrapping component for HTML `section` element that allows style props.
*/
export const HtmlSection = htmlElement("html-section", "section");

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
export const Div = htmlElement("html-div", "div");

/**
 * A specialized wrapping component for HTML `p` element that allows style props.
*/
export const HtmlParagraph = htmlElement("html-p", "p");

/**
 * A specialized wrapping component for HTML `ol` element that allows style props.
*/
export const OL = htmlElement("html-ol", "ol");

/**
 * A specialized wrapping component for HTML `ul` element that allows style props.
*/
export const UL = htmlElement("html-ul", "ul");

/**
 * A specialized wrapping component for HTML `li` element that allows style props.
*/
export const LI = htmlElement("html-li", "li");

export type DivProps = ComponentProps<typeof Div>;
export type HtmlParagraphProps = ComponentProps<typeof HtmlParagraph>;
export type OLProps = ComponentProps<typeof OL>;
export type ULProps = ComponentProps<typeof UL>;
export type LIProps = ComponentProps<typeof LI>;

// Inline text semantics

/**
 * A specialized wrapping component for HTML `anchor` element that allows style props.
*/
export const A = htmlElement("html-a", "a");

/**
 * A specialized wrapping component for HTML `span` element that allows style props.
*/
export const Span = htmlElement("html-span", "span");

export type AProps = ComponentProps<typeof A>;
export type SpanProps = ComponentProps<typeof Span>;

// Image and multimedia

/**
 * A specialized wrapping component for HTML `img` element that allows style props.
*/
export const Img = htmlElement("html-img", "img");

export type ImgProps = ComponentProps<typeof Img>;

// Table content

/**
 * A specialized wrapping component for HTML `table` element that allows style props.
*/
export const Table = htmlElement("html-table", "table");

/**
 * A specialized wrapping component for HTML `thead` element that allows style props.
*/
export const THead = htmlElement("html-thead", "thead");

/**
 * A specialized wrapping component for HTML `tbody` element that allows style props.
*/
export const TBody = htmlElement("html-tbody", "tbody");

/**
 * A specialized wrapping component for HTML `tfoot` element that allows style props.
*/
export const TFoot = htmlElement("html-tfoot", "tfoot");

/**
 * A specialized wrapping component for HTML `th` element that allows style props.
*/
export const TH = htmlElement("html-th", "th");

/**
 * A specialized wrapping component for HTML `tr` element that allows style props.
*/
export const TR = htmlElement("html-tr", "tr");

/**
 * A specialized wrapping component for HTML `td` element that allows style props.
*/
export const TD = htmlElement("html-td", "td");

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
export const HtmlButton = htmlElement("html-button", "button");

/**
 * A specialized wrapping component for HTML `form` element that allows style props.
*/
export const HtmlForm = htmlElement("html-form", "form");

/**
 * A specialized wrapping component for HTML `input` element that allows style props.
*/
export const HtmlInput = htmlElement("html-input", "input");

/**
 * A specialized wrapping component for HTML `label` element that allows style props.
*/
export const HtmlLabel = htmlElement("html-label", "label");

/**
 * A specialized wrapping component for HTML `textarea` element that allows style props.
*/
export const HtmlTextArea = htmlElement("html-textarea", "textarea");

export type HtmlButtonProps = ComponentProps<typeof HtmlButton>;
export type HtmlFormProps = ComponentProps<typeof HtmlForm>;
export type HtmlInputProps = ComponentProps<typeof HtmlInput>;
export type HtmlLabelProps = ComponentProps<typeof HtmlLabel>;
export type HtmlTextAreaProps = ComponentProps<typeof HtmlTextArea>;

///////////

export const HtmlElementType: Partial<Record<keyof JSX.IntrinsicElements, ElementType>> = {
    "a": A,
    "address": Address,
    "article": Article,
    "button": HtmlButton,
    "div": Div,
    "footer": HtmlFooter,
    "form": HtmlForm,
    "h1": HtmlH1,
    "h2": HtmlH2,
    "h3": HtmlH3,
    "h4": HtmlH4,
    "h5": HtmlH5,
    "h6": HtmlH6,
    "header": HtmlHeader,
    "img": Img,
    "input": HtmlInput,
    "label": HtmlLabel,
    "li": LI,
    "main": Main,
    "nav": Nav,
    "ol": OL,
    "p": HtmlParagraph,
    "section": HtmlSection,
    "span": Span,
    "table": Table,
    "tbody": TBody,
    "td": TD,
    "textarea": HtmlTextArea,
    "tfoot": TFoot,
    "th": TH,
    "thead": THead,
    "tr": TR,
    "ul": UL
};

export function getHtmlElementType(as: keyof JSX.IntrinsicElements | ElementType) {
    const elementType = HtmlElementType[as as keyof JSX.IntrinsicElements];

    if (!isNil(elementType)) {
        return elementType;
    }

    return as;
}
