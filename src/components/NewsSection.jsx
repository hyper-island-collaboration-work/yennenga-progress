import ButtonLink from "./ButtonLink";

export default function NewsSection() {
  return (
    <section className="news-section flex flex-col justify-between bg-zinc-100 p-12 md:flex-row">
      <div className="flex-item-1 flex flex-row items-center justify-between md:items-start">
        <h3 className="mb-10 font-plexSerif text-2xl font-bold">News</h3>
        <div className="all-news-link-top pb-7 md:hidden">
          <a className="text-1xl font-plexSerif font-bold">All news</a>
        </div>
      </div>
      <div className="flex-item-2 text-base md:w-2/4">
        <ul className="divide-y-[2px] divide-gray-400 border-t-[2px] border-gray-400">
          <li className="py-6">
            <a>
              <p className="mb-2 font-plexSerif font-bold text-umber">
                Lorem ipsum dolor sit, amet consectetur
              </p>
              <p className="font-plexSerif">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
                ipsum dolor sit.
              </p>
            </a>
          </li>
          <li className="py-6">
            <a>
              <p className="mb-2 font-plexSerif font-bold text-umber">
                Lorem ipsum dolor sit, amet consectetur
              </p>
              <p className="font-plexSerif">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
                ipsum dolor sit.
              </p>
            </a>
          </li>
          <li className="py-6">
            <a>
              <p className="mb-2 font-plexSerif font-bold text-umber">
                Lorem ipsum dolor sit, amet consectetur
              </p>
              <p className="font-plexSerif">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
                ipsum dolor sit.
              </p>
            </a>
          </li>
        </ul>

        <div className="all-news-link-bottom pt-7">
          <a className="text-1xl hidden font-plexSerif font-bold md:block">
            All news
          </a>
        </div>
      </div>
    </section>
  );
}
