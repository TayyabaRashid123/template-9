import Common from ' @/components/common';
import React from 'react'
import Leftside from './leftside';
import Rightside from './rightside';
const Page = () => {
    return(
<div className="md:max-w-[1920px]">
    <Common title="Blog List" subtitle="Blog"/> 
   <div className='md:max-w-[1320px] gap-4 flex flex-col md:flex-row'>
    <Leftside/>
    
    <Rightside/>
    </div>
    </div>
    )
}
export default Page;