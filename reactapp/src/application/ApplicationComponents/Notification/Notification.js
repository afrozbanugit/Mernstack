import { toast } from "react-toastify";  
import "../../ReactToastify.css";

// Initialize toast
export const initToast = () => {
  toast.configure();
};

// Success Notification
export const showSuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000, // Closes after 3 seconds
  });
};

// Error Notification
export const showError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

// Warning Notification
export const showWarning = (message) => {
  toast.warn(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

// Info Notification
export const showInfo = (message) => {
  toast.info(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};
