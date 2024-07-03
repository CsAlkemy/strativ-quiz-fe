import AdminGuard from '@components/shared/custom/user-guard';
import ForgotPasswordComponent from '@components/buyer/auth/forgot-password';

export default function ForgotPasswordPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <ForgotPasswordComponent />
        </AdminGuard>
    );
}
