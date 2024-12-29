import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Pançam](https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/9ab54de9-4479-4471-a3a8-79ce4d162c90/Leonardo_Anime_XL_a_Shinto_Japanese_temple_in_a_hilly_mountain_1.jpg)


Hey there! I'm Pançam Barman (Pancham Barman), a 20-year-old student.

This blog is where I'll be documenting my work in the research field.
`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Samantha and her travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Samantha and her travel adventures",
      images: [
        signOgImageUrl({
          title: "Samantha",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown className="markdown">{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
