import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

const EditProfile = () => {

    const router = useRouter();

    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        'address1': '',
        'address2': '',
        'city': '',
        'state': '',
        'zip': '',
        'country': '',
        'cCode': '',
        'phone': ''
    });

    const cancelClicked = () => {
        router.back();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    const formSubmitted = async () => {

        if (formData.address1 === '' || formData.city === '' || formData.city === '' || formData.state === '' ||
            formData.country === '' || formData.cCode === '' || formData.phone === ''
        ){
            setError('Fill all neccessary fields');
            return;
        }else{
            setError('');
        }

        try{
            let url = "https://backend.iruhost.com/api/update-address";

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
            }
        }catch(error){
            console.log("Error sending data: ", error);
        }
    }

    return ( 
        <>
        <Head>
            <meta name="robots" content="noindex, nofollow" />
            <title>Edit Profile - IruHost</title>
        </Head>
        <div className="h-max w-full px-3 sm:px-10">
            <header className="h-max w-full py-10 border-b border-grey mb-5">
                <h2 className="text-3xl font-semibold">Edit Address</h2>
            </header>
            <form onSubmit={(e) => e.preventDefault()} className="h-max w-full">
                <div className={`text-accent text-base text-center py-2 rounded mb-3
                    ${error ? "" : "hidden"}
                    ${error === 'Address Added' || 'Address updated' ? 'bg-green-500' : 'bg-danger'}
                    `}>{error}</div>
                <div className="h-max w-full pb-5 flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                    <div className="h-max w-full sm:w-max">
                        <label htmlFor="address1" className="text-base text-grey">Address:<span>*</span></label>
                        <label htmlFor="address2" className="hidden"></label>
                    </div>
                    <div className="h-max w-full sm:w-[calc(100%-200px)]">
                        <input type="text" name="address1" value={formData.address1} onChange={handleChange} id="address1" className="h-10 w-full mb-3 border border-grey rounded px-5 outline-none" placeholder="Address line 1" />
                        <input type="text" name="address2" value={formData.address2} onChange={handleChange} id="address2" className="h-10 w-full border border-grey rounded px-5 outline-none" placeholder="Address line 2" />
                    </div>
                </div>
                <div className="h-max w-full pb-5 flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                    <div className="h-max w-full sm:w-max">
                        <label htmlFor="city" className="text-base text-grey">City:<span>*</span></label>
                    </div>
                    <div className="h-max w-full sm:w-[calc(100%-200px)]">
                        <input type="text" name="city" value={formData.city} onChange={handleChange} id="city" className="h-10 w-full mb-3 border border-grey rounded px-5 outline-none" placeholder="City" />
                    </div>
                </div>
                <div className="h-max w-full pb-5 flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                    <div className="h-max w-full sm:w-max">
                        <label htmlFor="state" className="text-base text-grey">State/Province:<span>*</span></label>
                    </div>
                    <div className="h-max w-full sm:w-[calc(100%-200px)]">
                        <input type="text" name="state" value={formData.state} onChange={handleChange} id="state" className="h-10 w-full mb-3 border border-grey rounded px-5 outline-none" placeholder="State/Province" />
                    </div>
                </div>
                <div className="h-max w-full pb-5 flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                    <div className="h-max w-full sm:w-max">
                        <label htmlFor="zip" className="text-base text-grey">Zip/Postal Code:<span>*</span></label>
                    </div>
                    <div className="h-max w-full sm:w-[calc(100%-200px)]">
                        <input type="text" name="zip" value={formData.zip} onChange={handleChange} id="zip" className="h-10 w-full mb-3 border border-grey rounded px-5 outline-none" placeholder="Zip/Postal Code" />
                    </div>
                </div>
                <div className="h-max w-full pb-5 flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                    <div className="h-max w-full sm:w-max">
                        <label htmlFor="country" className="text-base text-grey">Country:<span>*</span></label>
                    </div>
                    <div className="h-max w-full sm:w-[calc(100%-200px)]">
                        <input type="text" name="country" value={formData.country} onChange={handleChange} id="country" className="h-10 w-full mb-3 border border-grey rounded px-5 outline-none" placeholder="Country" />
                    </div>
                </div>
                <div className="h-max w-full pb-5 flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                    <div className="h-max w-full sm:w-max">
                        <label htmlFor="phone" className="text-base text-grey">Phone:<span>*</span></label>
                        <label htmlFor="country_code" className="hidden">Country Code:</label>
                    </div>
                    <div className="h-max w-full sm:w-[calc(100%-200px)] flex items-center mb-3 ">
                        <input type="text" name="cCode" value={formData.cCode} onChange={handleChange} id="country_code" className="h-10 w-[100px] border border-grey px-5 rounded outline-none" placeholder="+234" />
                        <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="h-10 w-[calc(100%-100px)] border border-grey rounded px-5 outline-none" placeholder="phone" />
                    </div>
                </div>
                <div className="h-max w-full flex mb-10 gap-10 items-center mt-5">
                    <button onClick={formSubmitted} className="py-2 px-5 rounded bg-primary text-text">Save Changes</button>
                    <button onClick={cancelClicked} className="text-danger hover:underline transition-all duration-500">Cancel</button>
                </div>
            </form>
        </div>
        </>
     );
}
 
export default EditProfile;