import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

interface ConfirmProps {
    open: boolean;
    onClose: (isLogin?: boolean) => void;
}

function ConfirmDialog({
    open,
    onClose
}: ConfirmProps) {

    return (
        <Dialog
            open={open}
            onClose={() => onClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Confirm Logout"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure to logout?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>onClose(false)} sx={{color:'blue'}}>Cancel</Button>
                <Button onClick={()=>onClose(true)} sx={{color:'blue'}} autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog