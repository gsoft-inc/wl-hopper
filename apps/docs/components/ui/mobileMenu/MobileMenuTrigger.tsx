import IconButton from "@/components/ui/iconButton/IconButton";

interface MobileMenuTriggerProps {
    onToggle: () => void;
}

const MobileMenuTrigger = ({ onToggle }: MobileMenuTriggerProps) => {
    return (
        <IconButton className="hd-header__mobile-menu-trigger" onClick={onToggle}>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="hd-header__mobile-menu-trigger-icon">
                <path d="M1 7H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 1H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 13H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </IconButton>
    );
};

export default MobileMenuTrigger;
