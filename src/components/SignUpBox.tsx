import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { signUp } from "../Services/auth.service";
import { useEffect } from "react";

interface SignUpBoxProps {
    open: boolean;
    onClose: () => void;
}

type FormData = {
    UserName: string
    Password: string
    ConfirmPassword: string
    Email: string
}
export default function SignUpBox({
    open,
    onClose
}: SignUpBoxProps) {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>();

    useEffect(() => {
        if (open) {
            reset();
        }
    }, [open]);

    const password = watch("Password");

    const submitSignUp = async (data: FormData) => {
        try {
            await signUp(data.UserName, data.Password, data.Email).then(() => {
                onClose();
                alert("Sign up successful! Please log in.");
            });
        } catch (err) {
            if (err instanceof Error) {
                alert(err.message)
            } else {
                alert('Unknown error')
            }
        }

    }

    return (
        <Box id="signUpBox" sx={{ display: open ? 'block' : 'none' }}>
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4">Sign Up</Typography>
            </Box>
            <hr></hr>
            <Box>
                <form id="SignUpForm" onSubmit={handleSubmit(submitSignUp)}>
                    <TextField
                        label="User Name"
                        {...register("UserName", { required: "User Name required" })}
                        error={!!errors.UserName}
                        helperText={errors.UserName?.message as string}
                        margin="normal"
                        fullWidth
                        sx={{
                            "& input::placeholder": {
                                color: "black",
                                opacity: 1,
                            },
                        }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        {...register("Password", { required: "Password required" })}
                        error={!!errors.Password}
                        helperText={errors.Password?.message as string}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Confirm Password"
                        type="password"
                        {...register("ConfirmPassword", {
                            required: "Confirm Password required",
                            validate: value =>
                                value === password || "Passwords do not match"
                        })}
                        error={!!errors.ConfirmPassword}
                        helperText={errors.ConfirmPassword?.message as string}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Email"
                        type="email"
                        {...register("Email", { required: "Email required" })}
                        error={!!errors.Password}
                        helperText={errors.Password?.message as string}
                        fullWidth
                        margin="normal"
                    />
                </form>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Button type="submit" variant="contained" form="SignUpForm" sx={{ textAlign: "center", color: "white", fontSize: "18px" }} fullWidth>
                    SIGN UP
                </Button>
            </Box>
        </Box>
    );
}
