export default function Header() {
  return (
    <div className="header slider-thumb-header">
      <section className="intro">
        <h1 className="header-title">Hello, I&apos;m Catalin 👋🏻</h1>
        <p>
          I&apos;m currently on a mission to reach the pinnacle of{" "}
          <span className="green-text">Front-End Web Development</span>. I am
          actively seeking junior roles that will provide a platform to
          challenge my skills, with the ultimate goal of{" "}
          <span className="green-text">
            influencing the world&apos;s technological landscape
          </span>
          , one application at a time.
        </p>
      </section>

      <section className="profile-image">
        <img
          className="avatar"
          src="/images/profile-image.png"
          alt="A guy working on a computer"
        />
      </section>
    </div>
  );
}
