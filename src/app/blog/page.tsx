import BlogSection from "@/components/BlogSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <BlogSection />
      </main>
      <Footer />
    </>
  );
} 