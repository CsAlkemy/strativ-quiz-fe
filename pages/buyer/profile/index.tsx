import AdminGuard from '@components/shared/custom/user-guard';
import ProfileComponent from '@components/buyer/profile';

export default function ProductPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <ProfileComponent />
        </AdminGuard>
    );
}
