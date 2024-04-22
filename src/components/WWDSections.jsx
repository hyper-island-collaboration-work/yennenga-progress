export default function WWDSections() {
  return (
    <>
      <section className="WWD base grid-row-auto lg:grid-rows-auto grid grid-cols-6 gap-2 bg-zinc-100 p-2 sm:gap-3 sm:p-7 lg:grid-cols-7 lg:gap-5">
        <h2 className="col-start-1 col-end-6 mb-4 font-montserrat text-2xl font-medium sm:col-end-4 lg:col-start-2 lg:col-end-4 lg:pt-10 lg:text-4xl">
          What we do What we do What we do
        </h2>
        <div className="what-we-do col-start-1 col-end-6 pb-16 sm:col-end-4 lg:col-start-3 lg:col-end-5 lg:pb-10">
          <p className=" mb-4 font-plexSerif text-base font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quam
            inventore dicta quisquam? Omnis mollitia.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
          </p>
          <a className="font-plexSerif font-medium">What we do</a>
        </div>
        <div className="sm-row-start-1 col-start-1 col-end-3 row-start-4 row-end-6 h-64 bg-sand sm:col-start-6 sm:col-end-7 sm:row-start-2 sm:row-end-4 sm:h-80 lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-3 lg:h-auto"></div>
        <div className="col-start-3 col-end-6 row-start-3 row-end-5 h-64 bg-sand sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-3 sm:h-auto lg:col-start-7 lg:col-end-8 lg:row-start-2 lg:row-end-4 lg:h-80"></div>

        <h2 className="col-start-2 col-end-7 mb-4 font-montserrat text-2xl font-medium sm:col-start-4 sm:col-end-7 sm:row-start-6 lg:col-start-5 lg:col-end-7 lg:row-start-4 lg:row-end-5 lg:pt-10 lg:text-4xl">
          How it works How it works How it works
        </h2>
        <div className="how-it-works col-start-2 col-end-7 pb-10 sm:col-start-4 sm:col-end-7 sm:row-start-7 lg:col-start-5 lg:col-end-7 lg:row-start-5 lg:row-end-6">
          <p className=" mb-4 font-plexSerif text-base font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quam
            inventore dicta quisquam? Omnis mollitia.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
          </p>
          <a className="font-plexSerif font-medium">How it works</a>
        </div>
        <div className="col-start-2 col-end-4 row-start-9 row-end-11 hidden h-64 bg-sand sm:row-start-6 sm:row-end-8 sm:block lg:col-start-3 lg:col-end-5 lg:row-start-4 lg:row-end-6 lg:h-auto"></div>
        <div className="sm:row-end-9col-end-7 col-start-4 row-start-10 row-end-12 hidden h-64 bg-sand pb-10 sm:col-start-1 sm:col-end-2 sm:row-start-7 sm:block lg:col-start-2 lg:col-end-3 lg:row-start-5 lg:row-end-7 lg:h-80"></div>
      </section>
    </>
  );
}
