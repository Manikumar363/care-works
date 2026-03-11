import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PostSignupToast from "@/components/common/PostSignupToast";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="overflow-hidden">
      <Header />
      <PostSignupToast />
      <main className="pt-[85px] sm:pt-[100px] md:pt-[110px] lg:pt-[128px]">
      {children}
      </main>
      <Footer />
    </section>
  );
}
