import { HopperProvider, LinkButton } from "@hopper-ui/components";
import { createMemoryRouter, RouterProvider, useNavigate } from "react-router-dom";

export default function App() {
    const router = createMemoryRouter([{
        path: "/123",
        element: <>Navigated Successfully! <Example /></>
    }, {
        path: "*",
        element: <Example />
    }
    ]);

    return (
        <RouterProvider router={router} />
    );
}

function Example() {
    const navigate = useNavigate();

    return (
        <HopperProvider colorScheme="light" navigate={navigate}>
            <LinkButton href="/123">Go to next router page</LinkButton>
        </HopperProvider>

    );
}
