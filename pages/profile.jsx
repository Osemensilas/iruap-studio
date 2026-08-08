import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

const Profile = () => {

    useEffect(() => {
        getUser();
        getAddress();
    },[])

    const router = useRouter();

    const [user, setUser] = useState({
        'email': '',
        'name': ''
    })
    const [address, setAddress] = useState({
        'address': '',
        'phone': ''
    })
    const [updateEmail, setUpdateEmail] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        'email': '',
        'password': ''
    });

    const updateEmailClicked = () => {
        setUpdateEmail(true);
    }

    const cancelClicked = () => {
        setUpdateEmail(false);
    }

    const editAddress = () => {
        router.push('/edit-profile');
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    const formSubmitted = async () => {
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (formData.email === '' || formData.password === ''){
            setError('All field required');
            return;
        }else{
            setError('');
        }

        if (!emailVal.test(formData.email)){
            setError("Inalid email address");
            return;
        }else{
            setError('');
        }

        try{
            let url = "https://backend.iruhost.com/api/update-email";

            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })
            
            if (response.data.status === 'error'){
                setError(response.data.message);
            }

            if (response.data.status === 'success'){
                setError(response.data.message);
                getUser();
            }
        }catch(error){
            console.log("Error sending data: ", error);
        }
    }

    async function getUser() {
        let url = "https://backend.iruhost.com/api/session-data";

        const response = await axios.get(url, {
            headers: {
                "Content-Type" : "application/json",
            },withCredentials: true
        })
        
        if (response.data.success === true){
            setUser({
                'email': response.data.user.email,
                'name': response.data.user.name
            });
        }
    }

    async function getAddress(){
        let url = "https://backend.iruhost.com/api/session-address";

        const response = await axios.get(url, {
            headers: {
                "Content-Type" : "application/json",
            },withCredentials: true
        })
        
        if (response.data.success === true){
            setAddress({
                'address': response.data.user.address,
                'phone': response.data.user.phone
            });
        }
    }

    return ( 
        <>
        <Head>
            <meta name="robots" content="noindex, nofollow" />
            <title>User Profile - IruHost</title>
        </Head>
        <div className="h-max w-full p-10">
            <h2 className="text-2xl font-semibold text-text mb-10">Personal Information</h2>
            <div className="h-max w-full flex flex-col sm:flex-row items-start border-b border-grey p-5 gap-10">
                <div className="h-max w-max">
                    <div className="h-20 w-20 relative">
                        <Image src="/account.png" alt="user image" className="object-cover" fill />
                    </div>
                    <div className="h-max w-max mt-5">
                        <h2 className="text-base font-semibold">Basic Info</h2>
                    </div>
                </div>
                <div className="h-max w-[calc(100%-100px)]">
                    <div className="h-max w-full flex items-start gap-3 mb-5">
                        <div className="">
                            <h2 className="text-base font-semibold">Name:</h2>
                        </div>
                        <div className="">
                            <p className="text-base">{user.name}</p>
                        </div>
                    </div>
                    <div className="h-max w-full flex flex-col sm:flex-row items-start justify-between">
                        <div className="h-max w-full flex items-start gap-3 mb-5">
                            <h2 className="text-base font-semibold">Email:</h2>
                            <div className="">
                                <p>{user.email}</p>
                            </div>
                        </div>
                        <div className="">
                            <button onClick={updateEmailClicked} className="border border-text rounded font-medium text-text px-3 py-2">EDIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-max w-full p-10">
            <div className="h-max w-full flex flex-col sm:flex-row items-start border-b border-grey p-5 gap-10">
                <div className="h-max w-max">
                    <div className="h-20 w-20 relative">
                        <img src="/address (1).png" className="object-cover" fill alt="address image" />
                    </div>
                    <div className="h-max w-max mt-5">
                        <h2 className="text-base font-semibold">Address Book:</h2>
                    </div>
                </div>
                <div className="h-max w-full sm:w-[calc(100%-100px)]">
                    <div className="h-max w-full flex flex-col sm:flex-row items-start justify-between">
                        <div className="h-max w-full sm:w-[40%] flex items-start gap-3 mb-5">
                            <h2 className="text-base font-semibold">Address:</h2>
                            <div className="">
                                <p>{address.address}</p>
                            </div>
                        </div>
                        <div className="h-max w-full sm:w-[30%]">Tel: {address.phone}</div>
                        <div className="h-max w-max">
                            <button onClick={editAddress} className="border border-text rounded font-medium text-text px-3 py-2">EDIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`custom-fixed items-center justify-center
            ${updateEmail ? "flex" : "hidden"}
            `}>
            <form onSubmit={(e) => e.preventDefault()} className="relative z-50 w-full h-max sm:w-[600px] cards-shadow rounded bg-accent">
                <header className="h-max w-full p-10 bg-background rounded-t flex justify-between items-center">
                    <h2 className="font-semibold text-accent text-2xl">Edit Email</h2>
                    <div onClick={cancelClicked} className="h-max w-max cursor-pointer">
                        <i className="fa fa-times text-accent text-xl" aria-hidden="true"></i>
                    </div>
                </header>
                <div className={`text-accent text-base text-center py-2
                    ${error ? "" : "hidden"}
                    ${error === 'Updated Successfully' ? 'bg-green-500' : 'bg-danger'}
                    `}>{error}</div>
                <div className="h-max w-full px-10 py-5">
                    <p className="text-base text-grey">We use your email address to communicate with you regarding your IruHost orders and transactions and to relay important information regarding your account. We promise not to spam you, and we won't share your email address with anyone else.</p>
                    <div className="h-max w-full flex items-start my-3 gap-5">
                        <div className="text-base text-grey">Current Email:</div>
                        <div className="text-base text-grey">osemensilas@gmail.com</div>
                    </div>
                    <div className="h-max w-full flex flex-col mb-5">
                        <label htmlFor="email" className="text-base text-grey mb-3">New Email Address:</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} id="email" className="h-10 w-full border border-grey rounded px-5 outline-none" placeholder="New Email Address" />
                    </div>
                    <div className="h-max w-full flex flex-col mb-5">
                        <label htmlFor="password" className="text-base text-grey mb-3">IruHost Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} id="password" className="h-10 w-full border border-grey rounded px-5 outline-none" placeholder="New Email Address" />
                    </div>
                    <div className="h-max w-full flex justify-between items-center mt-5">
                        <button onClick={formSubmitted} className="py-2 px-5 rounded bg-primary text-text">Change Email</button>
                        <button onClick={cancelClicked} className="text-danger hover:underline transition-all duration-500">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
        </>
     );
}
 
export default Profile;