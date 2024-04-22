export default function WWDSections() {
  return (
    <>
      <section className="WWD base mt-10 flex flex-col bg-zinc-100 md:flex-row md:flex-wrap">
        <div className="flex-item-1 self-endgap-5 flex flex-col md:w-full md:flex-row-reverse md:justify-self-end md:pb-36">
          <div className="flex h-96 w-5/6 flex-row gap-3 md:w-2/5 md:justify-end">
            <div className="h-64 w-64 bg-sand md:h-96 md:w-96 "></div>
            <div className="relative top-44 h-52 w-28 bg-sand md:top-3/4"></div>
          </div>

          <div className="what-we-do flex w-5/6 flex-col gap-5 p-7 md:w-2/6 md:p-0">
            <h2 className="font-montserrat text-2xl font-medium md:text-4xl">
              What we do What we do What we do What we do What we do What we do
            </h2>
            <p className="font-plexSerif text-base font-normal md:w-full">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              quam inventore dicta quisquam? Omnis mollitia, repellendus fugit
              impedit officiis obcaecati ipsum fugiat voluptatum.
            </p>
            <a className="mb-7 font-plexSerif font-medium">What we do</a>
          </div>
        </div>
        <div className="flex h-96 flex-row gap-3 md:w-2/5 md:justify-start">
          <div className="relative top-44 h-52 w-28 bg-sand"></div>
          <div className="h-64 w-64 bg-sand"></div>
        </div>
        <div className="flex-item-2 flex flex-col items-end justify-end md:w-2/5 md:self-start">
          <div className="how-it-works flex w-5/6 flex-col gap-5 p-7">
            <h2 className="font-montserrat text-2xl font-medium md:text-4xl">
              How it works How it works How it works How it works How it works
            </h2>
            <p className="font-plexSerif text-base font-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              quam inventore dicta quisquam? Omnis mollitia, repellendus fugit
              impedit officiis obcaecati ipsum fugiat voluptatum, iusto odit
              odio eligendi accusamus illum. Magnam.
            </p>

            <a className="mb-5 font-plexSerif font-medium">How it works</a>
          </div>
        </div>
      </section>
    </>
  );
}
