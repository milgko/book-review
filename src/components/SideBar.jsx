import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import litcrit from '../assets/litcrit.jpg' 

function SideBar(){

    return(
        <>
<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
         <img src={litcrit} class="h-8 me-5 md:h-7" alt="Logo" />
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg width="23px" height="23px" viewBox="-1 0 22 22" id="meteor-icon-kit__regular-books" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3V2C6 0.89543 6.89543 0 8 0H12C13.1046 0 14 0.89543 14 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H14C13.6357 22 13.2942 21.9026 13 21.7324C12.7058 21.9026 12.3643 22 12 22H8C7.63571 22 7.29417 21.9026 7 21.7324C6.70583 21.9026 6.36429 22 6 22H2C0.89543 22 0 21.1046 0 20V5C0 3.89543 0.89543 3 2 3H6zM6 5H2V20H6V5zM14 20H18V4H14V20zM8 2V20H12V2H8zM3 14C3 13.4477 3.44772 13 4 13C4.55228 13 5 13.4477 5 14V18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18V14zM9 12C9 11.4477 9.4477 11 10 11C10.5523 11 11 11.4477 11 12V18C11 18.5523 10.5523 19 10 19C9.4477 19 9 18.5523 9 18V12zM15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16V18C17 18.5523 16.5523 19 16 19C15.4477 19 15 18.5523 15 18V16z" fill="#000"></path></g>
            </svg>
               <span class="ms-3">Fiction</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                <path d="M15.5455 9.92543C15.9195 9.26103 16.2313 8.66151 16.4236 8.20521C17.3573 5.98947 16.434 3.44077 14.1769 2.40112C11.9199 1.36148 9.65341 2.4395 8.65871 4.52093C6.75657 3.2157 4.21918 3.40739 2.81989 5.44424C1.42059 7.48108 1.85975 10.142 3.77629 11.594C4.6461 12.253 6.36636 13.2242 7.98596 14.0884M16.2972 11.7499C15.8751 9.482 13.9454 7.82334 11.5156 8.27415C9.08592 8.72497 7.51488 10.9171 7.84335 13.299C8.10725 15.2127 9.56392 19.7027 10.1264 21.394C10.2032 21.6248 10.2415 21.7402 10.3175 21.8206C10.3837 21.8907 10.4717 21.9416 10.5655 21.9638C10.6732 21.9894 10.7923 21.9649 11.0306 21.916C12.7765 21.5575 17.3933 20.574 19.1826 19.8457C21.4096 18.9392 22.5589 16.4841 21.6981 14.153C20.8372 11.8219 18.4723 10.9815 16.2972 11.7499Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
            </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Romance</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" width="27px" height="27px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="11.7" y="6.6" transform="matrix(0.7071 0.7071 -0.7071 0.7071 17.0399 -4.1169)" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="3.6" height="23.9"></rect> <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="18.9,16.1 20.9,18.1 23,16.1 25.9,16.1 25.9,13.1 28,11.1 25.9,9 25.9,6.1 23,6.1 20.9,4 18.9,6.1 15.9,6.1 15.9,9 13.9,11.1 15.9,13.1 "></polyline> <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="23" y1="26" x2="29" y2="26"></line> <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="26" y1="23" x2="26" y2="29"></line> <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="18" y1="23" x2="22" y2="23"></line> <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="20" y1="21" x2="20" y2="25"></line> </g>
            </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Fantasy</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                <path d="M9.41763 18.5409C10.1913 17.3978 11.2839 16 12 16C12.7161 16 13.8087 17.3978 14.5824 18.5409C15.0129 19.1769 14.5438 20 13.7757 20H10.2243C9.45619 20 8.9871 19.1769 9.41763 18.5409Z" fill="#0F0F0F"></path> <path d="M12 9C12.3511 9 12.9855 8.23437 13.5273 7.47668C13.9798 6.84397 13.5091 6 12.7313 6L11.2687 6C10.4909 6 10.0202 6.84397 10.4727 7.47668C11.0145 8.23437 11.6489 9 12 9Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2C20 2.55228 19.5523 3 19 3H17.9726C17.8373 5.41131 17.21 7.23887 16.2903 8.7409C15.4882 10.0511 14.4804 11.0808 13.4874 12C14.4804 12.9192 15.4882 13.9489 16.2903 15.2591C17.21 16.7611 17.8373 18.5887 17.9726 21H19C19.5523 21 20 21.4477 20 22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22C4 21.4477 4.44772 21 5 21H6.02739C6.16267 18.5887 6.79004 16.7611 7.70965 15.2591C8.51183 13.9489 9.51962 12.9192 10.5126 12C9.51962 11.0808 8.51183 10.0511 7.70965 8.7409C6.79004 7.23887 6.16267 5.41131 6.02739 3H5C4.44772 3 4 2.55228 4 2ZM15.9691 21C15.8384 18.9511 15.3049 17.4797 14.5846 16.3034C13.8874 15.1645 12.9954 14.2641 12 13.3497C11.0046 14.2641 10.1126 15.1645 9.41535 16.3034C8.69515 17.4797 8.1616 18.9511 8.03092 21H15.9691ZM8.03092 3H15.9691C15.8384 5.04891 15.3049 6.52026 14.5846 7.6966C13.8874 8.83549 12.9954 9.73587 12 10.6503C11.0046 9.73587 10.1126 8.83549 9.41535 7.6966C8.69515 6.52026 8.1616 5.04891 8.03092 3Z" fill="#0F0F0F"></path> </g>
            </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Historical</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 492.526 492.527" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> 
                <path d="M262.651,207.18c-5.666-57.56-27.296-106.848-28.213-108.918c-2.008-4.526-6.146-7.753-11.026-8.593 c-4.883-0.842-9.86,0.812-13.266,4.407c-30.694,32.38-58.73,51.188-88.231,59.19c-29.492,8.002-62.094,5.71-102.599-7.216 c-4.786-1.527-10.019-0.524-13.9,2.661c-3.883,3.186-5.886,8.12-5.323,13.112c0.254,2.25,6.494,55.713,30.688,108.245 c33.608,72.974,85.313,108.119,149.523,101.64c0.808-0.08,1.607-0.229,2.389-0.439c0.782-0.212,1.548-0.488,2.287-0.827 C243.664,343.588,270.522,287.133,262.651,207.18z M43.808,219.902c-0.885-12.05,14.402-22.995,34.143-24.445 c19.741-1.452,36.464,7.139,37.35,19.189c0.886,12.05-14.896,16.245-34.637,17.694C60.92,233.793,44.695,231.952,43.808,219.902z M169.943,324.258c-36.473,9.893-70.586,1.15-76.193-19.525c-0.399-1.476-0.627-2.974-0.723-4.482 c17.808,7.547,43.745,8.568,70.742,1.246s48.863-21.311,60.417-36.82c0.681,1.352,1.243,2.758,1.642,4.234 C231.435,289.584,206.415,314.366,169.943,324.258z M200.541,199.827c-17.769,8.722-33.507,13.076-38.831,2.231 c-5.325-10.847,4.766-26.71,22.534-35.433c17.771-8.723,36.489-7.002,41.814,3.844 C231.384,181.317,218.311,191.104,200.541,199.827z"></path> <path d="M489.815,222.972c-2.854-4.049-7.546-6.398-12.495-6.268c-44.6,1.181-77.722-5.352-104.236-20.561 c-26.508-15.203-47.935-39.882-67.427-77.667c-2.303-4.465-6.71-7.457-11.709-7.951c-4.996-0.493-9.905,1.578-13.036,5.504 c-0.659,0.827-8.302,10.482-18.302,26.064c3.701,13.061,7.312,28.063,10.012,44.124c8.688-6.852,25.646-3.345,39.543,8.655 c14.982,12.935,20.728,30.837,12.831,39.981c-7.897,9.144-22.021,0.948-37.004-11.989c-4.624-3.992-8.786-7.97-12.104-11.828 c3.093,33,0.698,62.74-7.122,88.769c12.188,1.54,25.727,6.079,38.878,13.62c32.779,18.804,50.711,49.11,40.052,67.692 c-0.76,1.328-1.658,2.545-2.658,3.681c-7.252-17.929-24.865-36.995-49.129-50.915c-11.521-6.606-23.278-11.312-34.507-14.156 c-0.546,1.225-1.101,2.443-1.674,3.648c-7.01,14.732-16.006,27.804-26.913,39.16c7.215,10.693,16.23,20.492,27.042,29.326 c0.63,0.516,1.301,0.975,2.002,1.379c0.704,0.403,1.44,0.749,2.202,1.033c60.479,22.522,119.396,1.611,170.381-60.479 c36.704-44.697,56.274-94.84,57.093-96.951C493.315,232.226,492.672,227.019,489.815,222.972z M434.538,281.964 c-3.908,11.433-20.07,9.106-38.804,2.704c-18.729-6.399-32.936-14.453-29.028-25.887s22.261-15.512,40.989-9.11 C426.429,256.073,438.444,270.532,434.538,281.964z"></path> </g> </g> </g>
            </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Tragedy</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg fill="#000000" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> 
                <path d="M391.802,57.089C367.815,19.207,322.123,0,256,0S144.186,19.207,120.198,57.089 c-43.859,69.261,4.45,173.256,6.527,177.649l72.3,145.017h6.37v27.754h-16.196V512h131.167V407.509h-13.615v-27.754h6.224 l72.159-144.726l0.142-0.292C387.352,230.344,435.66,126.35,391.802,57.089z M218.564,94.387 c6.868-40.68,23.428-58.591,28.036-62.889c3.074-0.097,6.204-0.151,9.401-0.151c3.007,0,5.952,0.051,8.851,0.137 c4.167,3.867,19.984,20.713,27.278,58.821c7.801,40.765,6.892,112.174-36.415,227.231 C213.497,205.338,211.725,134.89,218.564,94.387z M275.403,379.756v27.754h-38.661v-27.754H275.403z M155.009,221.218 c-1.741-3.762-42.495-93.4-8.327-147.359c11.506-18.171,30.875-30.562,57.807-37.087c-6.174,11.833-12.112,27.434-15.98,47.641 c-6.127,32.014-5.814,69.533,0.93,111.518c7.323,45.583,22.332,96.792,44.648,152.478h-15.663L155.009,221.218z M289.019,480.653 h-68.472v-41.797h68.472V480.653z M356.988,221.226l-63.411,127.183h-16.238c22.316-55.686,37.326-106.895,44.647-152.478 c6.744-41.985,7.057-79.504,0.93-111.518c-3.885-20.299-9.859-35.95-16.063-47.803c27.248,6.474,46.823,18.901,58.428,37.188 C399.416,127.589,358.673,217.571,356.988,221.226z"></path> </g> </g> </g>
            </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Adventure</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                    <path d="M3 21H2C2 21.5523 2.44772 22 3 22V21ZM21 21V22C21.5523 22 22 21.5523 22 21H21ZM6 6C5.44772 6 5 6.44772 5 7C5 7.55228 5.44772 8 6 8V6ZM7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6V8ZM11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8V6ZM12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6V8ZM6 9C5.44772 9 5 9.44772 5 10C5 10.5523 5.44772 11 6 11V9ZM7 11C7.55228 11 8 10.5523 8 10C8 9.44772 7.55228 9 7 9V11ZM11 9C10.4477 9 10 9.44772 10 10C10 10.5523 10.4477 11 11 11V9ZM12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9V11ZM6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14V12ZM7 14C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12V14ZM11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14V12ZM12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12V14ZM11 21V22H12V21H11ZM7 21H6V22H7V21ZM18 10C17.4477 10 17 10.4477 17 11C17 11.5523 17.4477 12 18 12V10ZM18.01 12C18.5623 12 19.01 11.5523 19.01 11C19.01 10.4477 18.5623 10 18.01 10V12ZM18 13C17.4477 13 17 13.4477 17 14C17 14.5523 17.4477 15 18 15V13ZM18.01 15C18.5623 15 19.01 14.5523 19.01 14C19.01 13.4477 18.5623 13 18.01 13V15ZM18 16C17.4477 16 17 16.4477 17 17C17 17.5523 17.4477 18 18 18V16ZM18.01 18C18.5623 18 19.01 17.5523 19.01 17C19.01 16.4477 18.5623 16 18.01 16V18ZM20.891 7.54601L20 8L20.891 7.54601ZM20.454 7.10899L20 8L20.454 7.10899ZM14.454 3.10899L14 4L14.454 3.10899ZM14.891 3.54601L14 4L14.891 3.54601ZM3.10899 3.54601L4 4L3.10899 3.54601ZM3.54601 3.10899L4 4L3.54601 3.10899ZM2 4.6V21H4V4.6H2ZM4.6 4H13.4V2H4.6V4ZM14 4.6V7H16V4.6H14ZM14 7V21H16V7H14ZM3 22H15V20H3V22ZM15 22H21V20H15V22ZM20 8.6V21H22V8.6H20ZM15 8H19.4V6H15V8ZM6 8H7V6H6V8ZM11 8H12V6H11V8ZM6 11H7V9H6V11ZM11 11H12V9H11V11ZM6 14H7V12H6V14ZM11 14H12V12H11V14ZM10 18V21H12V18H10ZM11 20H7V22H11V20ZM8 21V18H6V21H8ZM9 17C9.55228 17 10 17.4477 10 18H12C12 16.3431 10.6569 15 9 15V17ZM9 15C7.34315 15 6 16.3431 6 18H8C8 17.4477 8.44772 17 9 17V15ZM18 12H18.01V10H18V12ZM18 15H18.01V13H18V15ZM18 18H18.01V16H18V18ZM22 8.6C22 8.33647 22.0008 8.07869 21.9831 7.86177C21.9644 7.63318 21.9203 7.36344 21.782 7.09202L20 8C19.9707 7.94249 19.9811 7.91972 19.9897 8.02463C19.9992 8.14122 20 8.30347 20 8.6H22ZM19.4 8C19.6965 8 19.8588 8.00078 19.9754 8.0103C20.0803 8.01887 20.0575 8.0293 20 8L20.908 6.21799C20.6366 6.07969 20.3668 6.03562 20.1382 6.01695C19.9213 5.99922 19.6635 6 19.4 6V8ZM21.782 7.09202C21.5903 6.7157 21.2843 6.40973 20.908 6.21799L20 8L21.782 7.09202ZM13.4 4C13.6965 4 13.8588 4.00078 13.9754 4.0103C14.0803 4.01887 14.0575 4.0293 14 4L14.908 2.21799C14.6366 2.07969 14.3668 2.03562 14.1382 2.01695C13.9213 1.99922 13.6635 2 13.4 2V4ZM16 4.6C16 4.33647 16.0008 4.07869 15.9831 3.86177C15.9644 3.63318 15.9203 3.36344 15.782 3.09202L14 4C13.9707 3.94249 13.9811 3.91972 13.9897 4.02463C13.9992 4.14122 14 4.30347 14 4.6H16ZM14 4L15.782 3.09202C15.5903 2.7157 15.2843 2.40973 14.908 2.21799L14 4ZM4 4.6C4 4.30347 4.00078 4.14122 4.0103 4.02463C4.01887 3.91972 4.0293 3.94249 4 4L2.21799 3.09202C2.07969 3.36344 2.03562 3.63318 2.01695 3.86177C1.99922 4.07869 2 4.33647 2 4.6H4ZM4.6 2C4.33647 2 4.07869 1.99922 3.86177 2.01695C3.63318 2.03562 3.36344 2.07969 3.09202 2.21799L4 4C3.94249 4.0293 3.91972 4.01887 4.02463 4.0103C4.14122 4.00078 4.30347 4 4.6 4V2ZM4 4L3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202L4 4Z" fill="#000000"></path> </g>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Dystopian</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div class="p-4 sm:ml-64 bg-gray-50">
   <div class="p-4 border-2 border-gray-200 bg-gray-50 border-dashed rounded-lg dark:border-gray-700">
      <div class="grid grid-cols-3 gap-4 mb-4">
         <div class="flex items-center justify-center h-24 rounded bg-gray-100 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-gray-100 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-gray-100 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-100 dark:bg-gray-800">
         <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
         <div class="flex items-center justify-center rounded bg-gray-100 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-100 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-100 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-100 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-100 dark:bg-gray-800">
         <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div>
      <div class="grid grid-cols-2 gap-4">
         <div class="flex items-center justify-center rounded bg-gray-100 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-100 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-100 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-100 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
   </div>
</div>
</>
    );
}

export default SideBar