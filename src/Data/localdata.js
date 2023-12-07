import ageratumImg from "../assets/Fotos_Plantas/ageratum.jpg"

const dataPlants = [
    {
        nombre: "Ageratum",
        Descripción: "El agerato, conocido científicamente como Ageratum houstonianum, es una encantadora planta ornamental que destaca por sus exuberantes y coloridas cabezas florales.",
        Origen: "México y Perú",
        Ubicación: "Ext",
        Reproduccion: "Semillas",
        Simbolismo: "símbolo de la eterna juventud",
        riego: "Frecuente",
        fotoURL: "../assets/Fotos_Plantas/ageratum.jpg"
    },
    {
        nombre: "Clavelon Inca",
        Descripción: "Los tagetes, claveles moros o clavelones son plantas con flores amarillas o naranjas y de hojas compuestas que alcanzan un tamaño considerable.",
        Origen: "America",
        Ubicación: "Ext",
        Reproduccion: "Semillas",
        Simbolismo: "eran considerados como el sol para los antiguos mexicas.",
        riego: "frecuente",
        fotoURL: "https://www.flordeplanta.com.ar/wp-content/uploads/2015/08/Tagetes-erecta_1.bmp"
    },
    {
        nombre: "Aralia Japoniza",
        Descripción: "Destaca por sus grandes hojas palmeadas y lobuladas, que se asemejan a una mano abierta. Puede alcanzar alturas de 2-3 metros y produce pequeñas flores blancas o verdosas en umbelas, seguidas de bayas negras",
        Origen: "Japón y Corea",
        Ubicación: "Int",
        Reproduccion: "Esquejes y por Semillas",
        Simbolismo: "buena fortuna y promueve la paciencia",
        riego: "2 veces x semana"
        , fotoURL: "https://cdnx.jumpseller.com/la-plantita-vivero/image/29366179/Aralia_JaponicA_ZOOM.jpg?1668095242"
    },
    {
        nombre: "Cheflera",
        Descripción: "conocida científicamente como Schefflera, es una planta de interior popular apreciada por su atractiva follaje y facilidad de cuidado. Pertenece al género Schefflera, que incluye varias especies de plantas tropicales y subtropicales. La cheflera comúnmente se cultiva como planta de interior en hogares y oficinas debido a su capacidad para prosperar en condiciones de interior.",
        Origen: "Sudeste de Asia",
        Ubicación: "Ext",
        Reproduccion: "esqueje",
        Simbolismo: "Abundancia prosperidad",
        riego: "2 veces x semana"
        , fotoURL: "https://cdn0.ecologiaverde.com/es/posts/5/5/8/cheflera_cuidados_3855_orig.jpg"
    },
    {
        nombre: "hiedra",
        Descripción: "La hiedra, también conocida como Ivy, es una planta trepadora que desprende una elegancia natural y agrega un toque encantador a cualquier espacio. Con sus hojas verdes y vibrantes que se aferran y se deslizan con gracia por superficies verticales, la hiedra no solo es una belleza visual, sino que también aporta un toque de vitalidad a su entorno.",
        Origen: "Europa",
        Ubicación: "Ext/Int",
        Reproduccion: "esqueje",
        Simbolismo: "felicidad y buena suerte.",
        riego: "cada 2 dias"
        , fotoURL: "https://www.hogarmania.com/archivos/201105/hiedra-xl-1280x720x80xX.jpg"
    },
    {
        nombre: "arbol de jade",
        Descripción: "Conocido científicamente como Crassula ovata, es una planta suculenta que ha ganado popularidad por su atractiva apariencia y su facilidad de cuidado. Originaria de Sudáfrica, esta planta es apreciada tanto por jardineros novatos como por expertos debido a sus características únicas.",
        Origen: "sudafrica",
        Ubicación: "Int",
        Reproduccion: "esqueje",
        Simbolismo: "abundancia y prosperidad",
        riego: "1 vez cada 15 dias",
        fotoURL: "https://succulentcapital.com/wp-content/uploads/crassula-ovata-arbol-de-jade-1024x660.jpg"
    },
    {
        nombre: "Lilium Azucena",
        Descripción: "Comúnmente conocidas como azucenas, son un género de plantas bulbosas que incluye varias especies con flores grandes y vistosas. Las azucenas son conocidas por sus flores elegantes y perfumadas, que suelen tener forma de trompeta o embudo y están disponibles en una amplia gama de colores, como blanco, rosa, rojo, naranja y amarillo.",
        Origen: "noroeste de China, Corea y el este de Siberia",
        Ubicación: "Ext/Int",
        Reproduccion: "Por Bulbos, Por Semillas, Por Hijuelos o Bulbillos, Por Cultivo de Tejidos (Micropropagación), Por Polinización Cruzada.",
        Simbolismo: "pureza, la gracia y la devoción",
        riego: "2 a 3 veces x semana",
        fotoURL: "https://http2.mlstatic.com/D_NQ_NP_837854-MLC46194102956_052021-O.webp"
    },
    {
        nombre: "Malamadre",
        Descripción: `la Cinta, también conocida como "Malamadre"! Con hojas verdes arqueadas, esta planta de interior irradia un encanto natural. Su resistencia y adaptabilidad la convierten en la elección perfecta para aquellos que buscan una compañera de bajo mantenimiento. Colócala en cualquier rincón y observa cómo transforma sutilmente tu espacio, añadiendo una dosis de frescura y serenidad. La Cinta, una expresión simple y hermosa de la naturaleza en tu hogar. `,
        Origen: "Sudafrica",
        Ubicación: "Int",
        Reproduccion: "hijuelos",
        Simbolismo: "unión y amor incondicional",
        riego: "2 veces x semana",
        fotoURL: "https://www.elpais.com.co/resizer/_j9MMPVm7YvNDh-rTAKwEBIz10Y=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/HYTILJDGLFFUPPTNKFPZOX6QOY.jpeg"
    },
    {
        nombre: "Monstera Deliciosa",
        Descripción: "También conocida como cerimán o costilla de Adán, es una especie de planta trepadora perteneciente a la familia Araceae",
        Origen: "sur de México y América Central",
        Ubicación: "Ext/Int",
        Reproduccion: "Por esqueje",
        Simbolismo: "Crecimiento de la conciencia, resistencia y perseverancia, purificación y renovación, búsqueda de la verdad interior.",
        riego: "1 a 2 veces x semana",
        fotoURL: "https://media.admagazine.com/photos/618a611d4b3f9152d1b42033/16:9/w_1280,c_limit/76290.jpg"
    },
    {
        nombre: "Crisantemo",
        Descripción: "El crisantemo (Chrysanthemum) es una flor fascinante que deslumbra con su elegancia y variedad. Con sus pétalos densos y vibrantes en una amplia gama de colores, desde blancos y amarillos hasta tonos más intensos como el rojo y el púrpura, los crisantemos se destacan como una joya floral.",
        Origen: "China",
        Ubicación: "Int",
        Reproduccion: "semillas",
        Simbolismo: "símbolo de la longevidad",
        riego: "2 a 3 veces x semana",
        fotoURL: "https://bruflor.es/blog/wp-content/uploads/2022/08/crisantemos-cuidados-y-significados.png"
    },
    {
        nombre: "Peperomia Cucharita",
        Descripción: "Es una variedad de las peperomias llamada comúnmente cuchara o cucharita, o planta chica del dinero. Es una planta de interior que puede estar en sombra, pero para un mayor crecimiento debe tener abundante luz natural, protegiéndola siempre del sol directo y del frío",
        Origen: "China",
        Ubicación: "Int",
        Reproduccion: "Por esqueje",
        Simbolismo: "prosperidad y el dinero al hogar.",
        riego: "2 veces x semana",
        fotoURL: "https://viverochillan.cl/wp-content/uploads/2021/03/peperomia_polybotrya.jpg "
    },
    {
        nombre: "Hierba Buena",
        Descripción: "La hierba buena, comúnmente conocida como menta, es reconocida por su aroma refrescante y su sabor característico. Su fragancia es fresca y vigorizante, mientras que su sabor es refrescante y ligeramente dulce.",
        Origen: "Europa, Asia, Africa",
        Ubicación: "Ext",
        Reproduccion: "Por esqueje",
        Simbolismo: "buena suerte",
        riego: "2 veces x semana",
        fotoURL: "https://imag.bonviveur.com/hojas-frescas-de-hierbabuena.jpg"
    },
    {
        nombre: "Perejil",
        Descripción: "El perejil (Petroselinum crispum) es una hierba verde y aromática ampliamente utilizada en la cocina por su sabor fresco y su capacidad para realzar el gusto de diversos platos.",
        Origen: "Europa",
        Ubicación: "Ext",
        Reproduccion: "Semillas",
        Simbolismo: "fuerza de gladiador",
        riego: "cada 2 dias"
        , fotoURL: "https://s1.abcstatics.com/media/bienestar/2021/11/24/perejil-kKqF--1248x698@abc.jpg"
    },
    {
        nombre: "Oregano",
        Descripción: "El orégano es una hierba aromática con un aroma distintivo y un sabor cálido y ligeramente amargo. Ampliamente utilizado en la cocina mediterránea, es esencial en platos como pizzas, pastas y carnes. Sus variedades, como el orégano griego e italiano, ofrecen perfiles de sabor únicos. Además de su uso culinario, el orégano se ha valorado tradicionalmente por sus propiedades medicinales, como antioxidantes y antiinflamatorios",
        Origen: "Eurasia",
        Ubicación: "Ext",
        Reproduccion: "Por esqueje",
        Simbolismo: "",
        riego: "cada que se seque",
        fotoURL: "https://www.elmueble.com/medio/2023/03/10/oregano-planta-medicinal_62ec157a_230310113212_1000x667.jpg"
    },
    {
        nombre: "Palma Bambu",
        Descripción: "Chamaedorea seifrizii, conocida como palma de bambú, palma de salón o palma de caña, es una especie de palma subtropical que puede crecer hasta 20 pies de altura y es comúnmente utilizada como planta de interior. Sus hojas siempreverdes están divididas de manera pinnada, y produce flores amarillas en una panícula. Los frutos son pequeños, redondos y de color negro.",
        Origen: "America",
        Ubicación: "Int",
        Reproduccion: "Por esqueje",
        Simbolismo: "atrae y mejora la energía positiva",
        riego: "2 veces x semana",
        fotoURL: "https://crearcimientos.com/wp-content/uploads/2017/07/A%CC%81rbol-de-los-Bonsai-Chamaedorea-seifrizii-Palma-De-Bambu%CC%81-de-la-decoracio%CC%81n-del-jardi%CC%81n-planta-10.jpg"
    }
];








/*
const dataPlants = [
    {
        nombre: "Ageratum",
        fotoURL: "https://www.gardendesign.com/pictures/images/900x705Max/site_3/blue-mink-floss-flower-ageratum-houstonianum-shutterstock-com_13700.jpg"
        
    },
    {
        nombre: "Magnolia",
        fotoURL: "https://http2.mlstatic.com/D_NQ_NP_901966-MLC45610528504_042021-O.webp"
    },
];
*/
export default dataPlants;