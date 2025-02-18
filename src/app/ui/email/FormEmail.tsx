import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null); // ✅ Corrección aquí

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return; // Evita errores si el ref es null

    emailjs
      .sendForm(
        "TU_SERVICE_ID", // Reemplaza con tu Service ID
        "TU_TEMPLATE_ID", // Reemplaza con tu Template ID
        form.current,
        "TU_PUBLIC_KEY" // Reemplaza con tu Public Key
      )
      .then(
        (result) => {
          console.log("Mensaje enviado:", result.text);
          alert("Correo enviado con éxito!");
        },
        (error) => {
          console.error("Error al enviar:", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Tu Nombre" required />
      <input type="email" name="user_email" placeholder="Tu Email" required />
      <textarea name="message" placeholder="Tu Mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
