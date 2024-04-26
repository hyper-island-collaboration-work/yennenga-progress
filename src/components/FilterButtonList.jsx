const FilterButtonList = () => {
  return (
    <ul className=" flex font-montserrat text-base w-fit px-12 justify-self-end py-6">
      <li>
        <button className="rounded-full border border-umber py-[6px] px-6 mr-6 ">
          EDUCATION
        </button>
      </li>
      <li>
        <button className="rounded-full border py-[6px] border-umber px-6 mr-6">
          HEALTH
        </button>
      </li>
      <li>
        <button className="rounded-full border py-[6px] border-umber px-6 mr-6">
          INFRASTRUCTURE
        </button>
      </li>
      <li>
        <button className="rounded-full border py-[6px] border-umber px-6 mr-6">
          ONGOING-FUNDING
        </button>
      </li>
    </ul>
  );
};

export default FilterButtonList;
