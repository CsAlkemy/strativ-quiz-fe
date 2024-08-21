import AdminGuard from '@components/shared/custom/user-guard';
import CommonLayout from '@components/shared/layout';
import SellerOrdersComponent from '@components/seller/orders';

export default function OrdersPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <CommonLayout title={'Orders'}>
                <SellerOrdersComponent />
            </CommonLayout>
        </AdminGuard>
    );
}
