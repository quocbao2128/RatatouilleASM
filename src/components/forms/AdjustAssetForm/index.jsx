import { Button, Input, InputAdornment, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from "prop-types";
import dayjs from "dayjs";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';


AdjustAssetForm.propTypes = {
    handleAdjust: PropTypes.func,
    item: PropTypes.object,
};

function AdjustAssetForm(props) {
    //   const { handleCreate, autoGenId } = props;
    const { item } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            id: item.id,
            name: item.name,
            des: item.des,
            quantity: item.quantity,
            price: item.price,
            type: "Asset",
            pic: "src\\asset\\p1.jpg",
        }
    });
    return (
        <form onSubmit={handleSubmit((value) => console.log(value))}>
            <Stack spacing={5}>
                <Stack direction={"row"} spacing={'20%'} justifyContent={"space-between"}>
                    <TextField
                        disabled
                        variant="filled"
                        //id="outlined-disabled"
                        label="ID"
                        {...register("id")}
                    />
                    <TextField
                        //disabled
                        disabled
                        variant="filled"
                        label="Type"
                        {...register("type")}
                    />
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
                {/* <Input
                    required
                    label="Image"
                    type="file"
                    {...register("pic")}
                /> */}
                <Button type="submit">Submit</Button>
            </Stack>
        </form>
    );
}

export default AdjustAssetForm;
