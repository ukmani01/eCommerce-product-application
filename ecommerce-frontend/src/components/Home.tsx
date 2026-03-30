import img0 from "../ok/img.png"
import img1 from "../ok/img1.png";

import img2 from "../ok/img2.png";
import img3 from "../ok/im3.png";
import img4 from "../ok/img4.png";
import img5 from "../ok/img5.png";
import img6 from "../ok/img6.png";
import img7 from "../ok/img7.png";
import img8 from "../ok/img8.png";
import img9 from "../ok/img9.png";
import img10 from "../ok/img10.png";
import img11 from "../ok/img11.png";
import img12 from "../ok/img12.png";
import img13 from "../ok/img13.png";
import img14 from "../ok/img14.png";
type Product = {
    id: number;
    price: number;
    image: string;
    description: string;

}
const products: Product[] = [
    { id: 0, price: 299, image: img0, description: "Classic cotton t-shirt for daily comfort" },
    { id: 1, price: 499, image: img1, description: "Stylish casual wear shirt" },
    { id: 2, price: 799, image: img2, description: "Premium running shoes" },
    { id: 3, price: 999, image: img3, description: "Trendy denim jeans" },
    { id: 4, price: 699, image: img4, description: "Comfortable sports t-shirt" },
    { id: 5, price: 1299, image: img5, description: "Elegant wrist watch" },
    { id: 6, price: 1599, image: img6, description: "High-quality sneakers" },
    { id: 7, price: 399, image: img7, description: "Casual summer wear" },
    { id: 8, price: 899, image: img8, description: "Formal office shirt" },
    { id: 9, price: 1199, image: img9, description: "Stylish hoodie" },
    { id: 10, price: 1499, image: img10, description: "Modern jacket for winter" },
    { id: 11, price: 699, image: img11, description: "Comfortable daily wear pants" },
    { id: 12, price: 499, image: img12, description: "Trendy casual t-shirt" },
    { id: 13, price: 999, image: img13, description: "Smart casual shoes" },
    { id: 14, price: 1799, image: img14, description: "Premium branded sneakers" }
];

const Home: React.FC = () => {
    return (
        <div className="p-4 md:p-6">

            {/* Title */}
            <h1 className="text-xl md:text-2xl font-bold mb-4">
                Our Products
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                {products.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-2"
                    >

                        {/* Image */}
                        <img
                            src={item.image}
                            alt=""
                            className="w-full h-32 sm:h-40 md:h-44 object-cover rounded"
                        />

                        {/* Description */}
                        <p className="text-sm mt-2 line-clamp-2">
                            {item.description}
                        </p>

                        {/* Price + Button */}
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-green-600 font-bold text-sm md:text-base">
                                ₹{item.price}
                            </span>

                            <button className="bg-black text-white text-xs md:text-sm px-2 py-1 rounded hover:bg-gray-800">
                                Add
                            </button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default Home;