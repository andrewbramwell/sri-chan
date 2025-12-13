module.exports = {
    "name": "Sri-Chan Thai Massage",
    "email": "help@sri-chan-thai-massage.co.uk",
    "phoneForTel": "+447789789765",
    "phoneFormatted": "07789 789765",
    "openingHours": "Mon-Sat: 10am-8pm, Sun: 10am-7pm",
    "onlineBooking": "https://srichanthaimassage.setmore.com/",
    "address": {
        "lineOne": "Unit 6C Duck Farm Court",
        "lineTwo": "Station Way W",
        "city": "Aylesbury",
        "state": "",
        "zip": "HP20 2SQ",
        "country": "UK",
        "mapLink": "https://maps.app.goo.gl/Rz7cnHSWtm7FV1Sm8"
    },
    "socials": {
        "facebook": "https://www.facebook.com/profile.php?id=61570130061696",
        "instagram": "https://www.instagram.com/",
        "googleReview": "https://g.page/r/CZBKwkOvkMfSEBM/review",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://sri-chan-thai-massage.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://sri-chan-thai-massage.co.uk/#business",
            "name": "Sri-Chan Thai Massage",
            "image": "https://sri-chan-thai-massage.co.uk/assets/svgs/footer-logo.svg",
            "url": "https://sri-chan-thai-massage.co.uk",
            "telephone": "+447789789765",
            "email": "help@sri-chan-thai-massage.co.uk",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Unit 6C Duck Farm Court, Station Way W",
                "addressLocality": "Aylesbury",
                "postalCode": "HP20 2SQ",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/Rz7cnHSWtm7FV1Sm8"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "10:00",
                    "closes": "20:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "10:00",
                    "closes": "19:00"
                }
            ],
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61570130061696",
                "https://g.page/r/CZBKwkOvkMfSEBM/review"
            ]
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://sri-chan-thai-massage.co.uk/#website",
            "url": "https://sri-chan-thai-massage.co.uk",
            "name": "Sri-Chan Thai Massage",
            "publisher": {
                "@id": "https://sri-chan-thai-massage.co.uk/#business"
            }
        }
    }
};