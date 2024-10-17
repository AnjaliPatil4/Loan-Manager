import React from 'react';
import './LoanTable.css';

interface Loan {
  id: number;
  userDetails: string;
  customerName: string;
  date: string;
  status: 'FINISHED' | 'APPROVED';
  lastUpdated: string;
}

const loans: Loan[] = [
  {
    id: 1,
    userDetails: 'Contact Email not Linked',
    customerName: 'Tom Cruise',
    date: 'June 09, 2021',
    status: 'FINISHED',
    lastUpdated: 'Updated 1 day ago',
  },
  {
    id: 2,
    userDetails: 'Adding Images to Featured Posts',
    customerName: 'Matt Damon',
    date: 'June 09, 2021',
    status: 'FINISHED',
    lastUpdated: 'Updated 1 day ago',
  },
  {
    id: 3,
    userDetails: 'When will be charged this month?',
    customerName: 'Robert Downey',
    date: 'June 09, 2021',
    status: 'FINISHED',
    lastUpdated: 'Updated 1 day ago',
  },
  {
    id: 4,
    userDetails: 'Payment not going through',
    customerName: 'Christian Bale',
    date: 'June 09, 2021',
    status: 'FINISHED',
    lastUpdated: 'Updated 1 day ago',
  },
  {
    id: 5,
    userDetails: 'Unable to add replies',
    customerName: 'Henry Cavil',
    date: 'June 09, 2021',
    status: 'APPROVED',
    lastUpdated: 'Updated 1 day ago',
  },
  {
    id: 6,
    userDetails: 'Downtime since last week',
    customerName: 'Chris Evans',
    date: 'June 09, 2021',
    status: 'FINISHED',
    lastUpdated: 'Updated 1 day ago',
  },
  {
    id: 7,
    userDetails: 'Referral Bonus',
    customerName: 'Sam Smith',
    date: 'June 09, 2021',
    status: 'FINISHED',
    lastUpdated: 'Updated 1 day ago',
  },
];

const LoanTable: React.FC = () => {
  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Recent Loans</h2>
        <div className="table-actions">
          <p className="sort-button"> <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.12857 4.76839L3.31563 2.62548C3.48647 2.45815 3.7636 2.4582 3.93434 2.62548L6.12132 4.76839C6.39667 5.03812 6.20059 5.50001 5.81195 5.50001H4.5V14.0714C4.5 14.3081 4.30414 14.5 4.0625 14.5H3.1875C2.94586 14.5 2.75 14.3081 2.75 14.0714V5.50001H1.43794C1.04853 5.50001 0.853791 5.03758 1.12857 4.76839ZM7.5625 4.2143H14.5625C14.8041 4.2143 15 4.02243 15 3.78573V2.92858C15 2.69188 14.8041 2.50001 14.5625 2.50001H7.5625C7.32086 2.50001 7.125 2.69188 7.125 2.92858V3.78573C7.125 4.02243 7.32086 4.2143 7.5625 4.2143ZM7.125 7.21429V6.35715C7.125 6.12045 7.32086 5.92858 7.5625 5.92858H12.8125C13.0541 5.92858 13.25 6.12045 13.25 6.35715V7.21429C13.25 7.451 13.0541 7.64287 12.8125 7.64287H7.5625C7.32086 7.64287 7.125 7.451 7.125 7.21429ZM7.125 14.0714V13.2143C7.125 12.9776 7.32086 12.7857 7.5625 12.7857H9.3125C9.55414 12.7857 9.75 12.9776 9.75 13.2143V14.0714C9.75 14.3081 9.55414 14.5 9.3125 14.5H7.5625C7.32086 14.5 7.125 14.3081 7.125 14.0714ZM7.125 10.6429V9.78572C7.125 9.54901 7.32086 9.35715 7.5625 9.35715H11.0625C11.3041 9.35715 11.5 9.54901 11.5 9.78572V10.6429C11.5 10.8796 11.3041 11.0714 11.0625 11.0714H7.5625C7.32086 11.0714 7.125 10.8796 7.125 10.6429Z" fill="#C5C7CD"/>
</svg>
&nbsp;Sort</p>
          <p className="filter-button">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4369 2.5H2.56315C2.06351 2.5 1.8114 3.10623 2.16542 3.46026L6.5 7.79549V12.625C6.5 12.8085 6.58955 12.9805 6.73993 13.0858L8.61493 14.3979C8.98484 14.6568 9.5 14.3944 9.5 13.937V7.79549L13.8347 3.46026C14.188 3.10694 13.9376 2.5 13.4369 2.5Z" fill="#C5C7CD"/>
</svg>
&nbsp; Filter</p>
        </div>
      </div>
      <table className="loan-table">
        <thead>
          <tr>
            <th>User details</th>
            <th>Customer name</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>
                <div className="user-details">
                   <div >
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_29_744)">
<path d="M16.0001 3.16669C8.64008 3.16669 2.66675 9.14002 2.66675 16.5C2.66675 23.86 8.64008 29.8334 16.0001 29.8334C23.3601 29.8334 29.3334 23.86 29.3334 16.5C29.3334 9.14002 23.3601 3.16669 16.0001 3.16669ZM16.0001 7.16669C18.2134 7.16669 20.0001 8.95335 20.0001 11.1667C20.0001 13.38 18.2134 15.1667 16.0001 15.1667C13.7867 15.1667 12.0001 13.38 12.0001 11.1667C12.0001 8.95335 13.7867 7.16669 16.0001 7.16669ZM16.0001 26.1C12.6667 26.1 9.72008 24.3934 8.00008 21.8067C8.04008 19.1534 13.3334 17.7 16.0001 17.7C18.6534 17.7 23.9601 19.1534 24.0001 21.8067C22.2801 24.3934 19.3334 26.1 16.0001 26.1Z" fill="#0A512F"/>
</g>
<defs>
<clipPath id="clip0_29_744">
<rect width="32" height="32" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
                  {loan.userDetails}
               
                 </div>
                  <span className="last-updated">{loan.lastUpdated}</span>
                </div>
              </td>
              <td>{loan.customerName}</td>
              <td>{loan.date}</td>
              <td>
                <span className={`status ${loan.status.toLowerCase()}`}>
                  {loan.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>Rows per page: 7</span>
        <span>1-7 of 1240</span>
        <button className="pagination-button">{"<"}</button>
        <button className="pagination-button">{">"}</button>
      </div>
    </div>
  );
};

export default LoanTable;
