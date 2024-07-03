import AdminGuard from '@components/shared/custom/user-guard';
import CommonLayout from '@components/shared/layout';
import CustomEmptyData from '@components/shared/custom/custom-empty-data';

export default function BuyerHomePage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <CustomEmptyData title="Buyer Panel" />
        </AdminGuard>
    );
}
