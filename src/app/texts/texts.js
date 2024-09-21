const title = "Tintos Caseros";
const email = "dinci693dayandiaz@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573115352916";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Tintos Caseros ofrece una variedad de tintos y bebidas calientes, elaborados con ingredientes de alta calidad para brindarte una experiencia única en cada taza. Nos apasiona hacer la diferencia con cada bebida, asegurando que cada sorbo sea un deleite para tus sentidos.",
        description2: "En Tintos Caseros, nos esforzamos por ofrecerte bebidas que no solo satisfagan tu paladar, sino que también te brinden un momento especial de calidez y confort. Descubre la calidad y el sabor de nuestras bebidas calientes."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Hace la diferencia",
            p2: "con cada taza de nuestras bebidas"
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=100076306895323&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
