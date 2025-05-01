

export default function AboutUs() {
  return (
    <section className="aboutUs-main container section-2">
      <h2>Про нас</h2>
    <div className=" aboutUs">
      
      {/* <div className="aboutUs"> */}
       <div className="about-video-section">
      <video className="about-video"
      autoPlay
      muted
      loop
      playsInline>
      <source src="images/VideoAbout.mp4" type="video/mp4"/> Ваш браузер не підтримує відтворення відео</video>
      </div>
      <div className="aboutUs-text">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur odit accusantium fugit sapiente placeat perferendis adipisci quo eius. Impedit consequuntur necessitatibus consectetur fuga mollitia consequatur, ab soluta. Numquam deleniti laboriosam molestias, tenetur expedita rem consequuntur ullam a excepturi omnis commodi fuga error cupiditate perspiciatis illo itaque aperiam sapiente. Vel, vitae!</p>
        <button className="btn-1">Подивитися асортимент</button>
      </div>
      </div>
    {/* </div> */}
    </section>
  )
}
