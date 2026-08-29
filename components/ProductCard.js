import { useStore } from '../store/store'

export default function ProductCard({ product }) {
  const { addToCart } = useStore()

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-32 flex items-center justify-center text-6xl">
        {product.image}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">{product.price} ريال</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            🛒 أضف
          </button>
        </div>
      </div>
    </div>
  )
}