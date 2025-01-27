import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Simple Ways to Reduce Your Carbon Footprint",
      excerpt:
        "Discover practical tips for reducing your environmental impact in your daily life.",
      author: "Emma Green",
      date: "2024-03-15",
      category: "Eco-Friendly Living",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    },
    {
      title: "Understanding Carbon Offset Programs",
      excerpt:
        "Learn how carbon offset programs work and their impact on climate change.",
      author: "David Chen",
      date: "2024-03-12",
      category: "Carbon Offsetting",
      image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
    },
    {
      title: "The Future of Renewable Energy",
      excerpt:
        "Explore the latest innovations in renewable energy technology and their potential.",
      author: "Sarah Johnson",
      date: "2024-03-10",
      category: "Renewable Energy",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    },
    {
      title: "Sustainable Living: A Beginner's Guide",
      excerpt:
        "Start your journey to a more sustainable lifestyle with these essential tips.",
      author: "Michael Brown",
      date: "2024-03-08",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    },
  ];

  const categories = [
    "All",
    "Eco-Friendly Living",
    "Carbon Offsetting",
    "Renewable Energy",
    "Sustainability",
    "Climate Action",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-primary-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Blog
              </h1>
              <p className="text-xl text-gray-600">
                Stay updated with the latest insights, tips, and news about
                sustainability and climate action.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-sm text-primary-600">
                        <Tag className="w-4 h-4 mr-1" />
                        {post.category}
                      </span>
                      <Button variant="link" className="text-primary-600">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;