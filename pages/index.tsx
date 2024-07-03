import AdminGuard from '@components/shared/custom/user-guard';
import { CustomButton } from '@components/shared/custom/custom-button';
import Link from 'next/link';

export default function HomePage(): JSX.Element {
    return (
        <AdminGuard authRequire={false}>
            <div className="h-screen flex justify-center items-center gap-5">
                <Link href="/seller/auth">
                    <CustomButton>Seller</CustomButton>
                </Link>
                <Link href="/buyer/auth">
                    <CustomButton>Buyer</CustomButton>
                </Link>
            </div>
        </AdminGuard>
    );
}
