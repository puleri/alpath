import { reviewSummary } from '@/lib/reviews';

const MAX_STARS = 5;

const STAR_ROW = '★★★★★';

export default function ReviewRating({
  averageScore = reviewSummary.averageScore,
  totalReviews = reviewSummary.totalReviews,
}) {
  const normalizedScore = Math.max(0, Math.min(MAX_STARS, averageScore));
  const displayScore = normalizedScore.toFixed(1);
  const starFill = `${(normalizedScore / MAX_STARS) * 100}%`;

  return (
    <div
      className="review-rating"
      aria-label={`${displayScore} out of ${MAX_STARS} stars from ${totalReviews} reviews`}
    >
      <span className="review-rating-stars" aria-hidden="true">
        <span className="review-rating-stars-empty">{STAR_ROW}</span>
        <span
          className="review-rating-stars-fill"
          style={{ '--star-fill': starFill }}
        >
          {STAR_ROW}
        </span>
      </span>
      <span className="review-rating-meta">
        <span className="review-rating-score">{displayScore}</span>
        <span className="review-rating-count">({totalReviews})</span>
      </span>
    </div>
  );
}
