import React from 'react'
import picture1 from "../images/picture1.png"
import picture2 from "../images/picture2.png"
import picture3 from "../images/picture3.png"

function Main() {
    return (
        <div className='bg-[#0E041D] py-10 lg:px-5 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-8 px-7 '>
                {[picture1, picture2, picture3].map((img, index) => (
                    <div key={index} className='glass border-b-1 rounded-xl overflow-hidden shadow-lg'>
                        <img src={img} alt="main picture" className='w-full h-auto rounded-t-xl' />
                        <div className='px-5 py-6'>
                            <h2 className='text-lg md:text-xl font-bold'>
                                {index === 0 ? "Boshlanishi" : index === 1 ? "Uzoq muddatli loyihalar" : "Jamoamiz kengaymoqda"}
                            </h2>
                            <p className='text-sm md:text-base mt-3'>
                                {index === 0 ? "Biz --- dan ish boshladik va ---- larni oldimizga maqsad qilib qo’ydik" :
                                    index === 1 ? "Tajribamiz davomida umumiy hisobda - - loyiha uchun -- - muddatda ishlab topshirdik" :
                                        "Jamoamiz safi esa tobora kengaymoqda. Boshida - kishidan boshlangan faoliyatimiz hozirda -- kishi bilan davom etmoqda"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='px-5 md:px-10 py-5'>
                <p className='text-white text-sm md:text-base leading-relaxed'>
                    Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                </p>
            </div>
        </div>
    )
}

export default Main;
