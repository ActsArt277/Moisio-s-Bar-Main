import { useState } from 'react'
import './App.css'

const phone = '+231 779075108'
const whatsappNumber = '231779075108'
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Monsio Food & Liquid! I would like to place an order.')}`

const menuCategories = [
  'All',
  'Soups & Stews',
  'Rice Dishes',
  'Grills & Seafood',
  'Sides',
  'Drinks',
]

// PHOTO PLACEHOLDERS: replace these Unsplash URLs with your restaurant's own photos.
const dishes = [
  {
    name: 'Palm Butter',
    category: 'Soups & Stews',
    description: 'Slow-simmered palm nut soup with rich, comforting flavor.',
    price: '$12',
    image: 'photo-1547592180-85f173990554',
    alt: 'A warm bowl of palm butter soup with rice',
  },
  {
    name: 'Cassava Leaf',
    category: 'Soups & Stews',
    description: 'A beloved Liberian classic, cooked gently and served with rice.',
    price: '$11',
    image: 'photo-1547592180-85f173990554',
    alt: 'A bowl of traditional greens and rice',
  },
  {
    name: 'Potato Greens',
    category: 'Soups & Stews',
    description: 'Tender greens simmered with a savory, home-style seasoning.',
    price: '$11',
    image: 'photo-1512621776951-a57141f2eefd',
    alt: 'Fresh greens served with a hearty meal',
  },
  {
    name: 'Pepper Soup',
    category: 'Soups & Stews',
    description: 'A warming, peppery broth for a little extra comfort.',
    price: '$10',
    image: 'photo-1547592180-85f173990554',
    alt: 'A steaming bowl of spicy soup',
  },
  {
    name: 'Jollof Rice',
    category: 'Rice Dishes',
    description: 'Fragrant, seasoned rice with a deep tomato flavor.',
    price: '$9',
    image: 'photo-1516684732162-798a0062be99',
    alt: 'A plate of colorful seasoned rice',
  },
  {
    name: 'Rice & Gravy',
    category: 'Rice Dishes',
    description: 'Fluffy rice with a generous helping of rich house gravy.',
    price: '$8',
    image: 'photo-1512058564366-18510be2db19',
    alt: 'A comforting plate of rice and sauce',
  },
  {
    name: 'Fried Fish',
    category: 'Grills & Seafood',
    description: 'Crisp, golden fish with a bright, lively pepper sauce.',
    price: '$14',
    image: 'photo-1519708227418-c8fd9a32b7a2',
    alt: 'Golden fried fish served with fresh sides',
  },
  {
    name: 'Grilled Chicken',
    category: 'Grills & Seafood',
    description: 'Juicy chicken, grilled with a savory house marinade.',
    price: '$13',
    image: 'photo-1532550907401-a500c9a57435',
    alt: 'Grilled chicken with herbs and vegetables',
  },
  {
    name: 'Fufu',
    category: 'Sides',
    description: 'Soft, smooth and ready for your favorite soup.',
    price: '$4',
    image: 'photo-1547592180-85f173990554',
    alt: 'A serving of soft fufu alongside soup',
  },
  {
    name: 'Fried Plantain',
    category: 'Sides',
    description: 'Sweet plantain slices, fried until golden at the edges.',
    price: '$4',
    image: 'photo-1587132137056-bfbf0166836e',
    alt: 'Golden fried plantain slices',
  },
  {
    name: 'Kala',
    category: 'Sides',
    description: 'Lightly sweet, golden bites—perfect for sharing.',
    price: '$3',
    image: 'photo-1601050690597-df0568f70950',
    alt: 'Golden fried dough bites served fresh',
  },
  {
    name: 'Ginger Drink',
    category: 'Drinks',
    description: 'A refreshing house-style ginger drink with a little kick.',
    price: '$3',
    image: 'photo-1513558161293-cd7b4eaf36a7',
    alt: 'A chilled, refreshing drink with citrus',
  },
]

const gallery = [
  { image: 'photo-1547592180-85f173990554', alt: 'A comforting bowl of soup' },
  { image: 'photo-1516684732162-798a0062be99', alt: 'Freshly prepared rice dish' },
  { image: 'photo-1519708227418-c8fd9a32b7a2', alt: 'Fish prepared fresh for the table' },
  { image: 'photo-1559339352-11d035aa65de', alt: 'A welcoming restaurant dining space' },
  { image: 'photo-1531123897727-8f129e1688ce', alt: 'A member of the restaurant team' },
  { image: 'photo-1587132137056-bfbf0166836e', alt: 'Sweet fried plantain ready to share' },
  { image: 'photo-1512621776951-a57141f2eefd', alt: 'Fresh ingredients prepared for a meal' },
  { image: 'photo-1555396273-367ea4eb4db5', alt: 'Guests sharing a meal together' },
]

const photoUrl = (id, width = 720) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const visibleDishes =
    activeCategory === 'All'
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory)

  function submitReservation(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const message = [
      'Hello Monsio Food & Liquid! I would like to request a reservation.',
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Date: ${formData.get('date')}`,
      `Time: ${formData.get('time')}`,
      `Guests: ${formData.get('guests')}`,
    ].join('\n')

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Monsio Food & Liquid home">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span className="brand-name">Monsio <em>Food & Liquid</em></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">Our story</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#visit">Find us</a>
        </nav>
        <a className="header-order" href="tel:+231779075108">Call us <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src={photoUrl('photo-1547592180-85f173990554', 2000)}
            alt="A table filled with colorful, freshly prepared food"
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span /> MONROVIA, LIBERIA</p>
            <h1 id="hero-title">A taste of Liberia,<br />made with <em>love.</em></h1>
            <p className="hero-copy">Good food, warm company, and the flavors that bring us home.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#menu">Explore our menu <span aria-hidden="true">↗</span></a>
              <a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer">Order on WhatsApp</a>
            </div>
            <p className="hero-note">Freshly prepared. Proudly Liberian.</p>
          </div>
          <div className="hero-stamp" aria-hidden="true"><span>MADE FRESH</span><strong>with<br />heart</strong><span>SHARED WITH YOU</span></div>
        </section>

        <section className="intro-strip" aria-label="Restaurant highlights">
          <span>Local flavor</span><i aria-hidden="true">✳</i><span>Made with care</span><i aria-hidden="true">✳</i><span>Always welcoming</span>
        </section>

        <section className="about section-wrap" id="about">
          <div className="about-photo-wrap">
            <img
              className="about-photo"
              src={photoUrl('photo-1559339352-11d035aa65de')}
              alt="A bright, welcoming restaurant dining room"
              loading="lazy"
            />
            <span className="photo-caption">A seat is always waiting.</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span /> A LITTLE ABOUT US</p>
            <h2>Food that feels<br />like <em>coming home.</em></h2>
            <p>At Monsio Food & Liquid, we bring the flavors many of us grew up with to the table—comforting soups, rice, and grilled favorites prepared with care.</p>
            <p>Come for a relaxed meal, a quick lunch, or a taste of home in Monrovia. We look forward to welcoming you.</p>
            <a className="text-link" href="#visit">Come visit us <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="section-wrap">
            <div className="section-heading menu-heading">
              <div>
                <p className="eyebrow"><span /> COOKED WITH CARE</p>
                <h2>Something good<br />for <em>every appetite.</em></h2>
              </div>
              <p className="heading-note">A few favorites from our kitchen.<br />Ask us what’s fresh today.</p>
            </div>
            <div className="category-list" role="group" aria-label="Filter menu by category">
              {menuCategories.map((category) => (
                <button
                  className={activeCategory === category ? 'category-button active' : 'category-button'}
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="menu-grid">
              {visibleDishes.map((dish, index) => (
                <article className="menu-card" key={dish.name}>
                  <div className="menu-photo-wrap">
                    <img
                      src={photoUrl(dish.image)}
                      alt={dish.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="menu-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="menu-card-heading">
                    <h3>{dish.name}</h3>
                    <span>{dish.price}</span>
                  </div>
                  <p>{dish.description}</p>
                  <span className="menu-category">{dish.category}</span>
                </article>
              ))}
            </div>
            <p className="menu-disclaimer">Sample menu and prices shown in USD. Please confirm current dishes and prices with us.</p>
          </div>
        </section>

        <section className="gallery-section section-wrap" id="gallery">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> A PLACE AT OUR TABLE</p>
              <h2>A little look<br />at <em>what we love.</em></h2>
            </div>
            <p className="heading-note">From the first plate to the last laugh.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((photo, index) => (
              <figure className={`gallery-item gallery-item-${index + 1}`} key={photo.alt}>
                <img
                  src={photoUrl(photo.image, 900)}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
          <p className="photo-placeholder-note">Gallery images are placeholders—swap in your own food, dining room, and team photos.</p>
        </section>

        <section className="reviews-section">
          <div className="section-wrap">
            <div className="reviews-title">
              <p className="eyebrow"><span /> KIND WORDS</p>
              <h2>Good food is<br />better <em>together.</em></h2>
            </div>
            <div className="review-grid">
              {[
                ['“Share what you loved about your meal and the welcome you received.”', 'Guest review placeholder'],
                ['“Tell us which dish brought you back for another visit.”', 'Guest review placeholder'],
                ['“Leave a few words about your favorite moment at our table.”', 'Guest review placeholder'],
              ].map(([quote, author], index) => (
                <blockquote className="review-card" key={author + index}>
                  <span className="review-stars" aria-label="Five stars">★★★★★</span>
                  <p>{quote}</p>
                  <cite><span className="review-avatar">{String.fromCharCode(65 + index)}</span>{author}</cite>
                </blockquote>
              ))}
            </div>
            <p className="review-note">Review text is placeholder copy. Replace it with permissioned customer testimonials.</p>
          </div>
        </section>

        <section className="visit-section section-wrap" id="visit">
          <div className="visit-info">
            <p className="eyebrow"><span /> COME ON BY</p>
            <h2>Find your way<br /><em>to our table.</em></h2>
            <p className="visit-lede">We’d love to see you. Stop by for lunch, dinner, or something delicious in between.</p>
            <div className="visit-detail">
              <span className="detail-icon" aria-hidden="true">⌖</span>
              <div><h3>Our neighborhood</h3><p>Gardnersville, Monrovia, Liberia</p><small>Add your exact street address and landmark before publishing.</small></div>
            </div>
            <div className="visit-detail">
              <span className="detail-icon" aria-hidden="true">◷</span>
              <div><h3>Opening hours</h3><p>Monday – Saturday <span>10:00 am – 10:00 pm</span></p><p>Sunday <span>12:00 pm – 9:00 pm</span></p><small>Example hours — confirm before publishing.</small></div>
            </div>
            <div className="visit-detail">
              <span className="detail-icon" aria-hidden="true">₵</span>
              <div><h3>Payment</h3><p>Cash, Orange Money & MTN MoMo</p><small>Please confirm accepted payment methods.</small></div>
            </div>
            <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Gardnersville%2C+Monrovia%2C+Liberia" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
          </div>
          <div className="map-wrap">
            <iframe
              title="Map showing Gardnersville, Monrovia, Liberia"
              src="https://maps.google.com/maps?q=Gardnersville%2C%20Monrovia%2C%20Liberia&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span className="map-label"><span /> MONROVIA, LIBERIA</span>
          </div>
        </section>

        <section className="reservation-section" id="contact">
          <div className="reservation-decoration" aria-hidden="true">M</div>
          <div className="section-wrap reservation-wrap">
            <div className="reservation-copy">
              <p className="eyebrow"><span /> YOUR TABLE IS WAITING</p>
              <h2>Make a little<br /><em>room for good.</em></h2>
              <p>Planning a meal with friends or family? Send us your details and we’ll confirm on WhatsApp.</p>
              <div className="reservation-links">
                <a href="tel:+231779075108"><span aria-hidden="true">↗</span> {phone}</a>
                <a href={whatsappLink} target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span> Chat on WhatsApp</a>
              </div>
            </div>
            <form className="reservation-form" onSubmit={submitReservation}>
              <div className="form-row">
                <label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
                <label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="+231 ..." required /></label>
              </div>
              <div className="form-row">
                <label>Date<input name="date" type="date" required /></label>
                <label>Time<input name="time" type="time" required /></label>
              </div>
              <label>Number of guests
                <select name="guests" defaultValue="2" required>
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5">5 guests</option>
                  <option value="6+">6 or more guests</option>
                </select>
              </label>
              <button className="button button-primary form-submit" type="submit">Request on WhatsApp <span aria-hidden="true">↗</span></button>
              <p className="form-note">Your request opens WhatsApp so we can confirm your table.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span className="brand-name">Monsio <em>Food & Liquid</em></span>
          </a>
          <p>Good food. Warm company.<br />A little taste of home.</p>
          <div className="footer-social">
            <span>COME SAY HELLO</span>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">↗</span></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
            <small>Replace with your restaurant’s social profiles.</small>
          </div>
          <div className="footer-contact">
            <span>FIND US IN MONROVIA</span>
            <p>Gardnersville, Monrovia, Liberia</p>
            <a href="tel:+231779075108">{phone}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Monsio Food & Liquid</span>
          <span>Made with care in Liberia <span aria-hidden="true">♥</span></span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
      <a className="mobile-order" href={whatsappLink} target="_blank" rel="noreferrer">Order on WhatsApp <span aria-hidden="true">↗</span></a>
    </>
  )
}

export default App
