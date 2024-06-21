import AdminGuard from '@components/shared/custom/user-guard';
import CommonLayout from '@components/shared/layout';
import CustomEmptyData from '@components/shared/custom/custom-empty-data';

export default function SalesPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <CommonLayout title={'Sales'}>
                <CustomEmptyData title="Development in progress" />
            </CommonLayout>
        </AdminGuard>
    );
}
