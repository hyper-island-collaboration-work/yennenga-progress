import ButtonLink from "./ButtonLink";

export default function ReadyToTakeAction() {
  return (
    <section className="border bg-light p-10 pt-24">
      <div>
        <h3 className="pr-10 font-montserrat text-3xl font-medium md:pr-0 lg:text-5xl 2xl:text-[80px]">
          Ready to take action?
        </h3>
        <div className="space-y-5 py-16 text-sm md:text-base">
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
