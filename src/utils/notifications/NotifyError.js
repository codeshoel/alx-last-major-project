import { toast } from 'react-toastify';

const NotifyError = (message) => {
    return (
        toast.error(
            `${message}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                toastId: ''
            }
        )
    );
}

export default NotifyError;