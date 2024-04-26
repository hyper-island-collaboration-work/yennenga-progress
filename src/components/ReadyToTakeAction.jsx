import ButtonLink from "./ButtonLink";

export default function ReadyToTakeAction() {
  return (
    <section className="border bg-light px-6 pb-12 pt-6 md:px-12 md:pb-24 md:pt-[192px]">
      <div>
        <h3 className="pb-3 font-montserrat text-2xl font-medium md:pb-12 md:pr-0 md:text-3xl lg:text-5xl xl:text-[80px]">
          Ready to take action?
        </h3>
        <div className="text-[12px] md:space-y-5 md:text-base">
          <div>
            <ButtonLink buttonName="DONATE" path="/not-found" />
          </div>
          <div>
            <ButtonLink buttonName="ENGAGE" path="/not-found" />
          </div>
        </div>
      </div>
    </section>
  );
}
