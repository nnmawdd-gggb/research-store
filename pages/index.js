import Head from 'next/head'
import Link from 'next/link'
import { useStore } from '../store/store'
import ProductCard from '../components/ProductCard'

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>متجر الأبحاث - Research Store</title>
        <meta name="description" content="متجر متخصص في بيع الأبحاث العلمية" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">📚 متجر الأبحاث</h1>
          <Link href="/cart" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100">
            🛒 السلة
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">أفضل الأبحاث العلمية</h2>
          <p className="text-xl text-gray-600 mb-8">اكتشف مجموعة واسعة من الأبحاث الأكاديمية والعلمية</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-8 text-gray-900">المنتجات المتاحة</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 متجر الأبحاث - جميع الحقوق محفوظة</p>
          <p className="mt-2 text-gray-400">متخصصون في بيع الأبحاث العلمية والأكاديمية</p>
        </div>
      </footer>
    </>
  )
}

export async function getStaticProps() {
  const products = [
    { id: 1, title: 'بحث الذكاء الاصطناعي', price: 99, category: 'تقنية', image: '🤖' },
    { id: 2, title: 'بحث الاقتصاد الرقمي', price: 79, category: 'اقتصاد', image: '💹' },
    { id: 3, title: 'بحث الطب الحديث', price: 119, category: 'طب', image: '⚕️' },
    { id: 4, title: 'بحث التسويق الإلكتروني', price: 69, category: 'تسويق', image: '📱' },
    { id: 5, title: 'بحث العلوم البيئية', price: 89, category: 'بيئة', image: '🌱' },
    { id: 6, title: 'بحث الإدارة الحديثة', price: 74, category: 'إدارة', image: '📊' },
  ]
  return { props: { products } }
}