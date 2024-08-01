import AdminGuard from '@components/shared/custom/user-guard';
import OrderDetailsComponent from '@components/buyer/orders/order-details';

export default function OrderDetailsPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <OrderDetailsComponent />
        </AdminGuard>
    );
}
