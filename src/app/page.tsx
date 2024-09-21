import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Laptop, Smartphone, Headphones, ShoppingCart, User, ChevronDown, Monitor, Tablet, Camera, Watch, Tv, Gamepad } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function TechStoreLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="flex items-center justify-center" href="#">
            <Laptop className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">TechStore</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Products
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Deals
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Support
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to TechStore
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Discover the latest in technology. From smartphones to laptops, we've got you covered.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">Shop Now</Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Product Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Smartphones", icon: Smartphone, color: "text-blue-500" },
                { name: "Laptops", icon: Laptop, color: "text-green-500" },
                { name: "Audio", icon: Headphones, color: "text-purple-500" },
                { name: "Monitors", icon: Monitor, color: "text-red-500" },
                { name: "Tablets", icon: Tablet, color: "text-yellow-500" },
                { name: "Cameras", icon: Camera, color: "text-pink-500" },
                { name: "Smartwatches", icon: Watch, color: "text-indigo-500" },
                { name: "TVs", icon: Tv, color: "text-orange-500" },
                { name: "Gaming", icon: Gamepad, color: "text-teal-500" },
              ].map((category, index) => (
                <Link key={index} href="#" className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <category.icon className={`h-12 w-12 mb-2 ${category.color}`} />
                  <span className="text-sm font-medium text-gray-900">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Smartphone className="h-12 w-12 mb-2 text-blue-500" />
                <h3 className="text-xl font-bold">Latest Smartphones</h3>
                <p className="text-sm text-gray-500 text-center">Explore our collection of cutting-edge smartphones</p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">Shop Smartphones</Button>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Laptop className="h-12 w-12 mb-2 text-green-500" />
                <h3 className="text-xl font-bold">Powerful Laptops</h3>
                <p className="text-sm text-gray-500 text-center">Find the perfect laptop for work or play</p>
                <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white">Shop Laptops</Button>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Headphones className="h-12 w-12 mb-2 text-purple-500" />
                <h3 className="text-xl font-bold">Audio Accessories</h3>
                <p className="text-sm text-gray-500 text-center">Enhance your audio experience with our accessories</p>
                <Button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white">Shop Audio</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center space-y-4 text-center bg-white p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-blue-500" />
                  </div>
                  <p className="text-lg font-medium">"Great products and excellent service!"</p>
                  <p className="text-sm text-gray-500">John Doe, Verified Buyer</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is your return policy?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 30-day return policy for all our products. If you're not satisfied with your purchase, you can return it for a full refund within 30 days of delivery.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer international shipping to most countries. Shipping rates and delivery times vary depending on the destination. Please check our shipping page for more details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How can I track my order?</AccordionTrigger>
                  <AccordionContent>
                    Once your order is shipped, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's website.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer warranty on your products?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all our products come with a standard manufacturer's warranty. The duration of the warranty varies by product. Extended warranty options are also available for purchase.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                  <AccordionContent>
                    Our customer support team is available 24/7. You can reach us through email at support@techstore.com, by phone at 1-800-TECH-HELP, or through the live chat on our website.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for the latest tech news and exclusive deals.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2023 TechStore Inc. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link className="text-sm text-gray-400 hover:text-white hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-gray-400 hover:text-white hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}