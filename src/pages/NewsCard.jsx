import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  return (
    <div className="card bg-base-100 shadow-md border border-base-300">
      {/* top section */}
      <div className="flex items-center justify-between bg-base-200 p-4 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={author.img}
            alt={author.name}
          />

          <div>
            <h2 className="font-bold">{author.name}</h2>

            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xl text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* body */}
      <div className="p-5 space-y-4">
        <h2 className="text-2xl font-bold leading-snug">{title}</h2>

        <img className="w-full rounded-xl" src={thumbnail_url} alt={title} />

        <p className="text-gray-600">
          {details.slice(0, 200)}...
          <span className="text-secondary font-semibold cursor-pointer ml-1">
            Read More
          </span>
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline badge-secondary">
              {tag}
            </span>
          ))}
        </div>

        {/* footer */}
        <div className="flex items-center justify-between pt-4 border-t border-base-300">
          {/* rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400 gap-1">
              {[...Array(rating.number)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <span className="font-semibold">{rating.number}</span>
          </div>

          {/* views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
