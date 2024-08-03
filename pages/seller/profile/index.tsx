import AdminGuard from '@components/shared/custom/user-guard';
import CommonLayout from '@components/shared/layout';
import SellerProfileComponent from '@components/seller/profile';

export default function ProfilePage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <CommonLayout title={'Manage My Account'}>
                <SellerProfileComponent />
            </CommonLayout>
        </AdminGuard>
    );
}
