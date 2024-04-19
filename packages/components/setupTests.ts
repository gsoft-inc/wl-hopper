import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { enableFetchMocks } from "jest-fetch-mock";
import failOnConsole from "jest-fail-on-console";

// This is used for tests with react-router-dom.
// There was an error thrown "ReferenceError: Request is not defined"
enableFetchMocks();

// This will fail the test if there is a console.error or console.warn
failOnConsole()

