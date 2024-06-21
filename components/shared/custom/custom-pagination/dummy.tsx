import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

interface PaginationProps {
    pagination: {
        page: number;
        totalCount: number;
        limit: number;
        totalPage: number;
        total: number;
    };
    siblingCount?: number;
}

const CustomPagination: React.FC<PaginationProps> = ({ pagination, siblingCount = 1 }) => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState<number>(pagination.page);

    useEffect(() => {
        const pageFromUrl = parseInt(router.query.page as string, 10) || pagination.page;
        setCurrentPage(pageFromUrl);
    }, [router.query.page, pagination.page]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        router.push(`?page=${newPage}`, undefined, { shallow: true });
    };

    const renderPageNumbers = () => {
        let pages: (number | string)[] = [];
        const { totalPage } = pagination;
        const totalNumbers = siblingCount + 5;
        const totalBlocks = totalNumbers + 2;

        if (totalPage > totalBlocks) {
            const startPage = Math.max(2, currentPage - siblingCount);
            const endPage = Math.min(totalPage - 1, currentPage + siblingCount);

            pages = [1];
            if (startPage > 2) {
                pages.push('...');
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPage - 1) {
                pages.push('...');
            }

            pages.push(totalPage);
        } else {
            for (let i = 1; i <= totalPage; i++) {
                pages.push(i);
            }
        }

        return pages.map((page, index) =>
            page === '...' ? (
                <span key={index} className="px-3 py-2 mx-1">
                    ...
                </span>
            ) : (
                <button
                    key={index}
                    onClick={() => typeof page === 'number' && handlePageChange(page)}
                    className={`px-3 py-2 mx-1 rounded-md text-sm border ${currentPage === page ? 'bg-primary text-white' : 'bg-white'}`}>
                    {page}
                </button>
            ),
        );
    };

    return (
        <nav className="flex justify-center my-4">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 mx-1 rounded-md bg-white text-sm border">
                Prev
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pagination.totalPage}
                className="px-3 py-2 mx-1 rounded-md bg-white text-sm border">
                Next
            </button>
        </nav>
    );
};

export default CustomPagination;
