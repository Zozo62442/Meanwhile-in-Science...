import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';

interface ArticleCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  readTime: string;
  date: string;
  excerpt?: string;
  featured?: boolean;
}

const ArticleCard = ({ 
  id, 
  title, 
  category, 
  image, 
  readTime, 
  date, 
  excerpt,
  featured = false 
}: ArticleCardProps) => {
  return (
    <Link to={`/article/${id}`} className="group block">
      <article className="card-hover bg-surface-overlay rounded-lg overflow-hidden shadow-md">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="mb-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-text-muted">
              {category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-4 leading-tight">
            {title}
          </h3>
          
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-text-muted text-sm">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;