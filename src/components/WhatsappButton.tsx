import { FaWhatsapp } from 'react-icons/fa'; // You'll need to install react-icons

function WhatsAppButton() {
  const phoneNumber = "1234567890"; // Replace with your WhatsApp number
  const message = "Hello, I need assistance!"; // Optional default message

  const handleClick = () => {
    // Format: https://wa.me/phoneNumber?text=message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <FaWhatsapp size={30} />
    </button>
  );
}

export default WhatsAppButton;