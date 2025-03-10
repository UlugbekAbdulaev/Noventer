import React from 'react'
import picture1 from "../images/picture1.png"
import picture2 from "../images/picture2.png"
import picture3 from "../images/picture3.png"
function Main() {
    return (
        <div className='bg-[#0E041D;]'>
            <div className='grid grid-cols-3  text-white px-10 gap-10 py-10'>
                <div className='glass col-span-1 border-b-1 rounded-xl contain-content'>
                    <img src={picture1} alt="main picture" />
                    <div className='px-3 py-6'>
                        <h2 className='text-[22px] font-bold'>Boshlanishi</h2>
                        <p>Biz  --- dan ish boshladik va <br />
                            ---- larni oldimizga maqsad qilib <br />
                            qo’ydik</p>
                    </div>
                </div>
                <div className='glass col-span-1 border-b-1 rounded-xl contain-content'>
                    <img src={picture2} alt="main picture" />
                    <div className='px-3 py-6'>
                        <h2 className='text-[22px] font-bold'>Uzoq muddatli loyihalar</h2>
                        <p>Tajribamiz davomida umumiy <br />
                            hisobda - - loyiha uchun <br />
                            -- - muddatda ishlab topshirdik</p>
                    </div>
                </div>
                <div className='glass col-span-1 border-b-1 rounded-xl contain-content'>
                    <img src={picture3} alt="main picture" />
                    <div className='px-3 py-6'>
                        <h2 className='text-[22px] font-bold'>Jamoamiz kengaymoqda</h2>
                        <p>Jamoamiz safi esa tobora <br />
                            kengaymoqda. Boshida - kishidan <br />
                            boshlangan faoliyatimiz hozirda <br />
                            -- kishi bilan davom etmoqda</p>
                    </div>
                </div>
            </div>

            <div className='px-10 py-5'>
                <p className='text-white '>
                    Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>

        </div>




    )
}

export default Main