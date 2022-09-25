import React from 'react';

const PageHeader = ({ title, firstRoutes, icon, path }) => {
    return (
        <div className='w-full lg:h-[60vh] text-white bg-slate-800 xl:h-[60vh] h-[40vh] items-center flex justify-center'>
            <div>
                <h1 className='text-4xl font-medium text-white'>{title}</h1>
                <div class="flex items-center justify-center py-4 overflow-y-auto whitespace-nowrap">
                    <a href="/" class="text-gray-300 dark:text-gray-200 hover:underline hover:text-red-400 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span class="mx-2">Home</span>
                    </a>

                    <span class=" text-gray-300 dark:text-gray-300 rtl:-scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </span>

                    <a href={path} class="flex items-center text-gray-300 -px-2 hover:text-red-400 dark:text-gray-200 hover:underline">
                        {icon}
                        <span class="">{firstRoutes}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
