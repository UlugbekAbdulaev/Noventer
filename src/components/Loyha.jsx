import React from 'react'
import rasm1 from "../images/1.png"
import rasm2 from "../images/2.png"
import rasm3 from "../images/3.png"
import xizmatIcon from "../images/icon/icon.png"
function Loyha() {
    return (
        <div className='bg-[#0E041D]'>
            <div className='text-center text-white py-5 md:py-10 px-5 md:px-10'>
                <h1 className='font-bold text-[28px] md:text-[35px]'>Loyihalarimiz</h1>
                <p className='text-sm md:text-base'>Biz haqimizda gapirsin!</p>
            </div>

            <div className='grid grid-cols-1  md:grid-cols-2 gap-10 px-5 md:px-10'>
            <div className='text-white px-5 py-5 md:py-10'>
                    <h1 className='text-lg md:text-xl font-bold'>Tourmad loyihasi</h1>
                    <p className='text-sm md:text-base mt-2'>
                        Tourmad – O‘zbekistonning ichki turizmini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha servislarni o‘z ichiga jamlagan. Mehmonxona xizmati, restoran xizmati, gidlik xizmati va boshqa ko‘plab xizmatlar mavjud. Shuningdek, saytdan o‘zingiz uchun sayohat rejalashtirishingiz va buyurtma qilishingiz mumkin.
                    </p>
                    <button className='glass px-4 py-2 border rounded-lg mt-4'>Loyihani ko’rish</button>
                </div>
                <div className='rounded-xl contain-content'>
                    <img src={rasm1} alt="Loyha foto" className='w-full rounded-xl' />
                </div>
                

                <div className='text-white px-5 py-5 md:py-10 order-2 md:order-1'>
                    <h1 className='text-lg md:text-xl font-bold'>Tourmad loyihasi</h1>
                    <p className='text-sm md:text-base mt-2'>
                        Tourmad – O‘zbekistonning ichki turizmini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha servislarni o‘z ichiga jamlagan. Mehmonxona xizmati, restoran xizmati, gidlik xizmati va boshqa ko‘plab xizmatlar mavjud. Shuningdek, saytdan o‘zingiz uchun sayohat rejalashtirishingiz va buyurtma qilishingiz mumkin.
                    </p>
                    <button className='glass px-4 py-2 border rounded-lg mt-4'>Loyihani ko’rish</button>
                </div>
                <div className='rounded-xl contain-content order-1 md:order-2'>
                    <img src={rasm2} alt="Loyha foto" className='w-full rounded-xl' />
                </div>

                <div className='rounded-xl contain-content'>
                    <img src={rasm3} alt="Loyha foto" className='w-full rounded-xl' />
                </div>
                <div className='text-white px-5 py-5 md:py-10'>
                    <h1 className='text-lg md:text-xl font-bold'>Tourmad loyihasi</h1>
                    <p className='text-sm md:text-base mt-2'>
                        Tourmad – O‘zbekistonning ichki turizmini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha servislarni o‘z ichiga jamlagan. Mehmonxona xizmati, restoran xizmati, gidlik xizmati va boshqa ko‘plab xizmatlar mavjud. Shuningdek, saytdan o‘zingiz uchun sayohat rejalashtirishingiz va buyurtma qilishingiz mumkin.
                    </p>
                    <button className='glass px-4 py-2 border rounded-lg mt-4'>Loyihani ko’rish</button>
                </div>

            </div>

            <div className='text-center py-10'>
                <button className='bg-[#5A00DB] text-white border px-5 py-2 rounded-lg'>Boshqa loyhalarni ko'rish</button>
            </div>




            {/* { xizmat turlari qismi} */}

            <div className='py-10 text-white text-center'>
    <h1 className='text-3xl md:text-4xl font-bold'>Xizmat turlari</h1>
    <p className='text-sm md:text-base mt-2'>Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:</p>
</div>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 md:px-10 gap-5 py-10'>

    {[...Array(9)].map((_, index) => (
        <div key={index} className='glass hover:scale-105 transition transform duration-300 rounded-xl text-center flex flex-col justify-center items-center py-10 px-5'>
            <div className='glass1 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-xl text-white flex flex-col justify-center items-center'>
                <img src={xizmatIcon} alt="icon" className='w-3/4 h-3/4' />
            </div>
            <div className='px-4 text-white mt-4'>
                <h1 className='font-bold text-lg md:text-2xl'>Landing saxifalar</h1>
                <p className='mt-2 text-sm md:text-base'>
                    Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
                </p>
            </div>
        </div>
    ))}

</div>




        </div>
    )
}

export default Loyha