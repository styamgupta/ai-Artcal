import { AiFillCloseCircle } from "react-icons/ai";
const SideWar = () => {
    const closesidewar = () => {
        const sidewar = document.getElementById("sidewar")
        sidewar.classList.toggle("hidden")
    }
    return (
        <>
            <div id='sidewar' className={`z-10 w-72 h-{100vh} p-4 mt-12 rounded-lg bg-sky-300 dark:bg-blue-900 absolute right-1 top-1 hidden`}>
                <span onClick={closesidewar} className="absolute right-5 top-3 cursor-pointer text-3xl"><AiFillCloseCircle/></span>
                <h4 className='m-3 text-xl flex justify-center font-bold'> <div className="m-2"> <img src="https://source.unsplash.com/50x50/?girl" alt="sorry"
                    className=" rounded-full" /> </div><span className="mt-3">हमारे बारे में</span></h4><hr></hr>

                <ul className="mx-2">
                    <li >
                        <div className="key flex m-5 flex-col">

                            <div>नमस्ते! हम एक ब्लॉगर हैं और हमारे ब्लॉग में हम AI का इस्तेमाल करते हैं। हमारे आर्टिकल हमेशा ट्रेंड पर होते हैं, जिससे हमारे पढ़ने वालों को अधिक से अधिक लाभ हो सके। AI की मदद से, हम उन टॉपिक्स पर लिखते हैं जो अभी ट्रेंड में हैं, और हमारा उद्देश्य हमारे पाठकों को अपडेट और महत्वपूर्ण जानकारी प्रदान करना है।</div>
                            <p className="text-xs mt-2">Copyright © 2023 [Your Blogging Web Name]. All rights reserved</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}


export default SideWar
