import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { enableFetchMocks } from "jest-fetch-mock";

// This is used for tests with react-router-dom.
// There was an error thrown "ReferenceError: Request is not defined"
enableFetchMocks();
