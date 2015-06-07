var selectorText = '.text';
var selectorMenu = '.menu';
var selectorLanguageLinks = '.language a';

var dataSpanish = 'sp';
var dataEnglish = 'en';

$(document).ready(function () {
    insertMenu();
    attachEvents();
    setLanguageValues();
});

var insertMenu = function () {
    $.get('/bits/menu.htm', null, function (result) {
        $(selectorMenu).html(result);
        setLanguageValues();
    });
};

var attachEvents = function () {
    $(selectorMenu).delegate(selectorLanguageLinks, 'click', eventLanguageChange);
};

var eventMenuLoaded = function (e) {
    setLanguageValues();
};

var eventLanguageChange = function (e) {
    var language = $(this).attr('data');
    actionSetLanguage(language);
};

var actionSetLanguage = function (language) {
    $.cookie('lang', language, { expires: 3650 });
    setLanguageValues();
};

var setLanguageValues = function () {
    var currentLanguage = $.cookie('lang');

    // Default if first time
    if (!currentLanguage) {
        currentLanguage = dataSpanish;
        actionSetLanguage(currentLanguage);
    }
    
    $(selectorText).each(function () {
        // Home
        setTextIfLang(this, currentLanguage, 'txt-home-title', dataSpanish, 'La Yoica');
        setTextIfLang(this, currentLanguage, 'txt-home-title', dataEnglish, 'La Yoica');

        setTextIfLang(this, currentLanguage, 'txt-home-subtitle', dataSpanish, 'Cabañas - Reserva Natural');
        setTextIfLang(this, currentLanguage, 'txt-home-subtitle', dataEnglish, 'Patagonian Horse Treks - Lago Puelo National Park');

        setTextIfLang(this, currentLanguage, 'txt-home-paragraph', dataSpanish, '"Una insuperable forma de internarse en el paisaje cordillerano para apreciar de cerca la deslumbrante naturaleza de esta región andino patagónica."');
        setTextIfLang(this, currentLanguage, 'txt-home-paragraph', dataEnglish, '"An unbeatable way to see the Andes mountains and to experience first-hand the natural beauty this corner of Patagonia has to offer."');

        setTextIfLang(this, currentLanguage, 'txt-home-key1', dataSpanish, 'Guía con título de guardabosque de la región Andino-Patagónica, único autorizado para realizar cabalgatas dentro del parque.');
        setTextIfLang(this, currentLanguage, 'txt-home-key1', dataEnglish, 'Owned and operated by the only park-ranger authorised to lead horse treks in the national park.');

        setTextIfLang(this, currentLanguage, 'txt-home-key2', dataSpanish, 'Nuestros guías son baqueanos y bilingües en castellano e inglés.');
        setTextIfLang(this, currentLanguage, 'txt-home-key2', dataEnglish, 'Run by local, knowledable guides fluent in English and Spanish.');

        setTextIfLang(this, currentLanguage, 'txt-home-key3', dataSpanish, 'Estamos en la entrada al Parque Nacional y ofrecemos una amplia gama de excursiones desde una hora hasta varios días.');
        setTextIfLang(this, currentLanguage, 'txt-home-key3', dataEnglish, 'We are located at the entrance to the park and offer a variety of trips from 1 hour to several days.');

        setTextIfLang(this, currentLanguage, 'txt-home-key4', dataSpanish, 'Disfrute del privilegio de tener el Parque Nacional Puelo en la puerta de su casa.');
        setTextIfLang(this, currentLanguage, 'txt-home-key4', dataEnglish, 'Enjoy the privilige of having the national park on your doorstep.');

        return;
        
        //Menu
        setTextIfLang(this, currentLanguage, 'lnk-menu-home', dataSpanish, 'Casa');
        setTextIfLang(this, currentLanguage, 'lnk-menu-home', dataEnglish, 'Home');

        setTextIfLang(this, currentLanguage, 'lnk-menu-prices', dataSpanish, 'Excursiones');
        setTextIfLang(this, currentLanguage, 'lnk-menu-prices', dataEnglish, 'Excursions');

        setTextIfLang(this, currentLanguage, 'lnk-menu-location', dataSpanish, 'Ubicacion');
        setTextIfLang(this, currentLanguage, 'lnk-menu-location', dataEnglish, 'Location');

        setTextIfLang(this, currentLanguage, 'lnk-menu-photos', dataSpanish, 'Fotos');
        setTextIfLang(this, currentLanguage, 'lnk-menu-photos', dataEnglish, 'Photos');

        setTextIfLang(this, currentLanguage, 'lnk-menu-about', dataSpanish, 'Sobre');
        setTextIfLang(this, currentLanguage, 'lnk-menu-about', dataEnglish, 'About');

        setTextIfLang(this, currentLanguage, 'lnk-menu-contact', dataSpanish, 'Contacto');
        setTextIfLang(this, currentLanguage, 'lnk-menu-contact', dataEnglish, 'Contact');

        setTextIfLang(this, currentLanguage, 'lnk-menu-accommodation', dataSpanish, 'El Portal Del Lago Departamentos');
        setTextIfLang(this, currentLanguage, 'lnk-menu-accommodation', dataEnglish, 'El Portal Del Lago Apartments');

        setTextIfLang(this, currentLanguage, 'lnk-menu-english', dataSpanish, 'Ingles');
        setTextIfLang(this, currentLanguage, 'lnk-menu-english', dataEnglish, 'English');

        setTextIfLang(this, currentLanguage, 'lnk-menu-spanish', dataSpanish, 'Castellano');
        setTextIfLang(this, currentLanguage, 'lnk-menu-spanish', dataEnglish, 'Spanish');

        //About
        setTextIfLang(this, currentLanguage, 'txt-about-ivan', dataSpanish, "Iván, nacido y criado en Lago Puelo, se ha dedicado a los caballos desde los 7 años. Su conocimiento del Parque Nacional Lago Puelo, su flora, su fauna y su geografía, sera invalorable para disfrutar de su entorno a pleno. Esto es fruto tanto de haber sido criado acá, como así de sus conocimientos adquiridos a través de sus estudios al recibirse de Guardaparque de la región Andino-patagónica. Trabajó con caballos en una estancia en Missisipi en los Estados Unidos antes de viajar a Europa. Se radicó en Escocia durante unos años antes de volver a Lago Puelo con su esposa Liza, para criar a sus dos hijitas en esta esquinita del paraíso.");
        setTextIfLang(this, currentLanguage, 'txt-about-ivan', dataEnglish, "Iván was born and raised in Lago Puelo. He has owned horses since he was 7 years old. His knowledge of the National Park, it's flora, fauna and geography, come from a lifetime of living in the area and from his studies as a Forest Ranger, specialising in the Andean Patagonian Region. He spent some time in Missisippi, in the USA, working on a horse ranch, before travelling to Europe. He settled in Scotland for a number of years, until he returned to Lago Puelo with his wife Liza, to raise their 2 young daughters, Chiara and Zoe in this little corner of paradise.");

        setTextIfLang(this, currentLanguage, 'txt-about-liza', dataSpanish, 'Liza también se crió en Lago Puelo, de padre argentino y madre escocesa, y creció hablando los dos idiomas. Al finalizar el secundario en Lago Puelo, viajó a Escocia donde se recibió de traductora e intérprete. A través de sus estudios viajó a México, España y Francia, antes de volver a radicarse en Lago Puelo. Está casada con Iván y durante los meses de invierno dirige su propia escuela de inglés junto con su hermana. Sin embargo, dedica la mayor parte de su tiempo a sus dos pequeñas.');
        setTextIfLang(this, currentLanguage, 'txt-about-liza', dataEnglish, 'Liza was also raised in Lago Puelo. She is half Scottish and half Argentinian and was brought up speaking both laguages. After finishing secondary school in Lago Puelo, she travelled to Scotland, where she completed a University degree in Translating and Interpreting. Her studies have taken her to Mexico, Spain and France before settling back in Lago Puelo. She is married to Iván and runs an English School during the winter months together with her sister. Most of the time, however, she runs around after their two young daughters.');

        //Contact
        setTextIfLang(this, currentLanguage, 'txt-contact-header', dataSpanish, 'Contáctese para organisar un paseo inolvidable');
        setTextIfLang(this, currentLanguage, 'txt-contact-header', dataEnglish, 'Contact us now to organise a booking');
        
        setTextIfLang(this, currentLanguage, 'txt-contact-mobile-ivan', dataSpanish, 'Celular (Iván)');
        setTextIfLang(this, currentLanguage, 'txt-contact-mobile-ivan', dataEnglish, 'Mobile (Iván)');

        setTextIfLang(this, currentLanguage, 'txt-contact-mobile-liza', dataSpanish, 'Celular (Liza)');
        setTextIfLang(this, currentLanguage, 'txt-contact-mobile-liza', dataEnglish, 'Mobile (Liza)');

        setTextIfLang(this, currentLanguage, 'txt-contact-email', dataSpanish, 'Email');
        setTextIfLang(this, currentLanguage, 'txt-contact-email', dataEnglish, 'Email');

        setTextIfLang(this, currentLanguage, 'txt-contact-address', dataSpanish, 'Dirección');
        setTextIfLang(this, currentLanguage, 'txt-contact-address', dataEnglish, 'Address');

        //Prices
        setTextIfLang(this, currentLanguage, 'txt-prices-header', dataSpanish, 'Precios de algunos de nuestros recorridos (2011-12)');
        setTextIfLang(this, currentLanguage, 'txt-prices-header', dataEnglish, 'Prices for some of our excursions (2011-12)');

        setTextIfLang(this, currentLanguage, 'txt-prices-subheader', dataSpanish, 'Tarifa por escursion depende del tamaño del grupo. Contáctese con nosotros para mas información.');
        setTextIfLang(this, currentLanguage, 'txt-prices-subheader', dataEnglish, 'Prices depend on group size. Please contact us for more information.');
        
        setTextIfLang(this, currentLanguage, 'txt-prices-destination', dataSpanish, 'Destino');
        setTextIfLang(this, currentLanguage, 'txt-prices-destination', dataEnglish, 'Destination');

        setTextIfLang(this, currentLanguage, 'txt-prices-duration', dataSpanish, 'Duración');
        setTextIfLang(this, currentLanguage, 'txt-prices-duration', dataEnglish, 'Duration');

        setTextIfLang(this, currentLanguage, 'txt-prices-route', dataSpanish, 'Ruta');
        setTextIfLang(this, currentLanguage, 'txt-prices-route', dataEnglish, 'Route');

        setTextIfLang(this, currentLanguage, 'lnk-prices-showmap', dataSpanish, 'En el mapa');
        setTextIfLang(this, currentLanguage, 'lnk-prices-showmap', dataEnglish, 'Show on map');

        setTextIfLang(this, currentLanguage, 'txt-prices-1-destination', dataSpanish, 'Paseo de los Viejos Pobladores');
        setTextIfLang(this, currentLanguage, 'txt-prices-1-destination', dataEnglish, 'Trip round the farms of the first settlers');

        setTextIfLang(this, currentLanguage, 'txt-prices-2-destination', dataSpanish, 'Mirador del Cerro Currumahuida');
        setTextIfLang(this, currentLanguage, 'txt-prices-2-destination', dataEnglish, 'Viewpoint on the Currumahuida mountain');

        setTextIfLang(this, currentLanguage, 'txt-prices-3-destination', dataSpanish, 'Cuenca del Río Azul y costa del Lago Puelo');
        setTextIfLang(this, currentLanguage, 'txt-prices-3-destination', dataEnglish, 'Along the River Azul to the coast of Lake Puelo');

        setTextIfLang(this, currentLanguage, 'txt-prices-4-destination', dataSpanish, '´Puesto de Maninga´ en el Cerro Currumahuida');
        setTextIfLang(this, currentLanguage, 'txt-prices-4-destination', dataEnglish, '´Maninga´s  refuge´ on the Currumahuida  mountain');

        setTextIfLang(this, currentLanguage, 'txt-prices-5-destination', dataSpanish, 'Puesto de Gendarmería sobre el Lago Puelo');
        setTextIfLang(this, currentLanguage, 'txt-prices-5-destination', dataEnglish, 'Gendarmerie base on Lake Puelo');

        setTextIfLang(this, currentLanguage, 'txt-prices-6-destination', dataSpanish, 'Límite con Chile');
        setTextIfLang(this, currentLanguage, 'txt-prices-6-destination', dataEnglish, 'Border with Chile');

        setTextIfLang(this, currentLanguage, 'txt-prices-other', dataSpanish, 'Consultenos por información sobre paseos más largos (ej: Paraje El Turbio, naciente del Río Chubut).');
        setTextIfLang(this, currentLanguage, 'txt-prices-other', dataEnglish, 'We also offer longer trips lasting several days (eg El Turbio , start of the river Chubut).');
        
        //Accommodation
        setTextIfLang(this, currentLanguage, 'txt-accommodation-header', dataSpanish, 'El Portal Del Lago Departamentos');
        setTextIfLang(this, currentLanguage, 'txt-accommodation-header', dataEnglish, 'El Portal Del Lago Apartments');

        setTextIfLang(this, currentLanguage, 'txt-accommodation-subheader', dataSpanish, 'Disfrute del privilegio de tener al Parque Nacional Lago Puelo en la puerta de su casa. Estamos ubicados en la entrada al parque, a una corta caminata del lago y del Rio Azul.');
        setTextIfLang(this, currentLanguage, 'txt-accommodation-subheader', dataEnglish, 'Enjoy the privilege of having the Lago Puelo National Park on your doorstep. We are at the entrance to the Park, a short walk away from the lake and the river Rio Azul.');

        setTextIfLang(this, currentLanguage, 'txt-accommodation-location', dataSpanish, 'Ubicacion: En la entrada al Parque Nacional Lago Puelo, Ruta 16 Km 14.500');
        setTextIfLang(this, currentLanguage, 'txt-accommodation-location', dataEnglish, 'Location: We are situated at the entrance to Lago Puelo National Park (Ruta 16 Km 14.500).');

        setTextIfLang(this, currentLanguage, 'txt-accommodation-contact', dataSpanish, 'Contacto: Para mas informacion, tarifas y reservas contactarse con Liza via email a cabalgataslagopuelo@gmail.com o al telefono (0294) 154 209417');
        setTextIfLang(this, currentLanguage, 'txt-accommodation-contact', dataEnglish, 'Contact: For further information, prices and reservations contact Liza at cabalgataslagopuelo@gmail.com Tel (0294) 154 209417');

        setTextIfLang(this, currentLanguage, 'txt-accommodation-point1', dataSpanish, 'Departamentos totalmente equipados (cocina con horno y vajilla completa, heladera, ropa de cama, toallas, calefacción a gas)');
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point1', dataEnglish, 'Fully equipped apartments (cooker with oven, all cutlery and crockery, fridge, linen and towels, gas heating');

        setTextIfLang(this, currentLanguage, 'txt-accommodation-point2', dataSpanish, 'Capacidad hasta 4 personas');
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point2', dataEnglish, 'Capacity for up to 4 people');

        setTextIfLang(this, currentLanguage, 'txt-accommodation-point3', dataSpanish, 'Planta baja con jardín y parrilla');
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point3', dataEnglish, 'Ground floor with garden and BBQ');
        
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point4', dataSpanish, 'Servicio de Wi-Fi');
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point4', dataEnglish, 'Wi-Fi available');
        
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point5', dataSpanish, 'TV Satelital');
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point5', dataEnglish, 'Satellite TV');
        
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point6', dataSpanish, 'Descuento en cabalgatas dentro del Parque y sus alrededores');
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point6', dataEnglish, 'Discount on horse-rides in the park and surrounding areas');
        
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point7', dataSpanish, 'Atendido por sus dueños');
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point7', dataEnglish, 'Owner operated');
        
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point8', dataSpanish, 'Abierto todo el año');
        setTextIfLang(this, currentLanguage, 'txt-accommodation-point8', dataEnglish, 'Open all year');
    
        setTextIfLang(this, currentLanguage, 'txt-accprices-photos', dataSpanish, 'Fotos');
        setTextIfLang(this, currentLanguage, 'txt-accprices-photos', dataEnglish, 'Photos');
        
        //Location
        setTextIfLang(this, currentLanguage, 'txt-location-header', dataSpanish, 'Estamos justo en la entrada al Parque Nacional');
        setTextIfLang(this, currentLanguage, 'txt-location-header', dataEnglish, 'We are located at the entrance to the national park');
    });
};

var setTextIfLang = function (element, currentLanguage, textName, language, text) {
    if (currentLanguage == language && $(element).hasClass(textName)) {
        $(element).text(text);
    }
};
