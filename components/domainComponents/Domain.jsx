import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import Loading from "../Loading";

const Domain = () => {

    const searchParams = useSearchParams();
    const mainDomain = searchParams.get('domain');

    const [autoRenewDomain, setAutoRenewDomain] = useState(false);
    const [autoRenewID, setAutoRenewID] = useState(false);
    const [dns, setDns] = useState("iruhost");
    const [dnsOptionChanged, setDnsOptionChanged] = useState(false);
    const [dnsChangeClicked, setDnsChangeClicked] = useState(false);
    const [message, setMessage] = useState(false);
    const [timerStart, setTimerStart] = useState(false);
    const [messageText, setMessageText] = useState('');
    const [updateRecord, setUpdateRecords] = useState(false);
    const [records, setRecords] = useState([]);
    const [error, setError] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [registrationDate, setRegistrationDate] = useState('');
    const [domainStatus, setDomainStatus] = useState('');
    const [formDNS, setFormDNS] = useState({
        nameserver1: '',
        nameserver2: '',
        nameserver3: '',
        nameserver4: '',
        nameserver5: '',
        nameserver6: '',
        domain: mainDomain,
        dnsProvide: 'custom'
    });
    const [hostForm, setHostForm] = useState({
        type: '',
        host: '',
        value: '',
        type2: '',
        host2: '',
        value2: '',
        domain: mainDomain,
    })

    const servers = useRef(null);

    const autoRenewClick = () => {
        if (autoRenewDomain){
            setAutoRenewDomain(false);
        }else{
            setAutoRenewDomain(true);
        }
    }

    const autoRenewIDClick = () => {
        if (autoRenewID){
            setAutoRenewID(false);
        }else{
            setAutoRenewID(true);
        }
    }

    const DnshandleChanged = (e) => {
        const { name, value } = e.target;

        setFormDNS({...formDNS, [name]: value});
    }

    const nameserverChanged = (e) => {
        setDns(e.currentTarget.value);
        setDnsOptionChanged(true);
    }

    const dnsCancelClicked = () => {
        setDnsOptionChanged(false);
        setDns("iruhost");
        servers.current.value = "iruhost";
    }

    let dnsToSend = formDNS;

    const serversSubmitted = async () => {

        setDnsChangeClicked(true);

        if (servers.current.value === 'iruhost'){
            dnsToSend = {
                nameserver1: "",
                nameserver2: "",
                nameserver3: "",
                nameserver4: "",
                nameserver5: "ns1.iruhost.com",
                nameserver6: "ns2.iruhost.com",
                domain: mainDomain,
                dnsProvide: "iruhost"
            };
        }

        try{
            let url = "https://backend.iruhost.com/api/update-dns";

            const response = await axios.post(url, dnsToSend, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            console.log(response.data);
            if (response.data.msg === 'success'){
                setDns("iruhost");
                setMessage(true);
                setMessageText(response.data.value);
            }else{
                setMessage(true);
                setMessageText(response.data.value);
                setDns("iruhost");
            }
            setTimerStart(true);
            setDnsChangeClicked(false);
        }catch(error){
            console.log("Error updating DNS: ", error);
        }
    }

    useEffect(() => {
        if (timerStart) {
            const timer = setTimeout(() => {
                setDnsOptionChanged(false);
                setDns("iruhost");
                setMessage(false);
                if (servers.current) {
                    servers.current.value = "iruhost";
                }
                setTimerStart(false);
            }, 10000); 

            return () => clearTimeout(timer);
        }
    }, [timerStart]);

    const recordChanged = (e) => {
        const { name, value } = e.target;

        setHostForm({...hostForm, [name]: value});
    }

    const hostSubmitted = async () => {

        let url = "https://backend.iruhost.com/api/update-host";

        if (hostForm.host === "" || hostForm.type === "" || hostForm.value === ""){
            setError("Complete atleast the first row");
            return;
        }


        try{

            const response = await axios.post(url, hostForm, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            if(response.data.msg === 'success'){
                setUpdateRecords(true);
                setHostForm({
                    type: '',
                    host: '',
                    value: '',
                    type2: '',
                    host2: '',
                    value2: '',
                    domain: mainDomain,
                })
            }
        }catch(error){
            console.log("Error adding Host Record: ", error);
        }
    }

    useEffect(() => {

        if (!mainDomain) return;
        
        async function getHostRecords(){
            try {
                let url = "https://backend.iruhost.com/api/get-host";

                const response = await axios.post(url, {domain: mainDomain}, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true
                })

                if (response.data.status === 'success'){
                    setRecords(response.data.response);
                }
            } catch (error) {
                console.log("Error retrieving host records: ", error);
            }
        }

        async function getDomainDetails(){
            try {
                let url = "https://backend.iruhost.com/api/get-domain-details";

                const response = await axios.post(url, {domain: mainDomain}, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true
                })

                if (response.data.msg === 'success'){
                    setExpirationDate(response.data.value.expiration);
                    setRegistrationDate(response.data.value.registration);
                    setDomainStatus(response.data.value.status);
                }
            } catch (error) {
                console.log("Error retrieving domain details: ", error);
            }
        }

        if (updateRecord){
            getHostRecords();
        }

        getHostRecords();
        getDomainDetails();
    },[updateRecord, mainDomain])

    const truncate = (str, max) => str.length > max ? str.slice(0, max) + '...' : str;

    return ( 
        <>
        <div className="h-max w-full min-h-screen">
            <div className="h-max w-full flex justify-between items-center mb-3 border-b border-grey py-2">
                <div className="h-max w-1/4">
                    <h3 className="w-max text-base bg-grey p-1">Status & Validity</h3>
                </div>
                <div className="h-max w-1/4 flex items-center gap-2 text-base">
                    <i className={`fa 
                        ${domainStatus === "Active" ? "fa-check-circle text-green-500" : "fa-times text-danger"}
                        `}></i>
                    <h3>{domainStatus}</h3>
                </div>
                <div className="h-max w-1/4">
                    <h3 className="text-base">{registrationDate} - {expirationDate}</h3>
                </div>
                <div className="h-max w-1/4 flex items-center justify-center flex-col gap-2">
                    <h3 className="text-sm">Auto Renew</h3>
                    <button type="button" onClick={autoRenewClick} className={`h-[24px] w-[44px] cursor-pointer border transition-all duration-300 rounded-full relative
                        ${autoRenewDomain ? "bg-primary" : "bg-grey"}
                        `}>
                        <span className={`absolute top-[1px] h-[20px] w-[20px] bg-accent rounded-full transition-all duration-300
                            ${autoRenewDomain ? "left-42px" : "left-[1px]"}
                            `}></span>
                    </button>
                </div>
            </div>
            <div className="h-max w-full flex justify-between items-center mb-3 border-b border-grey py-2">
                <div className="h-max w-1/4 flex items-start justify-start flex-col">
                    <h3 className="text-base">ID Protect</h3>
                    <Link href="/" className="text-sm underline text-grey">Learn More</Link>
                </div>
                <div className="h-max w-1/4 flex items-center gap-2 text-base">
                    <i className="fa fa-check-circle text-green-500"></i>
                    <h3>Active</h3>
                </div>
                <div className="h-max w-1/4">
                    <h3 className="text-base">Oct. 12, 2025 - Oct. 12, 2026</h3>
                </div>
                <div className="h-max w-1/4 flex items-center justify-center flex-col gap-2">
                    <h3 className="text-sm">Auto Renew</h3>
                    <button type="button" onClick={autoRenewIDClick} className={`h-[24px] w-[44px] cursor-pointer border transition-all duration-300 rounded-full relative
                        ${autoRenewID ? "bg-primary" : "bg-grey"}
                        `}>
                        <span className={`absolute top-[1px] h-[20px] w-[20px] bg-accent rounded-full transition-all duration-300
                            ${autoRenewID ? "left-42px" : "left-[1px]"}
                            `}></span>
                    </button>
                </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="h-max w-full flex justify-between items-center mb-3 border-b border-grey py-2">
                <div className="h-max w-1/4">
                    <label htmlFor="nameservers" className="w-max text-base bg-grey p-1">Nameservers</label>
                </div>
                <div className="h-max w-1/4 flex flex-col items-start gap-2 text-base">
                    <select name="nameserver" ref={servers} onChange={nameserverChanged} id="nameserver" className="mb-3 border-none outline-none">
                        <option value="iruhost">Iruhost DNS</option>
                        <option value="custom">Custom DNS</option>
                    </select>
                    <div className={`h-max
                        ${dns === "iruhost" ? "hidden" : "block"}
                        `}>
                        <input type="text" name="nameserver1" value={formDNS.nameserver1} onChange={DnshandleChanged} className="h-5 w-full mb-3 border-b border-dotted border-grey outline-none p-2" placeholder="nameserver 1" />
                        <input type="text" name="nameserver2" value={formDNS.nameserver2} onChange={DnshandleChanged} className="h-5 w-full mb-3 border-b border-dotted border-grey outline-none p-2" placeholder="nameserver 2" />
                        <input type="text" name="nameserver3" value={formDNS.nameserver3} onChange={DnshandleChanged} className="h-5 w-full mb-3 border-b border-dotted border-grey outline-none p-2" placeholder="nameserver 3" />
                        <input type="text" name="nameserver4" value={formDNS.nameserver4} onChange={DnshandleChanged} className="h-5 w-full mb-3 border-b border-dotted border-grey outline-none p-2" placeholder="nameserver 4" />
                        <input hidden type="text" name="nameserver5" value={formDNS.nameserver5} onChange={DnshandleChanged} className="h-5 w-full mb-3 border-b border-dotted border-grey outline-none p-2" placeholder="nameserver 5" />
                        <input hidden type="text" name="nameserver6" value={formDNS.nameserver6} onChange={DnshandleChanged} className="h-5 w-full mb-3 border-b border-dotted border-grey outline-none p-2" placeholder="nameserver 6" />
                    </div>
                    <div className="h-max text-sm text-grey">
                        <p className={`
                            ${message ? "" : "hidden"}
                            `}>{messageText}. It will take between one minute and five working days for DNS to update.</p>
                    </div>
                </div>
                <div className="h-max w-1/4">
                    <div className={`h-max w-full flex gap-2 items-center justify-end
                        ${dnsOptionChanged ? "block" : "hidden"}
                        `}>
                        <div className={`h-5 w-5
                            ${dnsChangeClicked ? "relative" : "hidden"}
                            `}>
                            <Loading />
                        </div>
                        <button type="submit" onClick={serversSubmitted} className="h-max w-max cursor-pointer text-green-500 text-xl"><i className="fa fa-check"></i> </button>
                        <button type="button" onClick={dnsCancelClicked} className="h-max w-max cursor-pointer text-danger text-xl"><i className="fa fa-times"></i> </button>
                    </div>
                </div>
                <div className="h-max w-1/4 flex items-center justify-center flex-col gap-2">
                    
                </div>
            </form>
            <form onSubmit={(e) => e.preventDefault()} className="h-max w-full flex justify-between items-center mb-3 border-b border-grey py-2">
                <div className="h-max w-1/4">
                    <h3 className="w-max text-base bg-grey p-1">Host Records</h3>
                </div>
                <div className="h-max w-3/4">
                    <div className="h-max table-fixed w-full">
                        <table className="h-max w-full">
                            <thead className="h-max w-full py-2">
                                <tr>
                                    <th className="text-start text-sm px-3 py-2">Type</th>
                                    <th className="text-start text-sm px-3 py-2">Host</th>
                                    <th className="text-start text-sm px-3 py-2">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    records.map((val, index) => (
                                        <tr key={index}>
                                            <td className="text-start text-sm px-3 py-2 w-[40%] truncate">{val.type}</td>
                                            <td className="text-start text-sm px-3 py-2 w-[30%] truncate">{val.name}</td>
                                            <td className="text-start text-sm px-3 py-2 w-[30%] truncate">{truncate(val.address, 20)}</td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td className="text-start text-sm px-3 py-2">
                                        <input onChange={recordChanged} name="type" value={hostForm.type} type="text" className="h-5 w-3/4 mb-3 border-b border-dotted border-grey outline-none p-2" />
                                    </td>
                                    <td className="text-start text-sm px-3 py-2">
                                        <input onChange={recordChanged} name="host" value={hostForm.host} type="text" className="h-5 w-3/4 mb-3 border-b border-dotted border-grey outline-none p-2" />
                                    </td>
                                    <td className="text-start text-sm px-3 py-2">
                                        <input onChange={recordChanged} name="value" value={hostForm.value} type="text" className="h-5 w-3/4 mb-3 border-b border-dotted border-grey outline-none p-2" />
                                    </td>
                                    <td className="text-start text-sm px-3 py-2">
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start text-sm px-3 py-2">
                                        <input onChange={recordChanged} name="type2" value={hostForm.type2} type="text" className="h-5 w-3/4 mb-3 border-b border-dotted border-grey outline-none p-2" />
                                    </td>
                                    <td className="text-start text-sm px-3 py-2">
                                        <input onChange={recordChanged} name="host2" value={hostForm.host2} type="text" className="h-5 w-3/4 mb-3 border-b border-dotted border-grey outline-none p-2" />
                                    </td>
                                    <td className="text-start text-sm px-3 py-2">
                                        <input onChange={recordChanged} name="value2" value={hostForm.value2} type="text" className="h-5 w-3/4 mb-3 border-b border-dotted border-grey outline-none p-2" />
                                    </td>
                                    <td className="text-start text-sm px-3 py-2">
                                    
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={hostSubmitted} className="text-base bg-green-500 text-accent py-1 px-3 rounded">
                            ADD
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </>
     );
}
 
export default Domain;