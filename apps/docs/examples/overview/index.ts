import type { FunctionComponent, SVGProps } from "react";

import Avatar from "./Avatar.svg";
import Badge from "./Badge.svg";
import Button from "./Button.svg";
import ButtonGroup from "./ButtonGroup.svg";
import Checkbox from "./Checkbox.svg";
import CheckboxGroup from "./CheckboxGroup.svg";
import Combobox from "./Combobox.svg";
import Divider from "./Divider.svg";
import ErrorMessage from "./ErrorMessage.svg";
import Flex from "./Flex.svg";
import FloatingBadge from "./FloatingBadge.svg";
import Form from "./Form.svg";
import Grid from "./Grid.svg";
import Heading from "./Heading.svg";
import HelperMessage from "./HelperMessage.svg";
import Inline from "./Inline.svg";
import Label from "./Label.svg";
import Link from "./Link.svg";
import ListBox from "./ListBox.svg";
import NumberField from "./NumberField.svg";
import PasswordField from "./PasswordField.svg";
import Popover from "./Popover.svg";
import RadioGroup from "./RadioGroup.svg";
import RemainingCharacterCount from "./RemainingCharacterCount.svg";
import SearchField from "./SearchField.svg";
import Select from "./Select.svg";
import Spinner from "./Spinner.svg";
import Stack from "./Stack.svg";
import Switch from "./Switch.svg";
import TagGroup from "./TagGroup.svg";
import Text from "./Text.svg";
import TextArea from "./TextArea.svg";
import TextField from "./TextField.svg";

type SvgComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

interface OverviewComponentsType {
    [key: string]: SvgComponent;
}

export const OverviewComponents: OverviewComponentsType = {
    Avatar,
    Badge,
    Button,
    ButtonGroup,
    Checkbox,
    CheckboxGroup,
    Combobox,
    Divider,
    ErrorMessage,
    Flex,
    FloatingBadge,
    Form,
    Grid,
    Heading,
    HelperMessage,
    Inline,
    Label,
    Link,
    ListBox,
    NumberField,
    PasswordField,
    Popover,
    RadioGroup,
    RemainingCharacterCount,
    SearchField,
    Select,
    Spinner,
    Stack,
    Switch,
    TagGroup,
    Text,
    TextArea,
    TextField
};
