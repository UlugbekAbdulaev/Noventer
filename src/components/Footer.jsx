import React from 'react'
import com from "../images/commentPhoto/com.jpg"
function Footer() {
    return (
        <div className='bg-[#0E041D] px-10 pb-20'>

            <div className='py-10 text-white text-center'>
                <h1 className='text-4xl font-bold'>Biz bilan aloqa</h1>
                <p>Loyihangizni qanday realizatsiya qilish haqida batafsil suhbatlashamiz</p>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                <div className='glass col-span-2 px-10 py-6 border-b border-t border-white rounded-lg'>
                    <h1 className='font-bold text-[30px] text-white'>Bizning jamoa xaqida</h1>

                    <div className='grid grid-cols-3 gap-3 mt-4'>

                        <div className='glass1 col-span-1 border-b border-t border-white py-1 rounded-lg flex gap-2 px-2'>
                            <div className='contain-content w-[50px] rounded-lg'>
                                <img src={com} alt="commentary pfoto" />
                            </div>
                            <div>
                                <h1>Husanov <br /> Alisher</h1>
                                <p>Developer</p>
                            </div>
                        </div>

                        <div className='glass1 col-span-1 border-b border-t border-white py-1 rounded-lg flex gap-2 px-2'>
                            <div className='contain-content w-[50px] rounded-lg'>
                                <img src={com} alt="commentary pfoto" />
                            </div>
                            <div>
                                <h1>Husanov <br /> Alisher</h1>
                                <p>Developer</p>
                            </div>
                        </div>

                        <div className='glass1 col-span-1 border-b border-t border-white py-1 rounded-lg flex gap-2 px-2'>
                            <div className='contain-content w-[50px] rounded-lg'>
                                <img src={com} alt="commentary pfoto" />
                            </div>
                            <div>
                                <h1>Husanov <br /> Alisher</h1>
                                <p>Developer</p>
                            </div>
                        </div>
                        <div className='glass1 col-span-1 border-b border-t border-white py-1 rounded-lg flex gap-2 px-2'>
                            <div className='contain-content w-[50px] rounded-lg'>
                                <img src={com} alt="commentary pfoto" />
                            </div>
                            <div>
                                <h1>Husanov <br /> Alisher</h1>
                                <p>Developer</p>
                            </div>
                        </div>

                        <div className='glass1 col-span-1 border-b border-t border-white py-1 rounded-lg flex gap-2 px-2'>
                            <div className='contain-content w-[50px] rounded-lg'>
                                <img src={com} alt="commentary pfoto" />
                            </div>
                            <div>
                                <h1>Husanov <br /> Alisher</h1>
                                <p>Developer</p>
                            </div>
                        </div>

                        <div className='glass1 col-span-1 border-b border-t border-white py-1 rounded-lg flex gap-2 px-2'>
                            <div className='contain-content w-[50px] rounded-lg'>
                                <img src={com} alt="commentary pfoto" />
                            </div>
                            <div>
                                <h1>Husanov <br /> Alisher</h1>
                                <p>Developer</p>
                            </div>
                        </div>

                        <div className='glass1 col-span-1 border-b border-t border-white py-1 rounded-lg flex gap-2 px-2'>
                            <div className='contain-content w-[50px] rounded-lg'>
                                <img src={com} alt="commentary pfoto" />
                            </div>
                            <div>
                                <h1>Husanov <br /> Alisher</h1>
                                <p>Developer</p>
                            </div>
                        </div>

                        <div className='glass1 col-span-1 border-b border-t border-white py-1 rounded-lg flex gap-2 px-2'>
                            <div className='contain-content w-[50px] rounded-lg'>
                                <img src={com} alt="commentary pfoto" />
                            </div>
                            <div>
                                <h1>Husanov <br /> Alisher</h1>
                                <p>Developer</p>
                            </div>
                        </div>

                        <div className='glass1 col-span-1 border-b border-t border-white py-1 rounded-lg flex gap-2 px-2'>
                            <div className='contain-content w-[50px] rounded-lg'>
                                <img src={com} alt="commentary pfoto" />
                            </div>
                            <div>
                                <h1>Husanov <br /> Alisher</h1>
                                <p>Developer</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='glass col-span-1 border-b border-t border-white rounded-lg text-center py-7 px-10'>
                    <div>
                    <h1 className='text-white text-[26px] font-bold'>Bepul konsultatsiya</h1>
                    <p className='text-white'>Loyihangiz bo’yicha boshlang’ich bepul konsultatsiya uchun ma’lumotingizni qoldiring.</p>
                    <input className='border-b border-t border-white rounded-lg mt-7 px-3 py-1 text-white' type="text" placeholder='ismingiz' /><br /><br />
                    <input className='border-b border-t border-white rounded-lg px-3 py-1 text-white' type="text" placeholder='Telefon raqamingiz' /><br />
                    <button className='border-b border-t border-white rounded-lg bg-[#5A00DB] px-20 py-1 mt-7 text-white'>jo'natish</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer