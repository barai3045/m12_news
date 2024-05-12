import React from 'react';

const NewsList = (props) => {
    return (
        <div className='grid grid-cols-2 gap-2'>
            { props.list.map((item,i)=>{
                return (
                    <div className="flex flex-row p-3 bg-white gap-2">
                    <div className='basis-2/5'> <img  className="rounded rounder-md" src={item['img3']}/> </div>
                    <div  className='basis-3/5 '> 
                        <p className='text-sm font-semibold pb-1'>{item['title']}</p>
                        <p className="text-sm" >{item['short_des']}</p>
                    </div>
                    
                    </div>
                    
                )
            })

            }
        </div>
    );
};

export default NewsList;