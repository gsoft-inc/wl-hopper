- boolean props are now prefixed by `is`
- SearchField doesn't have an isLoading state
- InputField doesn't have an isLoading state either
- TextField's icon props have been renamed to prefix
- TextField's button props have been removed. To add a clear button, use the `isClearable` prop. For a more complex use case, create your own input using InputGroup.

- wrapperProps is missing, it should be added ?

validationState has been changed to isInvalid
