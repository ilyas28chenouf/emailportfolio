const StarRating = ({ averageRate }: { averageRate: number }) => {
  const fullStars = Math.floor(averageRate);
  const halfStar = averageRate % 1 >= 0.4 ? 0.5 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  const emptyFullStars = Math.floor(emptyStars);
  const emptyHalfStar = emptyStars % 1 >= 0.4 ? 0.5 : 0;

  return (
    <div className="flex gap-4 items-center">
      <h3 className="text-xl translate-y-0.5">{averageRate}</h3>
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="size-6 fill-(--text-primary) group-hover:fill-yellow-500"
            key={i}
          >
            <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
          </svg>
        ))}

        {halfStar === 0.5 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="size-6 fill-(--text-primary) group-hover:fill-yellow-500 mr-[3px]"
          >
            <path d="M336.1 71.6C336.1 60.5 328.5 50.9 317.7 48.3C306.9 45.7 295.8 50.8 290.7 60.7L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L323 480.1C331 476 336.1 467.7 336.1 458.7L336.1 71.6z" />
          </svg>
        ) : (
          ""
        )}

        {emptyHalfStar === 0.5 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="size-[25px] fill-(--border) -ml-[30px]"
            style={{ transform: "rotateY(180deg)" }}
          >
            <path d="M336.1 71.6C336.1 60.5 328.5 50.9 317.7 48.3C306.9 45.7 295.8 50.8 290.7 60.7L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L323 480.1C331 476 336.1 467.7 336.1 458.7L336.1 71.6z" />
          </svg>
        ) : (
          ""
        )}

        {[...Array(emptyFullStars)].map((_, i) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="size-[26px] fill-(--border)"
            key={i}
          >
            <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
