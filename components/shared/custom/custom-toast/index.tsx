import { toast } from 'sonner';
import 'tailwindcss/tailwind.css';

interface ToastOptions {
    title: string;
    description: string;
    variant?: 'default' | 'destructive' | 'success' | 'warning';
}

const customToast = ({ title, description, variant = 'default' }: ToastOptions) => {
    const formattedMessage = `${title}: ${description}`;

    const variantClasses = {
        default: 'bg-gray-800 text-white',
        destructive: 'bg-red-500 text-white',
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-500 text-black',
    };

    const toastClass = variantClasses[variant] || variantClasses.default;

    toast.custom(t => (
        <div className={`p-4 rounded-md shadow-md w-full sm:min-w-[350px] ${toastClass}`}>
            <strong>{title}</strong>
            <p>{description}</p>
        </div>
    ));
};

export default customToast;
