import React from 'react'
import rasm1 from "../images/1.png"
import rasm2 from "../images/2.png"
import rasm3 from "../images/3.png"
import xizmatIcon from "../images/icon/icon.png"
function Loyha() {
    return (
        <div className='bg-[#0E041D]'>
            <div className='text-center text-white py-10 px-10'>
                <h1 className='font-bold text-[35px]'>Loyhalarimiz</h1>
                <p>biz xaqimizda gaprsin!</p>
            </div>
            <div className='grid grid-cols-2 px-10 gap-10'>
                <div className='rounded-xl contain-content'>
                    <img src={rasm1} alt="lotxa foto" />
                </div>
                <div className='text-white px-5 py-10'>
                    <h1>Tourmad loyihasi</h1><br />
                    <p>
                        Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan tashqari saytdan o‘zingiz uchun qayerlarga boorish kerakligini va qayerlarda xizmat ko‘satish qancha ekanligini ko‘rishingiz va o‘zingiz uchun oldindan buyurtma qilishingiz mumkin.
                    </p><br />
                    <button className='glass px-4 py-2 border-b-1 border-t-1 rounded-lg '>Loyihani ko’rish</button>
                </div>
                <div className='text-white px-5 py-10'>
                    <h1>Tourmad loyihasi</h1><br />
                    <p>
                        Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan tashqari saytdan o‘zingiz uchun qayerlarga boorish kerakligini va qayerlarda xizmat ko‘satish qancha ekanligini ko‘rishingiz va o‘zingiz uchun oldindan buyurtma qilishingiz mumkin.
                    </p><br />
                    <button className='glass px-4 py-2 border-b-1 border-t-1 rounded-lg '>Loyihani ko’rish</button>
                </div>
                <div className='rounded-xl contain-content'>
                    <img src={rasm2} alt="lotxa foto" />
                </div>
                <div className='rounded-xl contain-content'>
                    <img src={rasm3} alt="lotxa foto" />
                </div>
                <div className='text-white px-5 py-10'>
                    <h1>Tourmad loyihasi</h1><br />
                    <p>
                        Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan tashqari saytdan o‘zingiz uchun qayerlarga boorish kerakligini va qayerlarda xizmat ko‘satish qancha ekanligini ko‘rishingiz va o‘zingiz uchun oldindan buyurtma qilishingiz mumkin.
                    </p><br />
                    <button className='glass px-4 py-2 border-b-1 border-t-1 rounded-lg '>Loyihani ko’rish</button>
                </div>
            </div>

            <div className='text-center py-15'>
                <button className='bg-[#5A00DB] text-white border px-5 py-2 rounded-lg'>Boshqa loyhalarni ko'rish</button>
            </div>


            {/* { xizmat turlari qismi} */}

            <div className='py-10 text-white text-center'>
                <h1 className='text-4xl font-bold'>Xizmat turlari</h1>
                <p>Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:</p>
            </div>

            <div className='grid grid-cols-3 px-10 gap-5 py-10'>

                <div className='glass hove rounded-xl col-span-1 text-center flex flex-col justify-center items-center  py-15 px-1'>
                    <div className='glass1 w-[100px] h-[100px]  rounded-xl text-white flex flex-col justify-center items-center'>
                        <img src={xizmatIcon} alt="icon" />
                    </div>
                    <div className='px-6 text-white'>
                        <h1 className='font-bold text-2xl'>Landing saxifalar</h1>
                        <p className='mt-[10px]'>Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
                        </p>
                    </div>
                </div>

                <div className='glass hove rounded-xl col-span-1 text-center flex flex-col justify-center items-center  py-15 px-1'>
                    <div className='glass1 w-[100px] h-[100px]  rounded-xl text-white flex flex-col justify-center items-center'>
                        <img src={xizmatIcon} alt="icon" />
                    </div>
                    <div className='px-6 text-white'>
                        <h1 className='font-bold text-2xl'>Landing saxifalar</h1>
                        <p className='mt-[10px]'>Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
                        </p>
                    </div>
                </div>

                <div className='glass hove rounded-xl col-span-1 text-center flex flex-col justify-center items-center  py-15 px-1'>
                    <div className='glass1 w-[100px] h-[100px]  rounded-xl text-white flex flex-col justify-center items-center'>
                        <img src={xizmatIcon} alt="icon" />
                    </div>
                    <div className='px-6 text-white'>
                        <h1 className='font-bold text-2xl'>Landing saxifalar</h1>
                        <p className='mt-[10px]'>Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
                        </p>
                    </div>
                </div>

                <div className='glass hove rounded-xl col-span-1 text-center flex flex-col justify-center items-center  py-15 px-1'>
                    <div className='glass1 w-[100px] h-[100px]  rounded-xl text-white flex flex-col justify-center items-center'>
                        <img src={xizmatIcon} alt="icon" />
                    </div>
                    <div className='px-6 text-white'>
                        <h1 className='font-bold text-2xl'>Landing saxifalar</h1>
                        <p className='mt-[10px]'>Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
                        </p>
                    </div>
                </div>

                <div className='glass hove rounded-xl col-span-1 text-center flex flex-col justify-center items-center  py-15 px-1'>
                    <div className='glass1 w-[100px] h-[100px]  rounded-xl text-white flex flex-col justify-center items-center'>
                        <img src={xizmatIcon} alt="icon" />
                    </div>
                    <div className='px-6 text-white'>
                        <h1 className='font-bold text-2xl'>Landing saxifalar</h1>
                        <p className='mt-[10px]'>Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
                        </p>
                    </div>
                </div>

                <div className='glass hove rounded-xl col-span-1 text-center flex flex-col justify-center items-center  py-15 px-1'>
                    <div className='glass1 w-[100px] h-[100px]  rounded-xl text-white flex flex-col justify-center items-center'>
                        <img src={xizmatIcon} alt="icon" />
                    </div>
                    <div className='px-6 text-white'>
                        <h1 className='font-bold text-2xl'>Landing saxifalar</h1>
                        <p className='mt-[10px]'>Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
                        </p>
                    </div>
                </div>

                <div className='glass hove rounded-xl col-span-1 text-center flex flex-col justify-center items-center  py-15 px-1'>
                    <div className='glass1 w-[100px] h-[100px]  rounded-xl text-white flex flex-col justify-center items-center'>
                        <img src={xizmatIcon} alt="icon" />
                    </div>
                    <div className='px-6 text-white'>
                        <h1 className='font-bold text-2xl'>Landing saxifalar</h1>
                        <p className='mt-[10px]'>Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
                        </p>
                    </div>
                </div>

                <div className='glass hove rounded-xl col-span-1 text-center flex flex-col justify-center items-center  py-15 px-1'>
                    <div className='glass1 w-[100px] h-[100px]  rounded-xl text-white flex flex-col justify-center items-center'>
                        <img src={xizmatIcon} alt="icon" />
                    </div>
                    <div className='px-6 text-white'>
                        <h1 className='font-bold text-2xl'>Landing saxifalar</h1>
                        <p className='mt-[10px]'>Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
                        </p>
                    </div>
                </div>

                <div className='glass hove rounded-xl col-span-1 text-center flex flex-col justify-center items-center  py-15 px-1'>
                    <div className='glass1 w-[100px] h-[100px]  rounded-xl text-white flex flex-col justify-center items-center'>
                        <img src={xizmatIcon} alt="icon" />
                    </div>
                    <div className='px-6 text-white'>
                        <h1 className='font-bold text-2xl'>Landing saxifalar</h1>
                        <p className='mt-[10px]'>Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
                        </p>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Loyha