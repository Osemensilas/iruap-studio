import { useEffect } from "react";

const Scroller = () => {

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
    
        if (!window.matchMedia("(prefers-reduced-motio: reduce)").matches) {
            addAnimation();
        }
    
        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);
    
                const scrollerInner = document.querySelector(".scroller_inner");
                const scrollerContent = Array.from(scrollerInner.children);
    
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    },[])

    return ( 
        <>
        <section id="scroller-website">
            <div className="scroller" data-direction="left">
                <ul className="tag-list scroller_inner">
                    <li>
                        <a href="https://www.enermillpower.com/" target="_blank" className="h-[400px] w-[600px] flex">
                            <div className="system-img-container">
                                <img src="/website/enermillpower.png" alt="Enermill Power" className="system-img scroller-img" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://bakar-x.com" target="_blank" className="h-[400px] w-[600px] flex">
                            <div className="system-img-container">
                                <img src="/website/bakar-x.png" alt="bakar-x" className="system-img scroller-img flex" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.palmhavenhotel.com/" target="_blank" className="h-[400px] w-[600px] flex">
                            <div className="system-img-container">
                                <img src="/website/palm-haven.png" alt="palm haven hotel" className="system-img scroller-img" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://blissfullhomes.co.uk/" target="_blank" className="h-[400px] w-[600px] flex">
                            <div className="system-img-container">
                                <img src="/website/bliss-homes.png" alt="blissful homes" className="system-img scroller-img" />
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        </>
     );
}
 
export default Scroller;