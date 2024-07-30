import AdminGuard from '@components/shared/custom/user-guard';
import CategoriesComponent from '@components/buyer/categories';

export default function CategoriesPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <CategoriesComponent />
        </AdminGuard>
    );
}
