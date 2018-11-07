export default class ReviewsController {
  constructor(router) {
    router.get("/favorable", this.getMostFavReviews);
  }

  async getMostFavReviews(req, res) {
    const reviews = [
      "Best freaking site ever",
      "I Love it so much",
      "This is an amazing website!",
      "I love their values!",
      "They truly care about you.",
      "I would give them all my money!"
    ];
    const random = Math.floor(Math.random() * reviews.length);
    console.log("This is a random number", random);
    res.send({ message: reviews[random] });
  }
}
