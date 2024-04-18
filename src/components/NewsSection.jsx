export default function NewsSection() {
  return (
    <section className="news-section base flex h-80 flex-row justify-between bg-zinc-100 py-0">
      <div className="flex-item-1">
        <h3 className="text-2xl">News</h3>
      </div>
      <div className="flex-item-2 w-3/5 text-base">
        <ul>
          <li className="mt-2">
            <a>
              <p className="text-umber font-bold">Title of article</p>
              <p>Subtitle</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
