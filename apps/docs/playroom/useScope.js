import useColorSchemeContext from "@hopper-ui/components";

export default function useScope() {
    return {
        theme: useColorSchemeContext()
    };
}
