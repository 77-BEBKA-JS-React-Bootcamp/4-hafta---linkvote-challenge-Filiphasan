import React from 'react'
import './Pagination.css'

const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
    return (
        <div className="container">
            <ul className="pagination" aria-label="Page Navigation">
                {
                    totalPage > 1 && (
                        <li className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`} onClick={() => setCurrentPage(currentPage - 1)}>&#10094;</li>
                    )
                }
                {
                    [...Array(totalPage).keys()].map(value => {
                        value++;
                        return (
                            <li className={`pagination-item ${currentPage === value ? "active" : ""}`} onClick={() => setCurrentPage(value)}>{value}</li>
                        )
                    })
                }
                {
                    totalPage > 1 && (
                        <li className={`pagination-item ${currentPage === totalPage ? "disabled" : ""}`} onClick={() => setCurrentPage(currentPage + 1)}>&#10095;</li>
                    )
                }

            </ul>
        </div>
    )
}

export default Pagination
