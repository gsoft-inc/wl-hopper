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

export const LangIcon = ({ lang, className }: { lang: string; className: string }) => {
    let IconComponent = null;

    switch (lang) {
        case "c":
            IconComponent = CIcon;
            break;
        case "csharp":
            IconComponent = CSharpIcon;
            break;
        case "css":
            IconComponent = CSSIcon;
            break;
        case "diff":
            IconComponent = DiffIcon;
            break;
        case "dockerfile":
            IconComponent = DockerfileIcon;
            break;
        case "html":
            IconComponent = HTMLIcon;
            break;
        case "js":
            IconComponent = JavaScriptIcon;
            break;
        case "jsx":
            IconComponent = JavaScriptIcon;
            break;
        case "json":
            IconComponent = JsonIcon;
            break;
        case "less":
            IconComponent = LessIcon;
            break;
        case "markdown":
            IconComponent = MarkdownIcon;
            break;
        case "php":
            IconComponent = PhpIcon;
            break;
        case "plaintext":
            IconComponent = PlaintextIcon;
            break;
        case "powershell":
            IconComponent = PowershellIcon;
            break;
        case "python":
            IconComponent = PythonIcon;
            break;
        case "ruby":
            IconComponent = RubyIcon;
            break;
        case "scss":
            IconComponent = ScssIcon;
            break;
        case "shell":
            IconComponent = ShellScriptIcon;
            break;
        case "sql":
            IconComponent = SqlIcon;
            break;
        case "typescript":
            IconComponent = TypescriptIcon;
            break;
        case "ts":
            IconComponent = TypescriptIcon;
            break;
        case "tsx":
            IconComponent = TypescriptIcon;
            break;
        case "xml":
            IconComponent = XmlIcon;
            break;
        case "yaml":
            IconComponent = YamlIcon;
            break;
        default:
            IconComponent = FileIcon; // Default fallback icon
            break;
    }

    return IconComponent ? <IconComponent className={className} /> : null;
};