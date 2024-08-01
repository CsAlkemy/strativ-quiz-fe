import AdminGuard from '@components/shared/custom/user-guard';
import OrdersComponent from '@components/buyer/orders';

export default function OrdersPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <OrdersComponent />
        </AdminGuard>
    );
}
