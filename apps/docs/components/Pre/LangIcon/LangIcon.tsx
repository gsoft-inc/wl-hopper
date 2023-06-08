import CIcon from "./icons/c.svg";
import CSharpIcon from "./icons/csharp.svg";
import CSSIcon from "./icons/css.svg";
import DiffIcon from "./icons/diff.svg";
import DockerfileIcon from "./icons/docker.svg";
import HTMLIcon from "./icons/html.svg";
import JavaScriptIcon from "./icons/js.svg";
import JsonIcon from "./icons/json.svg";
import LessIcon from "./icons/less.svg";
import MarkdownIcon from "./icons/markdown.svg";
import PhpIcon from "./icons/php.svg";
import PlaintextIcon from "./icons/text.svg";
import PowershellIcon from "./icons/powershell.svg";
import PythonIcon from "./icons/python.svg";
import RubyIcon from "./icons/ruby.svg";
import ScssIcon from "./icons/scss.svg";
import ShellScriptIcon from "./icons/shell.svg";
import SqlIcon from "./icons/sql.svg";
import TypescriptIcon from "./icons/typescript.svg";
import XmlIcon from "./icons/xml.svg";
import YamlIcon from "./icons/yaml.svg";
import FileIcon from "./icons/file.svg";

const LangMapping = {
    "c":CIcon,
    "csharp": CSharpIcon,
    "css": CSSIcon,
    "diff": DiffIcon,
    "dockerfile": DockerfileIcon,
    "html": HTMLIcon,
    "js": JavaScriptIcon,
    "jsx":JsonIcon,
    "less": LessIcon,
    "markdown": MarkdownIcon,
    "php": PhpIcon,
    "plaintext": PlaintextIcon,
    "powershell": PowershellIcon,
    "python": PythonIcon,
    "ruby": RubyIcon,
    "scss": ScssIcon,
    "shell": ShellScriptIcon,
    "sql": SqlIcon,
    "typescript": TypescriptIcon,
    "ts": TypescriptIcon,
    "tsx": TypescriptIcon,
    "xml": XmlIcon,
    "yaml": YamlIcon
};

// disable next line so we can offer autocomplete
// eslint-disable-next-line @typescript-eslint/ban-types
export type AvailableLanguages = keyof typeof LangMapping & (string & {});

interface LangIconProps extends React.SVGProps<SVGSVGElement> {
    lang: AvailableLanguages;
}

export const LangIcon = ({ lang, ...rest }: LangIconProps) => {
    const IconComponent = LangMapping[lang] ?? FileIcon;

    return IconComponent ? <IconComponent {...rest} /> : null;
};
