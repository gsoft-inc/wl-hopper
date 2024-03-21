import IconButton from "@/components/iconButton/IconButton";
import MobileMenuTriggerIcon from "./assets/mobile-menu-trigger.svg";

interface MobileMenuTriggerProps {
    onToggle: () => void;
}

const MobileMenuTrigger = ({ onToggle }: MobileMenuTriggerProps) => {
    return (
        <IconButton className="hd-header__mobile-menu-trigger" onClick={onToggle}>
            <MobileMenuTriggerIcon className="hd-header__mobile-menu-trigger-icon" />
        </IconButton>
    );
};

export default MobileMenuTrigger;
