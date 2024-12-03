import { Button, Form, TextField } from "@hopper-ui/components";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  name: string
}


export default function Example() {
  const {handleSubmit, control} = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Call your API here...
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        rules={{ required: "Name is required." }}
        render={({
          field: { name, value, onChange, onBlur, ref },
          fieldState: { invalid, error },
        }) => (
          <TextField
            label="Name"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            isRequired
            isInvalid={invalid}
            errorMessage={error?.message}
          />
        )}
      />
      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  );
}
