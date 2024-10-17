import React from 'react';
import './Header.css';
import { useState } from 'react';
const Header: React.FC = () => {
  const [role, setRole] = useState('User'); // Default to 'User'

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };
  return (
    <header className="header">
      <div className="branding">CREDIT APP</div>
      <nav className="navigation">
        <a href="#home" className="nav-item">
          <svg width="37" height="29" viewBox="0 0 37 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.5 0C8.2826 0 0 8.34656 0 18.6429C0 22.0607 0.915365 25.2624 2.50906 28.0161C2.86943 28.6388 3.55611 29 4.2717 29H32.7283C33.4439 29 34.1306 28.6388 34.4909 28.0161C36.0846 25.2624 37 22.0607 37 18.6429C37 8.34656 28.7174 0 18.5 0ZM18.5 4.14286C19.4449 4.14286 20.2074 4.79859 20.4476 5.67377C20.3763 5.82007 20.2781 5.94759 20.226 6.10554L19.6338 7.89667C19.3042 8.12259 18.9291 8.28571 18.5006 8.28571C17.3656 8.28571 16.4451 7.3581 16.4451 6.21429C16.4451 5.07047 17.3649 4.14286 18.5 4.14286ZM6.16667 22.7857C5.03161 22.7857 4.11111 21.8581 4.11111 20.7143C4.11111 19.5705 5.03161 18.6429 6.16667 18.6429C7.30172 18.6429 8.22222 19.5705 8.22222 20.7143C8.22222 21.8581 7.30172 22.7857 6.16667 22.7857ZM9.25 12.4286C8.11495 12.4286 7.19444 11.501 7.19444 10.3571C7.19444 9.21333 8.11495 8.28571 9.25 8.28571C10.3851 8.28571 11.3056 9.21333 11.3056 10.3571C11.3056 11.501 10.3851 12.4286 9.25 12.4286ZM25.1015 7.74132L21.1619 19.652C22.0413 20.412 22.6111 21.526 22.6111 22.7857C22.6111 23.5444 22.394 24.2454 22.0407 24.8571H14.9593C14.606 24.2454 14.3889 23.5444 14.3889 22.7857C14.3889 20.5887 16.0911 18.8092 18.2366 18.6694L22.1769 6.75804C22.4447 5.945 23.3158 5.499 24.1271 5.77605C24.9345 6.04728 25.3701 6.92763 25.1015 7.74132ZM26.0432 11.444L27.0402 8.43071C27.2631 8.34721 27.4982 8.28636 27.75 8.28636C28.8851 8.28636 29.8056 9.21397 29.8056 10.3578C29.8056 11.5016 28.8851 12.4292 27.75 12.4292C27.019 12.4286 26.4081 12.0227 26.0432 11.444ZM30.8333 22.7857C29.6983 22.7857 28.7778 21.8581 28.7778 20.7143C28.7778 19.5705 29.6983 18.6429 30.8333 18.6429C31.9684 18.6429 32.8889 19.5705 32.8889 20.7143C32.8889 21.8581 31.9684 22.7857 30.8333 22.7857Z" fill="#064921"/> </svg>
        &nbsp;Home
        </a>
        <a href="#payments" className="nav-item">
         
          <svg width="50" height="43" viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_34_6)">
<path d="M15.2238 32.25V12.6348C15.2236 12.218 15.3813 11.8128 15.6719 11.4831C15.9626 11.1534 16.3699 10.9177 16.8297 10.8132C17.2896 10.7086 17.776 10.741 18.2126 10.9053C18.6491 11.0697 19.0112 11.3566 19.2418 11.7211L31.6224 31.2789C31.853 31.6434 32.215 31.9303 32.6516 32.0947C33.0882 32.259 33.5746 32.2914 34.0344 32.1868C34.4943 32.0823 34.9016 31.8466 35.1922 31.5169C35.4829 31.1872 35.6406 30.782 35.6404 30.3652V10.75" stroke="#0A512F" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1404 17.9167H39.7238" stroke="#0A512F" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1404 25.0833H39.7238" stroke="#0A512F" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_34_6" x="-3.06787" y="0" width="57" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_6"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_6" result="shape"/>
</filter>
</defs>
</svg>
        &nbsp;Payments
        </a>
        <a href="#budget" className="nav-item">
          
          <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 20.3906V1.35938C23 0.606055 22.4507 0 21.7679 0H4.92857C2.20759 0 0 2.43555 0 5.4375V23.5625C0 26.5645 2.20759 29 4.92857 29H21.7679C22.4507 29 23 28.3939 23 27.6406V26.7344C23 26.3096 22.8203 25.9244 22.5431 25.6752C22.3275 24.8029 22.3275 22.3164 22.5431 21.4441C22.8203 21.2006 23 20.8154 23 20.3906ZM6.57143 7.58984C6.57143 7.40293 6.71004 7.25 6.87946 7.25H17.7634C17.9328 7.25 18.0714 7.40293 18.0714 7.58984V8.72266C18.0714 8.90957 17.9328 9.0625 17.7634 9.0625H6.87946C6.71004 9.0625 6.57143 8.90957 6.57143 8.72266V7.58984ZM6.57143 11.2148C6.57143 11.0279 6.71004 10.875 6.87946 10.875H17.7634C17.9328 10.875 18.0714 11.0279 18.0714 11.2148V12.3477C18.0714 12.5346 17.9328 12.6875 17.7634 12.6875H6.87946C6.71004 12.6875 6.57143 12.5346 6.57143 12.3477V11.2148ZM19.5808 25.375H4.92857C4.01987 25.375 3.28571 24.565 3.28571 23.5625C3.28571 22.5656 4.025 21.75 4.92857 21.75H19.5808C19.4833 22.7186 19.4833 24.4064 19.5808 25.375Z" fill="#0A512F" fill-opacity="0.7"/>
</svg>

           &nbsp;Budget
        </a>
        <a href="#card" className="nav-item">
         
          <svg width="37" height="29" viewBox="0 0 37 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 25.8929C0 27.6083 1.38108 29 3.08333 29H33.9167C35.6189 29 37 27.6083 37 25.8929V14.5H0V25.8929ZM12.3333 21.4911C12.3333 21.0638 12.6802 20.7143 13.1042 20.7143H21.8403C22.2642 20.7143 22.6111 21.0638 22.6111 21.4911V24.0804C22.6111 24.5076 22.2642 24.8571 21.8403 24.8571H13.1042C12.6802 24.8571 12.3333 24.5076 12.3333 24.0804V21.4911ZM4.11111 21.4911C4.11111 21.0638 4.45799 20.7143 4.88194 20.7143H9.50694C9.9309 20.7143 10.2778 21.0638 10.2778 21.4911V24.0804C10.2778 24.5076 9.9309 24.8571 9.50694 24.8571H4.88194C4.45799 24.8571 4.11111 24.5076 4.11111 24.0804V21.4911ZM37 3.10714V6.21429H0V3.10714C0 1.39174 1.38108 0 3.08333 0H33.9167C35.6189 0 37 1.39174 37 3.10714Z" fill="#0A512F" fill-opacity="0.7"/>
</svg>

          &nbsp; Card
        </a>
        <div className="nav-icons">
          <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 29C14.523 29 15.5041 28.6181 16.2274 27.9383C16.9508 27.2585 17.3571 26.3366 17.3571 25.3752H9.64286C9.64286 26.3366 10.0492 27.2585 10.7726 27.9383C11.4959 28.6181 12.477 29 13.5 29ZM15.4189 1.99341C15.4458 1.74141 15.4163 1.4869 15.3321 1.24629C15.2479 1.00569 15.111 0.784343 14.9302 0.596521C14.7494 0.408699 14.5287 0.258574 14.2824 0.155829C14.036 0.0530843 13.7695 0 13.5 0C13.2305 0 12.964 0.0530843 12.7176 0.155829C12.4713 0.258574 12.2506 0.408699 12.0698 0.596521C11.889 0.784343 11.7521 1.00569 11.6679 1.24629C11.5837 1.4869 11.5542 1.74141 11.5811 1.99341C9.40124 2.41009 7.44163 3.52192 6.03405 5.14065C4.62647 6.75938 3.85742 8.78552 3.85714 10.876C3.85714 12.866 2.89286 21.7504 0 23.5628H27C24.1071 21.7504 23.1429 12.866 23.1429 10.876C23.1429 6.48998 19.8257 2.82893 15.4189 1.99341Z" fill="#0A512F" fill-opacity="0.7"/>
</svg>
<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 13.5956C30 21.1043 23.2838 27.1912 15 27.1912C13.5143 27.1933 12.0349 26.9935 10.5994 26.5969C9.50437 27.1718 6.99 28.275 2.76 28.9936C2.385 29.0558 2.1 28.6518 2.24813 28.2905C2.91188 26.6668 3.51188 24.5032 3.69187 22.5299C1.395 20.1409 0 17.0139 0 13.5956C0 6.08695 6.71625 0 15 0C23.2838 0 30 6.08695 30 13.5956ZM9.375 13.5956C9.375 13.0805 9.17746 12.5865 8.82582 12.2223C8.47419 11.858 7.99728 11.6534 7.5 11.6534C7.00272 11.6534 6.5258 11.858 6.17417 12.2223C5.82254 12.5865 5.625 13.0805 5.625 13.5956C5.625 14.1107 5.82254 14.6047 6.17417 14.969C6.5258 15.3332 7.00272 15.5378 7.5 15.5378C7.99728 15.5378 8.47419 15.3332 8.82582 14.969C9.17746 14.6047 9.375 14.1107 9.375 13.5956ZM16.875 13.5956C16.875 13.0805 16.6775 12.5865 16.3258 12.2223C15.9742 11.858 15.4973 11.6534 15 11.6534C14.5027 11.6534 14.0258 11.858 13.6742 12.2223C13.3225 12.5865 13.125 13.0805 13.125 13.5956C13.125 14.1107 13.3225 14.6047 13.6742 14.969C14.0258 15.3332 14.5027 15.5378 15 15.5378C15.4973 15.5378 15.9742 15.3332 16.3258 14.969C16.6775 14.6047 16.875 14.1107 16.875 13.5956ZM22.5 15.5378C22.9973 15.5378 23.4742 15.3332 23.8258 14.969C24.1775 14.6047 24.375 14.1107 24.375 13.5956C24.375 13.0805 24.1775 12.5865 23.8258 12.2223C23.4742 11.858 22.9973 11.6534 22.5 11.6534C22.0027 11.6534 21.5258 11.858 21.1742 12.2223C20.8225 12.5865 20.625 13.0805 20.625 13.5956C20.625 14.1107 20.8225 14.6047 21.1742 14.969C21.5258 15.3332 22.0027 15.5378 22.5 15.5378Z" fill="#0A512F" fill-opacity="0.7"/>
</svg>
<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_30_4)">
<path d="M16 3.16669C8.63996 3.16669 2.66663 9.14002 2.66663 16.5C2.66663 23.86 8.63996 29.8334 16 29.8334C23.36 29.8334 29.3333 23.86 29.3333 16.5C29.3333 9.14002 23.36 3.16669 16 3.16669ZM16 7.16669C18.2133 7.16669 20 8.95335 20 11.1667C20 13.38 18.2133 15.1667 16 15.1667C13.7866 15.1667 12 13.38 12 11.1667C12 8.95335 13.7866 7.16669 16 7.16669ZM16 26.1C12.6666 26.1 9.71996 24.3934 7.99996 21.8067C8.03996 19.1534 13.3333 17.7 16 17.7C18.6533 17.7 23.96 19.1534 24 21.8067C22.28 24.3934 19.3333 26.1 16 26.1Z" fill="#0A512F" fill-opacity="0.7"/>
</g>
<defs>
<clipPath id="clip0_30_4">
<rect width="32" height="32" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>

        </div>
          <select className="select-role" value={role} onChange={handleRoleChange}>
          <option value="Verifier">Verifier</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>


      </nav>
    </header>
  );
};

export default Header;