import AdminGuard from '@components/shared/custom/user-guard';
import CommonLayout from '@components/shared/layout';
import SellerProductsComponent from '@components/seller/products';

export default function ProductsPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <CommonLayout title={'Products'}>
                <SellerProductsComponent />
            </CommonLayout>
        </AdminGuard>
    );
}
