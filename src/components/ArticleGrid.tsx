import ArticleCard from './ArticleCard';
import designTools from '@/assets/design-tools.jpg';
import pinterestBoard from '@/assets/pinterest-board.jpg';
import editorialLayout from '@/assets/editorial-layout.jpg';
import blogCake from '@/assets/blog-cake.jpg';

const ArticlesGrid = () => {
  const articles = [
    {
      id: '1',
      title: 'Typography is all around us. Let\'s enjoy it & get inspired',
      category: 'DESIGN TIPS',
      image: designTools,
      readTime: '5 mins',
      date: 'Oct 07, 2024'
    },
    {
      id: '2',
      title: 'Pinterest keyword searches that will help your design activities',
      category: 'DESIGN TIPS',
      image: pinterestBoard,
      readTime: '4 mins',
      date: 'Oct 05, 2024'
    },
    {
      id: '3',
      title: 'Learn design tool is difficult when you focus on each features',
      category: 'DESIGN TIPS',
      image: editorialLayout,
      readTime: '6 mins',
      date: 'Oct 03, 2024'
    },
    {
      id: '4',
      title: 'Instagram accounts that are doing very well with their feed',
      category: 'DESIGN TIPS',
      image: blogCake,
      readTime: '3 mins',
      date: 'Oct 01, 2024'
    },
    {
      id: '5',
      title: 'Some website design exploration using the Poppins font',
      category: 'DESIGN TIPS',
      image: designTools,
      readTime: '5 mins',
      date: 'Sep 28, 2024'
    },
    {
      id: '6',
      title: 'Editorial layout inspirations that can be applied to projects',
      category: 'DESIGN TIPS',
      image: pinterestBoard,
      readTime: '7 mins',
      date: 'Sep 25, 2024'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              {...article}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesGrid;