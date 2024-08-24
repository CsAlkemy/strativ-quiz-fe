import AdminGuard from '@components/shared/custom/user-guard';
import CommonLayout from '@components/shared/layout';
import SellerSalesComponent from '@components/seller/sales';

export default function SalesPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <CommonLayout title={'Sales'}>
                <SellerSalesComponent />
            </CommonLayout>
        </AdminGuard>
    );
}
