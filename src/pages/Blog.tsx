import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, User, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/components/BlogPost";

const Blog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const blogPosts = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    title: `${["10 Simple Ways to Reduce Your Carbon Footprint", "Understanding Carbon Offset Programs", "The Future of Renewable Energy", "Sustainable Living: A Beginner's Guide", "Climate Change Impact on Ecosystems", "Zero Waste Living Tips", "Green Technology Innovations", "Sustainable Transportation Solutions"][index % 8]} ${Math.floor(index / 8) + 1}`,
    excerpt: [
      "Discover practical tips for reducing your environmental impact in your daily life.",
      "Learn how carbon offset programs work and their impact on climate change.",
      "Explore the latest innovations in renewable energy technology and their potential.",
      "Start your journey to a more sustainable lifestyle with these essential tips.",
      "Understanding the effects of climate change on global ecosystems.",
      "Practical tips for reducing waste in your daily life.",
      "Exploring cutting-edge sustainable technologies.",
      "Eco-friendly transportation alternatives for a greener future."
    ][index % 8],
    author: [
      "Emma Green",
      "David Chen",
      "Sarah Johnson",
      "Michael Brown",
      "Lisa Taylor",
      "James Wilson",
      "Maria Rodriguez",
      "Alex Thompson"
    ][index % 8],
    date: new Date(2024, 0, 1 + index).toISOString().split('T')[0],
    category: [
      "Eco-Friendly Living",
      "Carbon Offsetting",
      "Renewable Energy",
      "Sustainability",
      "Climate Action",
      "Zero Waste",
      "Green Technology",
      "Sustainable Transport"
    ][index % 8],
    image: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      "https://images.unsplash.com/photo-1498925008800-019c7d59d903",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      "https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318"
    ][index % 8]
  }));

  const categories = [
    "All",
    "Eco-Friendly Living",
    "Carbon Offsetting",
    "Renewable Energy",
    "Sustainability",
    "Climate Action",
    "Zero Waste",
    "Green Technology",
    "Sustainable Transport"
  ];

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handlePostClick = (postId: number) => {
    navigate(`/blog/${postId}`);
  };

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

            {/* Pagination */}
            <div className="mt-12 flex justify-center items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(num => {
                  if (totalPages <= 7) return true;
                  if (num === 1 || num === totalPages) return true;
                  if (num >= currentPage - 2 && num <= currentPage + 2) return true;
                  return false;
                })
                .map((number) => (
                  <Button
                    key={number}
                    variant={currentPage === number ? "default" : "outline"}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </Button>
                ))}

              <Button
                variant="outline"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                  onClick={() => handlePostClick(post.id)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        {post.category}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(num => {
                  if (totalPages <= 7) return true;
                  if (num === 1 || num === totalPages) return true;
                  if (num >= currentPage - 2 && num <= currentPage + 2) return true;
                  return false;
                })
                .map((number) => (
                  <Button
                    key={number}
                    variant={currentPage === number ? "default" : "outline"}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </Button>
                ))}

              <Button
                variant="outline"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;