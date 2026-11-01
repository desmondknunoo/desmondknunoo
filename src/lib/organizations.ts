export type Organization = {
    name: string;
    logo?: {
        src: string;
        width: number;
        height: number;
        // Optical height in CSS pixels, after transparent margins are trimmed.
        displayHeight: number;
        maxWidth?: number;
    };
};

// Current workplaces first, larger brands next, then smaller organizations.
// Colour marks separate white-heavy marks, including the last-to-first seam.
// Entries awaiting an approved PNG remain readable as standalone text.
export const organizations: Organization[] = [
    {
        "name": "Lancaster University Ghana",
        "logo": {
            "src": "/logos/lancaster-university-ghana.png",
            "width": 535,
            "height": 218,
            "displayHeight": 56
        }
    },
    {
        "name": "Coral Reef Innovation Africa",
        "logo": {
            "src": "/logos/coral-reef.png",
            "width": 600,
            "height": 143,
            "displayHeight": 36
        }
    },
    {
        "name": "Innova Labs Ltd",
        "logo": {
            "src": "/logos/innova-labs.png",
            "width": 367,
            "height": 240,
            "displayHeight": 56
        }
    },
    {
        "name": "STEMR Tech Labs",
        "logo": {
            "src": "/logos/stemr-tech-labs.png",
            "width": 4166,
            "height": 1438,
            "displayHeight": 52
        }
    },
    {
        "name": "Achendo",
        "logo": {
            "src": "/logos/achendo.png",
            "width": 621,
            "height": 101,
            "displayHeight": 32,
            "maxWidth": 176
        }
    },
    {
        "name": "MTN Ghana",
        "logo": {
            "src": "/logos/mtn.png",
            "width": 480,
            "height": 240,
            "displayHeight": 56
        }
    },
    {
        "name": "Scania West Africa",
        "logo": {
            "src": "/logos/scania.png",
            "width": 567,
            "height": 116,
            "displayHeight": 40,
            "maxWidth": 200
        }
    },
    {
        "name": "United Nations Volunteers",
        "logo": {
            "src": "/logos/united-nations-volunteers.png",
            "width": 600,
            "height": 108,
            "displayHeight": 29
        }
    },
    {
        "name": "Closeup",
        "logo": {
            "src": "/logos/closeup.png",
            "width": 293,
            "height": 92,
            "displayHeight": 50,
            "maxWidth": 200
        }
    },
    {
        "name": "Mastercard",
        "logo": {
            "src": "/logos/mastercard.png",
            "width": 388,
            "height": 240,
            "displayHeight": 50
        }
    },
    {
        "name": "Layer5",
        "logo": {
            "src": "/logos/layer5.png",
            "width": 600,
            "height": 98,
            "displayHeight": 24
        }
    },
    {
        "name": "Access Bank",
        "logo": {
            "src": "/logos/access-bank.png",
            "width": 953,
            "height": 235,
            "displayHeight": 40
        }
    },
    {
        "name": "University of Ghana",
        "logo": {
            "src": "/logos/university-of-ghana.png",
            "width": 3363,
            "height": 985,
            "displayHeight": 40
        }
    },
    {
        "name": "Enterprise Group",
        "logo": {
            "src": "/logos/enterprise-group.png",
            "width": 470,
            "height": 155,
            "displayHeight": 58,
            "maxWidth": 176
        }
    },
    {
        "name": "FDA Ghana",
        "logo": {
            "src": "/logos/fda-ghana.png",
            "width": 240,
            "height": 240,
            "displayHeight": 80
        }
    },
    {
        "name": "Sanlam",
        "logo": {
            "src": "/logos/sanlam.png",
            "width": 125,
            "height": 27,
            "displayHeight": 38,
            "maxWidth": 176
        }
    },
    {
        "name": "British Council Ghana",
        "logo": {
            "src": "/logos/british-council.png",
            "width": 433,
            "height": 125,
            "displayHeight": 44,
            "maxWidth": 176
        }
    },
    {
        "name": "mPharma",
        "logo": {
            "src": "/logos/mpharma.png",
            "width": 600,
            "height": 105,
            "displayHeight": 28
        }
    },
    {
        "name": "Old Mutual",
        "logo": {
            "src": "/logos/old-mutual-white.png",
            "width": 1598,
            "height": 351,
            "displayHeight": 40,
            "maxWidth": 176
        }
    },
    {
        "name": "Antrak Express Ltd",
        "logo": {
            "src": "/logos/antrak-express.png",
            "width": 645,
            "height": 328,
            "displayHeight": 72,
            "maxWidth": 176
        }
    },
    {
        "name": "BOST",
        "logo": {
            "src": "/logos/bost.png",
            "width": 469,
            "height": 240,
            "displayHeight": 56
        }
    },
    {
        "name": "DKT",
        "logo": {
            "src": "/logos/dkt.png",
            "width": 530,
            "height": 450,
            "displayHeight": 72,
            "maxWidth": 176
        }
    },
    {
        "name": "Ghana Tourism Authority",
        "logo": {
            "src": "/logos/ghana-tourism-authority.png",
            "width": 156,
            "height": 63,
            "displayHeight": 56
        }
    },
    {
        "name": "VW Trucks and Buses",
        "logo": {
            "src": "/logos/vw-trucks-and-buses.png",
            "width": 347,
            "height": 600,
            "displayHeight": 84
        }
    },
    {
        "name": "Synlab",
        "logo": {
            "src": "/logos/synlab.png",
            "width": 500,
            "height": 114,
            "displayHeight": 40,
            "maxWidth": 176
        }
    },
    {
        "name": "Meshery",
        "logo": {
            "src": "/logos/meshery.png",
            "width": 235,
            "height": 231,
            "displayHeight": 80,
            "maxWidth": 176
        }
    },
    {
        "name": "EPP Books Services",
        "logo": {
            "src": "/logos/epp-books-services.png",
            "width": 2048,
            "height": 768,
            "displayHeight": 64,
            "maxWidth": 192
        }
    },
    {
        "name": "Joos",
        "logo": {
            "src": "/logos/joos.png",
            "width": 544,
            "height": 240,
            "displayHeight": 52
        }
    },
    {
        "name": "The Juste Foundation",
        "logo": {
            "src": "/logos/juste-foundation.png",
            "width": 279,
            "height": 275,
            "displayHeight": 80
        }
    },
    {
        "name": "Eclectic Love",
        "logo": {
            "src": "/logos/eclectic-love.png",
            "width": 600,
            "height": 219,
            "displayHeight": 52
        }
    },
    {
        "name": "Kimo",
        "logo": {
            "src": "/logos/kimo-logo-2020-1.png",
            "width": 2477,
            "height": 2202,
            "displayHeight": 80
        }
    },
    {
        "name": "Vidya Book Stores",
        "logo": {
            "src": "/logos/vidya-book-stores.png",
            "width": 811,
            "height": 218,
            "displayHeight": 37
        }
    },
    {
        "name": "Pageline Concepts",
        "logo": {
            "src": "/logos/pageline-concepts.png",
            "width": 1761,
            "height": 507,
            "displayHeight": 52,
            "maxWidth": 192
        }
    },
    {
        "name": "InnoCode",
        "logo": {
            "src": "/logos/innocode.png",
            "width": 1800,
            "height": 350,
            "displayHeight": 40,
            "maxWidth": 176
        }
    },
    {
        "name": "STEMBOTIKS",
        "logo": {
            "src": "/logos/stembotiks.png",
            "width": 599,
            "height": 113,
            "displayHeight": 36,
            "maxWidth": 176
        }
    },
    {
        "name": "Galaxy International School",
        "logo": {
            "src": "/logos/galaxy.png",
            "width": 640,
            "height": 213,
            "displayHeight": 52,
            "maxWidth": 176
        }
    },
    {
        "name": "BlueVyne",
        "logo": {
            "src": "/logos/bluevyne.png",
            "width": 600,
            "height": 150,
            "displayHeight": 32
        }
    },
    {
        "name": "Apex & Over",
        "logo": {
            "src": "/logos/apex-and-over.png",
            "width": 1368,
            "height": 108,
            "displayHeight": 28,
            "maxWidth": 240
        }
    },
    {
        "name": "KGL Foundation",
        "logo": {
            "src": "/logos/kgl-foundation.png",
            "width": 522,
            "height": 193,
            "displayHeight": 42
        }
    },
    {
        "name": "Teens In AI",
        "logo": {
            "src": "/logos/teens-in-ai.png",
            "width": 282,
            "height": 75,
            "displayHeight": 48,
            "maxWidth": 176
        }
    },
    {
        "name": "InnoKit",
        "logo": {
            "src": "/logos/innokit.png",
            "width": 1800,
            "height": 1079,
            "displayHeight": 80,
            "maxWidth": 176
        }
    },
    {
        "name": "DataKirk",
        "logo": {
            "src": "/logos/datakirk.png",
            "width": 308,
            "height": 240,
            "displayHeight": 56
        }
    },
    {
        "name": "Friends of NICU",
        "logo": {
            "src": "/logos/nicu.png",
            "width": 550,
            "height": 299,
            "displayHeight": 54
        }
    },
    {
        "name": "Vixcrown Handmade Craft",
        "logo": {
            "src": "/logos/vc logo-white.png",
            "width": 550,
            "height": 195,
            "displayHeight": 56
        }
    }
];
