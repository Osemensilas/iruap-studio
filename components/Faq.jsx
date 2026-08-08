const FAQs = () => {

    const frequentClicked = (e) => {
        let dropDown = e.currentTarget;
        let dropDownAnswer = dropDown.parentElement.parentElement.children[0].children[1];
        
        if (dropDown.classList.contains('active')){
            dropDown.classList.remove('active');
            dropDownAnswer.classList.remove('active');
        }else{
            dropDown.classList.add('active');
            dropDownAnswer.classList.add('active');
        }
    }

    const faqs = [
    {
      question: "How do I register a domain with IruHost?",
      answer: "Simply use our domain search tool above, choose your preferred domain name, and follow the prompts to complete your registration.",
    },
    {
      question: "Can I transfer my existing domain to IruHost?",
      answer: "Yes! Click the 'Transfer' button, enter your domain, and follow the instructions. Our support team can assist if you need help.",
    },
    {
      question: "Is SSL included with all hosting plans?",
      answer: "Absolutely. Every hosting plan comes with a free SSL certificate to keep your site secure.",
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, our expert support team is available 24/7 to help you with any issues or questions.",
    },
    {
      question: "Can I upgrade my hosting plan later?",
      answer: "You can upgrade your plan at any time as your business grows. No hidden fees or downtime.",
    },
  ];
     

    return ( 
        <>
        <section id="frequently">
        <header className="frequently-header">
          <h2>Frequently asked questions</h2>
        </header>
        <div className="frequently-container">
            {
                faqs.map((faq, index) => (
                    <div key={index} className="frequent-question">
                        <div className="frequent-question-left">
                            <h2>{faq.question}</h2>
                            <div className="frequequent-question-left-content">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                        <div className="frequent-question-right">
                            <div onClick={frequentClicked} className="frequent-drop-down-container">
                                <i className="fa fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </section>
        </>
     );
}
 
export default FAQs;