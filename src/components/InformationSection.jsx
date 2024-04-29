import ButtonLink from "./ButtonLink";

/**
 * The InformationSection component renders a section with a title, description, images, and an optional link button.
 *
 * @param {Object} options - Options object for configuring the component.
 * @param {string} [options.title] - The title of the section.
 * @param {string} [options.description] - The description text to display.
 * @param {string} [options.image1] - The path to the first image to display.
 * @param {string} [options.image2] - The path to the second image to display.
 * @param {string} [options.linkText] - The text to display on the link button.
 * @param {string} [options.linkPath="/not-found"] - The path associated with the link button.
 * @param {boolean} [options.textFirst=true] - Determines if the version with text first or image first is rendered.
 * @returns {JSX.Element} The rendered InformationSection component.
 *
 * ![InformationSection example](/public/docsImages/informationSection.png)
 */

export default function InformationSection({
  title,
  description,
  image1,
  image2,
  textFirst,
  linkText,
  linkPath,
}) {
  return (
    <>
      {textFirst ? (
        <section className="WWD base grid-row-auto lg:grid-rows-auto grid grid-cols-6 gap-2  bg-stone-200 p-2 sm:gap-3 sm:p-7 lg:grid-cols-7 lg:gap-5">
          <h2 className="col-start-1 col-end-6 mb-4 font-montserrat text-2xl font-medium sm:col-end-4 lg:col-start-2 lg:col-end-4 lg:pt-10 lg:text-4xl">
            {title}
          </h2>
          <div className="what-we-do col-start-1 col-end-6 pb-16 sm:col-end-4 lg:col-start-3 lg:col-end-5 lg:pb-10">
            <p className=" mb-4 font-plexSerif text-base font-normal">
              {description}
            </p>
            <ButtonLink buttonName={linkText} path={linkPath} />
          </div>
          <div
            className="sm-row-start-1 col-start-1 col-end-3 row-start-4 row-end-6 h-64 bg-sand sm:col-start-6 sm:col-end-7 sm:row-start-2 sm:row-end-4 sm:h-80 lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-3 lg:h-auto"
            style={{
              backgroundImage: `url("${image1}")`,

              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="col-start-3 col-end-6 row-start-3 row-end-5 h-64 bg-sand sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-3 sm:h-auto lg:col-start-7 lg:col-end-8 lg:row-start-2 lg:row-end-4 lg:h-80"
            style={{
              backgroundImage: `url("${image2}")`,

              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </section>
      ) : (
        <section className="HIW base grid-row-auto lg:grid-rows-auto grid grid-cols-6 gap-2  bg-stone-200 p-2 sm:gap-3 sm:p-7 lg:grid-cols-7 lg:gap-5">
          <h2 className="col-start-2 col-end-7 mb-4 font-montserrat text-2xl font-medium sm:col-start-4 sm:col-end-7 sm:row-start-6 lg:col-start-5 lg:col-end-7 lg:row-start-4 lg:row-end-5 lg:pt-10 lg:text-4xl">
            {title}
          </h2>
          <div className="how-it-works col-start-2 col-end-7 pb-10 sm:col-start-4 sm:col-end-7 sm:row-start-7 lg:col-start-5 lg:col-end-7 lg:row-start-5 lg:row-end-6">
            <p className=" mb-4 font-plexSerif text-base font-normal">
              {description}
            </p>
            <ButtonLink buttonName={linkText} path={linkPath} />
          </div>
          <div
            className="col-start-2 col-end-4 row-start-9 row-end-11 hidden h-64 bg-sand sm:row-start-6 sm:row-end-8 sm:block lg:col-start-3 lg:col-end-5 lg:row-start-4 lg:row-end-6 lg:h-auto"
            style={{
              backgroundImage: `url("${image1}")`,

              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="sm:row-end-9col-end-7 col-start-4 row-start-10 row-end-12 hidden h-64 bg-sand pb-10 sm:col-start-1 sm:col-end-2 sm:row-start-7 sm:block lg:col-start-2 lg:col-end-3 lg:row-start-5 lg:row-end-7 lg:h-80"
            style={{
              backgroundImage: `url("${image2}")`,

              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </section>
      )}
    </>
  );
}
