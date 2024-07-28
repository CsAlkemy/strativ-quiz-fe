import AdminGuard from '@components/shared/custom/user-guard';
import ShopComponent from '@components/buyer/shop';

export default function CategoriesPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <ShopComponent />
        </AdminGuard>
    );
}
