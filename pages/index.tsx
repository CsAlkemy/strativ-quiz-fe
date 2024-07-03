import AdminGuard from '@components/shared/custom/user-guard';
import HomePageComponent from '@components/buyer/home';

export default function HomePage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <HomePageComponent />
        </AdminGuard>
    );
}
