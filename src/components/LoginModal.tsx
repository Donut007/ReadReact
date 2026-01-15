import { Box, Button, Modal, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    borderRadius: 2,
    backgroundColor: "black",
};

export default function LoginModal({
    open,
    onClose
}: LoginModalProps) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <form onSubmit={handleSubmit(console.log)}>
                    <TextField
                        label="Email"
                        {...register("email", { required: "Email required" })}
                        error={!!errors.email}
                        helperText={errors.email?.message as string}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Box>

        </Modal>
    );
}
