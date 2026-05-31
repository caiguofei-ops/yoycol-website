import styles from '../contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <p>For business inquiries, please contact us via WhatsApp or email:</p>
      <p className={styles.whatsapp}><strong>WhatsApp:</strong> <a href="https://wa.me/8613348325895" target="_blank" rel="noopener">+86 13348325895</a></p>
      <p className={styles.email}><strong>Email:</strong> <a href="mailto:info@yoycolpod.com">info@yoycolpod.com</a></p>
    </div>
  );
}
