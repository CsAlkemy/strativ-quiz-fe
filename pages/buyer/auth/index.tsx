import AdminGuard from '@components/shared/custom/user-guard';
import LoginComponent from '@components/buyer/auth/login';

export default function SellerHomePage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <LoginComponent />
        </AdminGuard>
    );
}
