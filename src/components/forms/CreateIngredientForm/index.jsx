import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import dayjs from "dayjs";
import PropTypes from "prop-types";
CreateIngredientForm.propTypes = {
    handleCreate: PropTypes.func,
};

function CreateIngredientForm(props) {
    const { handleCreate } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            pricePerUnit: 0,
            description: "",
            quantity: 0,
            name: "",
            importDate: "",
            expiredDate: "",
            image: null
        },
    });
    return (
        <form onSubmit={handleSubmit(handleCreate)}>
            <Stack spacing={5}>
                <Stack direction={"row"} spacing={'20%'} justifyContent={"space-between"}>


                </Stack>
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
                    {...register("description")}
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
                    {...register("pricePerUnit", {
                        required: "required",
                        validate: (value) => {
                            if (value < 0) return "Price can not be negative";
                        },
                    })}
                    error={!!errors.price}
                    helperText={errors.price?.message}
                />
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <TextField
                        //name="importedDate"
                        label="Imported date"
                        InputLabelProps={{ shrink: true, required: true }}
                        type="date"
                        {...register("importDate", {
                            required: "required",
                            validate: (value) => {
                                if (dayjs().isBefore(value)) return "Invalid imported date"
                            }
                        })}
                        error={!!errors.importDate}
                        helperText={errors.importDate?.message}
                    />
                    <TextField
                        //name="expiredDate"
                        label="Expired date"
                        InputLabelProps={{ shrink: true, required: true }}
                        type="date"
                        {...register("expiredDate", {
                            required: "required",
                            validate: (value) => {
                                if (dayjs().isAfter(value)) return "Invalid expired date"
                            }
                        })}
                        error={!!errors.expiredDate}
                        helperText={errors.expiredDate?.message}
                    />
                </Stack>
                <Button type="submit">Submit</Button>
            </Stack>
        </form>
    );
}

export default CreateIngredientForm;
