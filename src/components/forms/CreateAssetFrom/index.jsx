import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import PropTypes from "prop-types";
CreateAssetForm.propTypes = {
    handleCreate: PropTypes.func,
};

function CreateAssetForm(props) {
      const { handleCreate } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            id: "123",
            name: "",
            description: "",
            quantity: 0,
            pricePerUnit: 0,
            image: null

        },
    });
    return (
        <form onSubmit={handleSubmit(handleCreate)}>
            <Stack spacing={5}>

                <Stack
                    justifyContent={"space-between"}
                    direction={"row"}
                    spacing={"20%"}
                >
                    <TextField
                        required
                        label="Name"
                        //defaultValue="Fill the name"
                        placeholder="Fill the name"
                        {...register("name", { required: "Empty" })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                    <TextField
                        required
                        label="Quantity"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={0}
                        {...register("quantity", {
                            required: "requied",
                            validate: (value) => {
                                if (value < 0) return "Quantity can not be negative";
                            },
                        })}
                        error={!!errors.quantity}
                        helperText={errors.quantity?.message}
                    />
                </Stack>
                <TextField
                    label="Description"
                    multiline
                    rows={5}
                    //focused
                    placeholder="Fill the description"
                    {...register("des")}
                />

                <TextField
                    required
                    label="Price"
                    type="number"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">VND</InputAdornment>,
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={0}
                    {...register("price", {
                        required: "required",
                        validate: (value) => {
                            if (value < 0) return "Price can not be negative";
                        },
                    })}
                    error={!!errors.price}
                    helperText={errors.price?.message}
                />
                <Button type="submit">Submit</Button>
            </Stack>
        </form>
    );
}

export default CreateAssetForm;
