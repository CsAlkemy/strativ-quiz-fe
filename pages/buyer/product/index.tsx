import AdminGuard from '@components/shared/custom/user-guard';
import ProductDetailsComponent from '@components/buyer/product';

export default function ProductPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <ProductDetailsComponent />
        </AdminGuard>
    );
}
