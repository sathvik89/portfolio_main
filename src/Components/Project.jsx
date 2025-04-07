export default function Project({
  imageURL,
  Title,
  tech,
  desci,
  features,
  projectLink,
}) {
  return (
    <div className="project">
      <div className="image">
        <img src={imageURL} alt="" />
      </div>
      <div className="description">
        <h1>{Title}</h1>
        <p>
          {tech}
          <br />
          {desci}
          <br /> {features}
        </p>
      </div>
      <div className="projectlink">
        <a href={projectLink}>Project Link</a>
      </div>
    </div>
  );
}
{
  /* <Project
  imageURL={FoodRecipesImage}
  Title="FoodRecipe"
  tech="Tech Stacks: React, JavaScript, HTML, CSS ."
  desci="Description: Food Recipe Generator designed to provide users with
            detailed recipe information, including ingredients, step-by-step
            instructions, and cost per serving."
  features="Features: API Fetching , fetched recipe data via API and
            presented it in a clean, well-organized format.ensures a responsive,
            user-friendly experience with smooth functionality across devices."
  projectLink="https://food-recipe-six-lac.vercel.app"
/>; */
}
