import AdminGuard from '@components/shared/custom/user-guard';
import CartComponent from '@components/buyer/cart';

export default function CartPage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <CartComponent />
        </AdminGuard>
    );
}
