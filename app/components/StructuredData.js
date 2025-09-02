export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nexstar-consulting.com/#organization",
        "name": "NexStar Consulting",
        "url": "https://nexstar-consulting.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nexstar-consulting.com/images/logo.png",
          "width": 300,
          "height": 100
        },
        "description": "NexStar Consulting provides Zoho solutions, RPA automation, and Applied AI services for scalable business operations in Dubai.",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "areaServed": "AE",
          "availableLanguage": ["English", "Arabic"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/nexstar-consulting",
          "https://twitter.com/nexstar_consulting"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://nexstar-consulting.com/#localbusiness",
        "name": "NexStar Consulting",
        "url": "https://nexstar-consulting.com",
        "telephone": "+971-XX-XXX-XXXX",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dubai Internet City",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "postalCode": "00000",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.2048,
          "longitude": 55.2708
        },
        "openingHours": "Mo-Fr 09:00-18:00",
        "priceRange": "$$",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 25.2048,
            "longitude": 55.2708
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Business Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Zoho Consulting",
                "description": "Zoho CRM, ERP, and business application consulting services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "RPA Automation",
                "description": "Robotic Process Automation solutions for business efficiency"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Applied AI Solutions",
                "description": "Artificial Intelligence implementation for business operations"
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://nexstar-consulting.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nexstar-consulting.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://nexstar-consulting.com/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "About",
            "item": "https://nexstar-consulting.com/#about"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Contact",
            "item": "https://nexstar-consulting.com/contact"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://nexstar-consulting.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does NexStar Consulting offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NexStar Consulting offers Zoho consulting, RPA automation, and Applied AI solutions for scalable business operations."
            }
          },
          {
            "@type": "Question",
            "name": "Where is NexStar Consulting located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are located in Dubai, United Arab Emirates, serving businesses across the region."
            }
          },
          {
            "@type": "Question",
            "name": "How can NexStar help with business automation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide comprehensive RPA and AI solutions to automate repetitive tasks and improve operational efficiency."
            }
          },
          {
            "@type": "Question",
            "name": "What industries do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve various industries including finance, healthcare, retail, and manufacturing with our technology solutions."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide ongoing support after implementation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide comprehensive ongoing support, training, and maintenance services for all our implementations."
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://nexstar-consulting.com/#website",
        "url": "https://nexstar-consulting.com",
        "name": "NexStar Consulting",
        "description": "Zoho, RPA & Applied AI for Scalable Operations",
        "publisher": {
          "@id": "https://nexstar-consulting.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://nexstar-consulting.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
