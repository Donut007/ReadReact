import { Modal, Box, TextField } from "@mui/material";
import { signIn } from "../Services/auth.service";
import { useState } from "react";
import { Auth } from "../Lib/supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../supabaseClient";

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
};

export default function LoginModal({
    open,
    onClose
}: LoginModalProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    setErrors({}); // Clear previous errors
    return (
        <Modal open={open} onClose={onClose}>
            {/* <Box sx={style}>

                <TextField
                    label="Username or Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                    fullWidth
                />

                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!errors.password}
                    helperText={errors.password}
                    fullWidth
                />

            </Box> */}
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={[]}
            />
        </Modal>
    );
}
