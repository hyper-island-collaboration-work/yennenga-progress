import ButtonLink from "./ButtonLink";

export default function ReadyToTakeAction() {
  return (
    <section className="border bg-light px-12 pb-24 pt-[192px]">
      <div>
        <h3 className="font-montserrat text-3xl font-medium md:pb-12 md:pr-0 lg:text-5xl 2xl:text-[80px]">
          Ready to take action?
        </h3>
        <div className="space-y-5 text-sm md:text-base">
          <div>
            <ButtonLink buttonName="DONATE" />
          </div>
          <div>
            <ButtonLink buttonName="ENGAGE" />
          </div>
        </div>
      </div>
    </section>
  );
}
