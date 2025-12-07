"use client";
import { Button } from "./Button";

const MAX_PAGES = 3;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const half = Math.floor(MAX_PAGES / 2);

  let start = Math.max(1, currentPage - half);
  const end = Math.min(totalPages, start + MAX_PAGES - 1);

  if (end === totalPages) {
    start = Math.max(1, totalPages - MAX_PAGES + 1);
  }

  const pageNumbers: number[] = [];
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      {start > 1 && (
        <>
          <Button onClick={() => onPageChange(1)}>1</Button>
          {start > 2 && <span className="px-2 text-gray-500">...</span>}
        </>
      )}

      {pageNumbers.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          variant={page === currentPage ? "selected" : "default"}
        >
          {page}
        </Button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="px-2 text-gray-500">...</span>
          )}
          <Button onClick={() => onPageChange(totalPages)}>{totalPages}</Button>
        </>
      )}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};
