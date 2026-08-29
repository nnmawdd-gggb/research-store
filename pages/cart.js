import Head from 'next/head'
import Link from 'next/link'
import { useStore } from '../store/store'

export default function Cart() {
  const { cart, removeFromCart, checkout } = useStore()
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <>
      <Head>
        <title>السلة - متجر الأبحاث</title>
      </Head>

      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold hover:text-blue-200">📚 متجر الأبحاث</Link>
          <span className="text-lg">🛒 السلة ({cart.length})</span>
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">سلة التسوق</h2>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">السلة فارغة</p>
            <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">
              العودة للمتجر
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border">
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.price} ريال</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    حذف
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8 border-2 border-blue-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">المجموع:</span>
                <span className="text-2xl font-bold text-blue-600">{total} ريال</span>
              </div>
              <button
                onClick={checkout}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition"
              >
                ✓ إتمام الشراء
              </button>
            </div>

            <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold">
              ← العودة للمتجر
            </Link>
          </>
        )}
      </section>
    </>
  )
}