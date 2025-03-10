import React from 'react'
import icon1 from "../images/icon/v1.png"
import icon2 from "../images/icon/v2.png"
import icon3 from "../images/icon/v3.png"
import icon4 from "../images/icon/v4.png"

function Header() {
    return (
        <div className='box-border'>

            <div className='imag grid grid-cols-2 bg-[#0E041D] relative  w-full h-screen'>
                <div className='col-span-1 text-white text-[40px] flex flex-col justify-center  mb-[150px] ml-[200px]'>
                    <span className='font-bold'> Yuqori sifatdagi</span>
                    <span> aniqlikka asoslanib</span>
                    <span className='text-[#5A00DB]'> istalgan turdagi</span>
                    <span> dasturlarni tayyorlaymiz</span>
                    <button className='border text-white text-[18px] px-3 py-1 w-40 rounded-lg my-5 bg-[#5A00DB]'>Xizmatlar haqida</button>
                </div>
            </div>

            <div className="qism2 absolute bottom-0 w-full z-10 px-14">
                <div className="grid grid-cols-4 text-white w-full gap-x-10 ml-5">

                    <div className="glass border w-44 px-4 py-3 rounded-lg flex items-center gap-3 bg-white/10 backdrop-blur-lg shadow-lg">
                        <img src={icon1} alt="iconka" className="w-12" />
                        <div className="text-left">
                            <p className="font-bold">7+ yillik</p>
                            <p className="text-sm">Umumiy tajriba</p>
                        </div>
                    </div>

                    <div className="glass border w-44 px-4 py-3 rounded-lg flex items-center gap-3  bg-white/10 backdrop-blur-lg shadow-lg">
                        <img src={icon2} alt="iconka" className="w-12" />
                        <div className="text-left">
                            <p className="font-bold">50+</p>
                            <p className="text-sm">Mijozlar</p>
                        </div>
                    </div>

                    <div className="glass border w-44 px-4 py-3 rounded-lg flex items-center gap-3  bg-white/10 backdrop-blur-lg shadow-lg">
                        <img src={icon3} alt="iconka" className="w-12" />
                        <div className="text-left">
                            <p className="font-bold">100+</p>
                            <p className="text-sm">Loyiha</p>
                        </div>
                    </div>

                    <div className="glass border w-44 px-4 py-3 rounded-lg flex items-center gap-3  bg-white/10 backdrop-blur-lg shadow-lg">
                        <img src={icon4} alt="iconka" className="w-12" />
                        <div className="text-left">
                            <p className="font-bold">24/7</p>
                            <p className="text-sm">Qo'llab-quvvatlash</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white bg-[#5A00DB] px-10 py-3'>
                <h1 className='font-bold text-3xl'>Biz haqimizda</h1>
                <p>qisqacha ma'lumot</p>
            </div>
        </div>
    )
}

export default Header
