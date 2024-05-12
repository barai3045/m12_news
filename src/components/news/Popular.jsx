import React from 'react';

const PopularList = (props) => {
    return (
        <div className='gap-2'>
            { props.list.map((item,i)=>{
                return (
                    <div className="p-3 bg-white gap-2 mb-2">
                     <img  className="rounded rounder-md" src={item['img1']}/> 
                   
                        <p className='text-sm font-semibold pb-1'>{item['title']}</p>
                        <p className="text-sm" >{item['short_des']}</p>
                   
                    
                    </div>
                    
                )
            })

            }
        </div>
    );
};

export default PopularList;