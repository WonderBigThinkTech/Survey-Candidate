 

export default function GoogleMap() {
  return (
    <>
      <section className="google_map">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376286.01914119198!2d72.75813970000001!3d19.075983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7a9dc6bee97%3A0x80b713604680ff3f!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1709976191256!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </section>
    </>
  )
}
