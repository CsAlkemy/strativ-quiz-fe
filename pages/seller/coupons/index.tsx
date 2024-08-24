import AdminGuard from '@components/shared/custom/user-guard';
import CommonLayout from '@components/shared/layout';
import SellerCouponsComponent from '@components/seller/coupons';

export default function CouponsPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <CommonLayout title={'Coupons'}>
                <SellerCouponsComponent />
            </CommonLayout>
        </AdminGuard>
    );
}
