import AdminGuard from '@components/shared/custom/user-guard';
import CustomEmptyData from '@components/shared/custom/custom-empty-data';

export default function SellerHomePage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <CustomEmptyData title="Development in progress" />
        </AdminGuard>
    );
}
