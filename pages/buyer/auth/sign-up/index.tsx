import AdminGuard from '@components/shared/custom/user-guard';
import SignUpComponent from '@components/buyer/auth/sign-up';

export default function SignUpPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <SignUpComponent />
        </AdminGuard>
    );
}
