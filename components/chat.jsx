import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Chats = () => {

    const [regError, setRegError] = useState('');
    const [userPresent, setUserPresent] = useState(false);
    const [chatPresent, setChatPresent] = useState(false);
    const [chatClicked, setChatCLicked] = useState(false);
    const [userChats, setUserChats] = useState([]);
    const [regFormData, setRegFormData] = useState({
        'fullname': '',
        'email': ''
    })
    const [formData, setFormData] = useState({
        'message': '',
        'image': null
    })

    const imgRef = useRef(null);
    const msgRef = useRef(null);

    const beginChat = () => {
        if (!chatClicked){
            setChatCLicked(true);
        }else{
            setChatCLicked(false);
        }
    }

    const removeChat = () => {
        setChatCLicked(false);
    }

    useEffect(() => {
        async function getSession() {
                
            let url = "https://backend.iruhost.com/api/session";

            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application",
                },withCredentials: true
            })

            if (response.data.success === true){
                setUserPresent(true);
            }else{
                setUserPresent(false);
            }
        } 

        getSession()
    },[])

    const regHanChanged = (e) => {
        const {name, value} = e.target;

        setRegFormData({...regFormData, [name]: value});
    }

    const chatUserReg = async () => {

        let nameVal = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (regFormData.fullname === '' || regFormData.email === ''){
            setRegError('All fields required');
            return;
        }else{
            setRegError('');
        }
        
        if (!nameVal.test(regFormData.fullname)){
            setRegError('Invalid name');
            return;
        }else{
            setRegError('');
        }

        if (!emailVal.test(regFormData.email)){
            setRegError('Invalid email address');
        }else{
            setRegError('');
        }

        try{
            let url = "https://backend.iruhost.com/api/chat-registration";

            const response = await axios.post(url, regFormData, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })
            
            if (response.data.status === 'success'){
                setUserPresent(true);
            }else{
                setUserPresent(false);
            }
        }catch(err){
            console.log("Error sending data: ", err);
        }
    }

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image") {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    const imgClicked = () => {
        imgRef.current.click();
    }

    const sendMessage = async () => {

        const data = new FormData();
        data.append("message", formData.message);
        if (formData.image) {
            data.append("image", formData.image);
        }

        try{
            let url = "https://backend.iruhost.com/api/add-chat";

            const response = await axios.post(url, data, {
                withCredentials: true
            });
            
            if (response.data.status === 'success'){
                setChatPresent(true);
                setFormData({
                    message: "",
                    image: null
                });

                if (imgRef.current) {
                    imgRef.current.value = null;
                }
            }
        }catch(err){
            console.log("Error sending data: ", err);
        }
    }

    useEffect(() => {
        async function getChats() {
            try{
                let url = "https://backend.iruhost.com/api/get-chats";

                const response = await axios.get(url, {
                    headers: {
                        "Content-Type" : "application",
                    },withCredentials: true
                })

                if (response.data.status === 'success'){
                    setChatPresent(true);
                    setUserChats(response.data.message);
                }else{
                    setUserChats([]);
                }
            }catch(err){
                console.log("Error retrieving chats: ",err);
            }
        }

        getChats();
        
        const interval = setInterval(getChats, 5000);

        return () => clearInterval(interval);
    },[])

    return ( 
        <>
        <div onClick={beginChat} className={`chatIcon fixed top-[85%] left-[80%] sm:left-[90%] h-12 w-12 cursor-pointer`}>
            <img src="/chat.png" className="h-full w-full" alt="" />
        </div>
        <div className={`cards-shadow h-full sm:h-max w-full sm:w-[400px] fixed left-[0] sm:left-[65%] bg-accent rounded p-5
            ${userPresent ? "top-0 sm:top-[30%]" : "top-0 sm:top-[40%]"}
            ${chatClicked ? "" : "hidden"}
            `}>
            <div className="h-max w-full flex justify-between border-b border-grey pb-5">
                <div className="h-max w-max flex items-center gap-3">
                    <img src="/customer-support.png" className="h-10 w-10 rounded-full" alt="" />
                    <p>Customer Care</p>
                </div>
                <div onClick={removeChat} className="cursor-pointer h-max w-max text-xl">
                    <i className="fa fa-times"></i>
                </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className={`h-max w-full
                ${userPresent ? "hidden" : "block"}
                `}>
                <p className="text-sm">Provide your name and email address so we can serve you properly.</p>
                <div className={`w-full py-2 text-center bg-danger text-accent rounded mt-3
                    ${regError ? "block" : "hidden"}
                    `}>{regError}</div>
                <div className="h-max w-full my-3">
                    <label htmlFor="fullname" className="text-sm mb-3">Full Name</label>
                    <input type="text" name="fullname" value={regFormData.fullname} onChange={regHanChanged} id="fullname" className="h-10 w-full px-5 outline-none text-sm border border-grey rounded" placeholder="Enter your name" />
                </div>
                <div className="h-max w-full my-3">
                    <label htmlFor="email" className="text-sm mb-3">Email</label>
                    <input type="text" name="email" value={regFormData.email} id="email" onChange={regHanChanged} className="h-10 w-full px-5 outline-none text-sm border border-grey rounded" placeholder="Enter your email address" />
                </div>
                <div className="h-max w-full mt-5">
                    <button onClick={chatUserReg} className="h-max w-full text-base bg-primary rounded text-accent py-2.5">Submit</button>
                </div>
            </form>
            <div className={`h-[calc(100%-80px)] sm:h-[350px] w-full
                ${userPresent ? "block" : "hidden"}
                `}>
                <div className="h-[80%] sm:h-[250px] w-full">
                    <div className={`h-full w-full py-3 overflow-y-auto
                        ${chatPresent ? "block" : "hidden"}
                        `}>
                            {
                               userChats.map((chat, index) => 
                                    chat.reciever_id === 'admin' ? (
                                        <div key={index} className="h-max w-full flex flex-col gap-2 items-end my-2">
                                            <div className="h-max max-w-[60%]">
                                                <p className={`py-2 px-3 bg-grey rounded-3xl text-sm
                                                    ${chat.message ? "" : "hidden"}
                                                    `}>{chat.message}</p>
                                            </div>
                                            <img src={`https://backend.iruhost.com/uploads/${chat.image}`} alt="" className={`h-20 w-20
                                                ${chat.image ? "" : "hidden"}
                                                `} />
                                        </div>
                                    ) : (
                                        <div key={index} className="h-max w-full my-2">
                                            <div className="h-max max-w-[60%]">
                                                <p className="py-2 px-3 bg-lighterGrey rounded-3xl text-sm">{chat.message}</p>
                                            </div>
                                        </div>
                                    )
                                )
                            }
                    </div>
                    <div className={`h-full w-full flex justify-center items-center py-3
                        ${chatPresent ? "hidden" : "block"}
                        `}>
                            <p className="text-sm text-grey">Begin Chat</p>
                        </div>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="h-[100px] w-full border-t border-grey flex items-center gap-3">
                    <input type="file" name="image" ref={imgRef} onChange={handleChange} hidden />
                    <textarea name="message" ref={msgRef} value={formData.message} onChange={handleChange} id="message" className="border border-grey max-h-20 min-h-20 max-w-[75%] min-w-[75%] rounded p-2 text-sm" placeholder="Type your message..."></textarea>
                    <button onClick={imgClicked} className="h-max w-max text-xl"><i className="fa fa-paperclip"></i></button>
                    <button onClick={sendMessage} className="h-max w-max text-xl"><i className="fa fa-send"></i></button>
                </form>
            </div>
        </div> 
        </>
     );
}
 
export default Chats;