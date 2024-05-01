import ButtonLink from "./ButtonLink";

export default function DynamicListSection({
  title,
  content,
  linkText,
  path,
  renderItem,
}) {
  return (
    <>
      <section className="news-section flex flex-col justify-between  bg-stone-200 p-12 md:flex-row">
        <div className="flex-item-1 flex flex-row items-center justify-between md:items-start">
          <h3 className="mb-10 font-montserrat text-[24px] font-medium">
            {title}
          </h3>
          <div className="all-news-link-top pb-7 md:hidden">
            <ButtonLink buttonName={linkText} path={path} />
          </div>
        </div>
        <div className="flex-item-2 text-base md:w-2/4">
          <ul className="divide-y-[2px] divide-gray-400 border-t-[2px] border-gray-400">
            {content.map((item) => (
              <li key={item.id}>{renderItem(item)}</li>
            ))}
          </ul>

          <div className="all-news-link-bottom hidden pt-7 md:block">
            <ButtonLink buttonName={linkText} path={path} />
          </div>
        </div>
      </section>
    </>
  );
}
