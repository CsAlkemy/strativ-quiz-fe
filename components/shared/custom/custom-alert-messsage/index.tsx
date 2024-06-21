import customToast from '@components/shared/custom/custom-toast';

type Props = {
    title?: string;
    description?: string;
    type?: 'foreground' | 'background' | undefined;
};

const CustomAlertMessage = ({ title, description, type }: Props) => {
    customToast({ title: 'Two', description: 'Hello' });
};

export default CustomAlertMessage;
