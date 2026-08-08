import { useEffect, useState, useRef } from 'react';
import { Send, Paperclip, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { useRouter } from "next/router";

export default function Unresolved() {

    const router = useRouter();
    const ticketId = router.isReady ? router.query.ticketId : null;

    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const [created, setCreated] = useState('');
    const [category, setCategory] = useState('');
    const [messages, setMessages] = useState([]);
    const [imageName, setImageName] = useState('');

    const imgRef = useRef(null);

    useEffect(() => {

        if (!ticketId) return;

        async function getTicket(){
            let url = "https://backend.iruhost.com/api/unresolved-tickets";

            try {
                const response = await axios.get(url, 
                    {
                        params: { ticket_id: ticketId },
                        headers: {
                            'Content-Type': 'application/json'
                        },withCredentials: true
                    }
                )

                if (response.data.status === 'success'){
                    const ticketData = response.data.message;
                    setTitle(ticketData.subject);
                    setStatus(ticketData.status);
                    setPriority(ticketData.priority);
                    setCreated(ticketData.created_at);
                    setCategory(ticketData.department);
                }
            }catch (error) {
            console.error("Error sending message:", error);
            }
        }

        async function fetchMessages() {
            let url = "https://backend.iruhost.com/api/get-support-chats";
            try {
                const response = await axios.get(url, {
                    params: { ticket_id: ticketId },
                    headers: {
                        'Content-Type': 'application/json'
                    },withCredentials: true
                });

                console.log(response.data);
                if (response.data.status === 'success'){
                    setMessages(response.data.message);
                }
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        }

        fetchMessages();
        getTicket();
    }, [ticketId]);

    const handleSend = async () => {
       
        let url = "https://backend.iruhost.com/api/post-support-message";

        const formData = new FormData();
        formData.append('ticket_id', ticketId);
        formData.append('message', message);
        if (image) formData.append('image', image);

        try {
            const response = await axios.post(url, formData,
                {
                    withCredentials: true
                }
            )
            console.log(response.data);

            if (response.data.status === 'success'){
                setMessage("");
                setImage(null);
                // Refresh messages
                const fetchUrl = "https://backend.iruhost.com/api/get-support-chats";
                try {
                    const fetchResponse = await axios.get(fetchUrl, {
                        params: { ticket_id: ticketId },
                        headers: {
                            'Content-Type': 'application/json'
                        },withCredentials: true
                    });
                    if (fetchResponse.data.status === 'success'){
                        setMessages(fetchResponse.data.message);
                    }
                } catch (error) {
                    console.error("Error fetching messages:", error);
                }
            }
        }catch (error) {
        console.error("Error sending message:", error);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const imageClicked = () => {
        document.getElementById('fileInput').click();
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
            {/* Ticket Header */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                    <span className="text-sm font-medium text-gray-500"></span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Created {created}
                    </span>
                    <span>•</span>
                    <span>{category}</span>
                </div>
                </div>
                <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    status === 'open' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                    {status === 'unresolved' ? (
                    <span className="flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        Unresolved
                    </span>
                    ) : (
                    <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        Resolved
                    </span>
                    )}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    priority === 'high'
                    ? 'bg-red-100 text-red-700'
                    : priority === 'medium'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
                </span>
                </div>
            </div>
            </div>

            {/* Conversation Area */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col" style={{ height: '600px' }}>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, id) => (
                <div
                    key={id}
                    className={`flex gap-3 ${msg.sender !== 'admin' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 ${
                    msg.sender !== 'admin' ? 'bg-blue-600' : 'bg-purple-600'
                    }`}>
                        {msg.avatar}
                    </div>
                    <div className={`flex flex-col max-w-xl ${msg.sender !== 'admin' ? 'items-end' : 'items-start'}`}>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-gray-900">{msg.sender}</span>
                            <span className="text-xs text-gray-500">{msg.created_at}</span>
                        </div>
                        <div className={`rounded-lg px-4 py-3 ${
                            msg.sender === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                            <p className="text-sm leading-relaxed">{msg.message}</p>
                            {msg.image ? <img src={`https://backend.iruhost.com/uploads/${msg.image}`} alt="attachment" className="mt-2 max-w-xs rounded-lg" /> : null}
                        </div>
                    </div>
                </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4">
                <div className="flex gap-2">
                    <input type="file" id="fileInput" name="image" onChange={(e) => {setImage(e.target.files[0]); setImageName(e.target.files[0].name)}} ref={imgRef} hidden />
                    <button onClick={imageClicked} className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        <Paperclip className="w-5 h-5" />
                    </button>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 resize-none border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="2"
                    />
                    <button
                        onClick={handleSend}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium"
                    >
                        <Send className="w-4 h-4" />
                        Send
                    </button>
                </div>
                <p className="text-base mt-2">{imageName}</p>
                <p className="text-xs text-gray-500 mt-2">Press Enter to send, Shift+Enter for new line</p>
            </div>
            </div>
        </div>
        </div>
    );
}