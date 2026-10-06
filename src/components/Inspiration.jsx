function Inspiration({ title, description, cards, className = "" }) {
  return (
    <section className={`inspiration ${className}`}>

      {/* HR line only for How Its Works */}
      {className === "how-it-works" && <hr />}

      {title && (
        <div className="inspiration-heading">
          <h2>{title}</h2>
          <br />
          {description && <span>{description}</span>}
        </div>
      )}

      <div className="inspiration-grid">
        {cards.map((card, index) => (
          <div className="inspiration-card" key={index}>

            <img
              src={card.image}
              alt={card.title || "Furniture"}
            />

            {card.title && <h4>{card.title}</h4>}

            {card.description && <p>{card.description}</p>}

          </div>
        ))}
      </div>

    </section>
  );
}

export default Inspiration;