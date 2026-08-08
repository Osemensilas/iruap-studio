import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

export default function WebAppDetail({ app }) {

  const router = useRouter();

    const searchParams = useSearchParams();
    const productId = searchParams.get('product_id');

    const [added, setAdded] = useState(false);
    const [features, setFeatures] = useState([]);
    const [products, setProducts] = useState([]);
    const [stack, setStack] = useState([]);

    useEffect(() => {
        if (!productId) return;

        async function getProduct() {
            try{
                let url = "https://backend.iruhost.com/api/get-web-app";

                const response = await axios.get(url, {
                    params: {
                        productId: productId
                    },
                    headers: {
                        "Content-Type" : "application/json"
                    },withCredentials: true
                })
                
                console.log(response.data);

                setProducts(response.data.result);
                setStack(response.data.stack);
                setFeatures(response.data.features);
            }catch(error){
                console.log("Error fetching error: ", error);
            }
        }

        getProduct();
    },[productId])

  // Fallback demo data — replace with real props
  const product = app || {
    web_id: "1",
    web_name: "ShopFlow Pro",
    category: "E-commerce",
    price: "85000",
    old_price: "120000",
    description:
      "A fully responsive e-commerce web application built for modern businesses. Features seamless product management, cart functionality, secure checkout, and an intuitive admin dashboard — ready to launch.",
    image: "",
    url: "https://demo.example.com",
    version: "v2.4.1",
    last_updated: "Apr 2025",
    license: "Single Use",
    delivery: "Instant Download",
    pages: "18+ screens",
    tech_stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    features: [
      "Full source code & documentation",
      "Admin dashboard with analytics",
      "Payment gateway integration",
      "6 months free support",
      "Lifetime updates",
    ],
    reviews: [
      { name: "Chukwudi A.", rating: 5, text: "Clean code, great documentation. Set it up in under 2 hours." },
      { name: "Fatima K.", rating: 4, text: "The admin panel is exactly what I needed. Support team was very helpful." },
      { name: "Emeka O.", rating: 4.5, text: "Worth every naira. Stripe integration worked flawlessly." },
    ],
  };

  const handleAddToCart = async () => {
    
    try {
      const url = "https://backend.iruhost.com/api/add-website-to-cart";

      const response = await axios.post(url, {"website": productId}, {
        headers: {
          "Content-Type" : "application/json"
        },withCredentials: true
      })

      console.log(response.data);

      if (response.data.status === "success"){
        setAdded(true);
        router.push("/cart");
      }
    } catch (error) {
      console.log("Error adding to cart: ", error);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      const filled = i < Math.floor(rating);
      const half = !filled && i < rating;
      return (
        <span
          key={i}
          className={`text-sm ${filled || half ? "text-primary" : "text-[#1e2a3d]"}`}
        >
          {half ? "★" : filled ? "★" : "☆"}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen bg-[#111827] text-white font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 pb-20">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#c0c0c0] mb-8">
          <Link href="/" className="hover:text-primary transition-colors">{products.category}</Link>
          <span className="text-primary">›</span>
          <Link href="/category" className="hover:text-primary transition-colors">{products.sub_category}</Link>
          <span className="text-primary">›</span>
          <span className="text-primary truncate max-w-[160px]">{products.web_name}</span>
        </nav>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — Image */}
          <div className="rounded-lg overflow-hidden border border-[#1e2a3d] bg-[#0d1421]">
            <div className="relative">
              <div className="absolute top-3 left-3 z-10 bg-primary text-black text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                Featured
              </div>
                <img
                src={`https://backend.iruhost.com/uploads/${products.image}`}
                alt={products.web_name}
                fill
                className="object-cover w-full h-[280px]"
              />
            </div>
            {/* Thumbnail strip */}
            {/* <div className="flex gap-2 p-3 bg-[#0d1421]">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`w-14 h-10 rounded border transition-colors duration-200 bg-[#1a2540] flex-shrink-0 ${
                    activeThumb === i ? "border-primary" : "border-[#1e2a3d]"
                  }`}
                />
              ))}
            </div> */}
          </div>

          {/* RIGHT — Info */}
          <div className="flex flex-col gap-5">

            {/* Category + Title */}
            <div>
              <p className="text-primary text-[10px] tracking-widest uppercase mb-1">{products.category}</p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">{products.web_name}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(4.5)}</div>
              <span className="text-[12px] text-[#c0c0c0]">4.5 · 128 reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-medium text-primary">
                ₦{Number(products.price).toLocaleString()}
              </span>
              {products.old_price && (
                <span className="text-sm text-[#c0c0c0] line-through font-light">
                  ₦{Number(product.old_price).toLocaleString()}
                </span>
              )}
            </div>

            <div className="h-px bg-[#1e2a3d]" />

            {/* Description */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#c0c0c0] mb-2">Description</p>
              <div className="text-sm text-[#aabcd8] leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: products.description }}></div>
            </div>

            {/* Features */}
            {features?.length > 0 && (
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#c0c0c0] mb-2">What's included</p>
                <ul className="flex flex-col gap-1.5">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[13px] text-[#aabcd8] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {stack?.length > 0 && (
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#c0c0c0] mb-2">Tech stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {stack.map((tech, index) => (
                      <span key={index} className="text-[11px] px-2.5 py-1 border border-[#1e2a3d] rounded-sm text-[#c0c0c0] bg-[#0d1421] tracking-wide">{tech}</span>
                    ))}
                </div>
              </div>
            )}

            {/* Meta Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { label: "Delivery", value: products.delivery_type },
                { label: "License", value: products.licence_type },
                { label: "Last Updated", value: product.last_updated },
                { label: "Version", value: products.version },
              ].map((meta) => (
                <div
                  key={meta.label}
                  className="bg-[#0d1421] border border-[#1e2a3d] rounded-md px-3 py-2.5"
                >
                  <p className="text-[10px] uppercase tracking-widest text-[#c0c0c0] mb-0.5">{meta.label}</p>
                  <p className="text-[13px] text-white font-medium">{meta.value}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5 pt-1">
              <button
                onClick={handleAddToCart}
                className={`flex items-center justify-center gap-2 py-3.5 px-5 rounded text-[13px] font-semibold uppercase tracking-widest transition-all duration-200 ${
                  added
                    ? "bg-[#b8942d] text-black"
                    : "bg-primary text-black hover:bg-[#c09c25] hover:-translate-y-0.5"
                }`}
              >
                {added ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Add to Cart
                  </>
                )}
              </button>

              <a
                href={products.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-5 border border-white/20 rounded text-[13px] text-white hover:border-primary hover:text-primary transition-all duration-200"
              >
                Live Demo
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              {added && (
                <p className="text-center text-[12px] text-primary animate-pulse">
                  ✓ Added to cart successfully
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">

          {/* Specifications */}
          <div className="bg-[#0d1421] border border-[#1e2a3d] rounded-lg p-5">
            <h2 className="font-semibold text-lg text-white mb-4 pb-3 border-b border-[#1e2a3d]">
              Specifications
            </h2>
            {[
              { key: "Category", val: products.category },
              { key: "Pages", val: products.page },
              { key: "Mobile Responsive", val: "Yes" },
              { key: "Browser Support", val: "All modern" },
              { key: "Database", val: products.database_type },
              { key: "Auth", val: products.auth },
            ].map((row, i, arr) => (
              <div
                key={row.key}
                className={`flex justify-between items-center py-2 text-[12.5px] ${
                  i < arr.length - 1 ? "border-b border-[#1e2a3d]" : ""
                }`}
              >
                <span className="text-[#c0c0c0]">{row.key}</span>
                <span className="text-white font-medium">{row.val}</span>
              </div>
            ))}
          </div>

          {/* Reviews */}
          <div className="bg-[#0d1421] border border-[#1e2a3d] rounded-lg p-5">
            <h2 className="font-semibold text-lg text-white mb-4 pb-3 border-b border-[#1e2a3d]">
              Reviews
            </h2>
            <div className="flex flex-col">
              {product.reviews?.map((review, i, arr) => (
                <div
                  key={i}
                  className={`py-3 ${i < arr.length - 1 ? "border-b border-[#1e2a3d]" : ""}`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[13px] font-medium text-white">{review.name}</span>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                  <p className="text-[12.5px] text-[#aabcd8] leading-relaxed font-light">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}