import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { signIn } from "../Services/auth.service";
import { useEffect, useState } from "react";
import SignUpBox from "./SignUpBox";

interface LoginModalProps {
    open: boolean;
    onClose: (isLogin?: boolean) => void;
}

const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -20%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    borderRadius: 2,
    backgroundColor: "#ffffff",
};
type FormData = {
    UserName: string
    Password: string
}
export default function LoginModal({
    open,
    onClose
}: LoginModalProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [openSignUp, setSignUp] = useState(false);
    const [openLogin, setLogin] = useState(true);

    useEffect(() => {
        const ResetModal = async () => {
            if (open) {
                setLogin(true);
                setSignUp(false);
                reset();
            }
        }
        ResetModal()
    }, [open]);

    const submitLogin = (data: FormData) => {
        signIn(data.UserName, data.Password).then(() => {
            onClose(true);
        }).catch((error) => {
            alert("Login failed: " + error.message);
        });
    }

    return (
        <>
            <Modal open={open} onClose={() => onClose()}>
                <Box sx={style}>
                    <Box id="loginBox" sx={{ display: openLogin ? 'block' : 'none' }}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="h4">Login</Typography>
                        </Box>
                        <hr></hr>
                        <Box>
                            <form id="LoginForm" onSubmit={handleSubmit(submitLogin)}>
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
                            </form>
                        </Box>
                        <Box>
                            <Button variant="text" onClick={() => {
                                setLogin(false);
                                setSignUp(true);
                                // setTimeout(() => {

                                // }, 1000);
                            }}
                            >sign up</Button>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Button type="submit" variant="contained" form="LoginForm" sx={{ textAlign: "center", color: "white", fontSize: "18px" }} fullWidth>
                                LOG IN
                            </Button>
                        </Box>
                    </Box>
                    <SignUpBox open={openSignUp} onClose={() => onClose()}></SignUpBox>
                </Box>
            </Modal>
        </>
    );
}
