import AdminGuard from '@components/shared/custom/user-guard';
import CommonLayout from '@components/shared/layout';
import SellerManageProductsComponent from '@components/seller/products/manage';

export default function ProductsPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <CommonLayout isBack={true} title="Add New Products">
                <SellerManageProductsComponent />
            </CommonLayout>
        </AdminGuard>
    );
}
